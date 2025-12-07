import { useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
  country: string;
  iso2: string;
  iso3: string;
}

interface State {
  name: string;
  state_code: string;
}

interface CityResponse {
  data: string[];
}

interface LocationSelectorProps {
  onLocationSelect: (location: {
    country: string;
    state: string;
    city: string;
  }) => void;
}

export default function LocationSelector({ onLocationSelect }: LocationSelectorProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [isLoading, setIsLoading] = useState({
    countries: false,
    states: false,
    cities: false
  });

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(prev => ({ ...prev, countries: true }));
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
        setCountries(response.data.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setIsLoading(prev => ({ ...prev, countries: false }));
      }
    };

    fetchCountries();
  }, []);

  // Fetch states when country is selected
  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) {
        setStates([]);
        setSelectedState('');
        setSelectedCity('');
        setCities([]);
        return;
      }
      
      setIsLoading(prev => ({ ...prev, states: true }));
      try {
        const response = await axios.post(
          'https://countriesnow.space/api/v0.1/countries/states',
          {
            country: selectedCountry
          },
          {
            timeout: 10000
          }
        );
        
        // Log the response to debug
        console.log('States API Response:', response.data);
        
        // Handle different possible response structures
        // The API typically returns: { data: { states: [...] } }
        let statesData: State[] = [];
        if (response.data?.data?.states && Array.isArray(response.data.data.states)) {
          statesData = response.data.data.states;
        } else if (Array.isArray(response.data?.data)) {
          statesData = response.data.data;
        }
        console.log('Parsed states:', statesData);
        
        setStates(statesData);
        setSelectedState('');
        setSelectedCity('');
        setCities([]);
        onLocationSelect({ country: selectedCountry, state: '', city: '' });
      } catch (error: any) {
        console.error('Error fetching states:', error);
        console.error('Country selected:', selectedCountry);
        console.error('Error response:', error.response?.data);
        console.error('Error message:', error.message);
        setStates([]);
        setSelectedState('');
        setSelectedCity('');
        setCities([]);
      } finally {
        setIsLoading(prev => ({ ...prev, states: false }));
      }
    };

    fetchStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  // Fetch cities when state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedCountry || !selectedState) {
        setCities([]);
        setSelectedCity('');
        return;
      }
      
      setIsLoading(prev => ({ ...prev, cities: true }));
      try {
        const response = await axios.post<CityResponse>(
          'https://countriesnow.space/api/v0.1/countries/state/cities',
          {
            country: selectedCountry,
            state: selectedState
          },
          {
            timeout: 10000
          }
        );
        
        setCities(response.data?.data || []);
        setSelectedCity('');
        onLocationSelect({ country: selectedCountry, state: selectedState, city: '' });
      } catch (error) {
        console.error('Error fetching cities:', error);
        setCities([]);
      } finally {
        setIsLoading(prev => ({ ...prev, cities: false }));
      }
    };

    fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedState]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    onLocationSelect({
      country: selectedCountry,
      state: selectedState,
      city: city
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative min-w-[180px]">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          disabled={isLoading.countries}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.iso3} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        {isLoading.countries && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
          </div>
        )}
      </div>

      <div className="relative min-w-[160px]">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          disabled={!selectedCountry || isLoading.states}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.state_code} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        {isLoading.states && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
          </div>
        )}
      </div>

      <div className="relative min-w-[150px]">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          disabled={!selectedState || isLoading.cities || cities.length === 0}
        >
          <option value="">
            {cities.length === 0 && selectedState ? 'No cities found' : 'Select City'}
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {isLoading.cities && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
          </div>
        )}
      </div>
    </div>
  );
}
