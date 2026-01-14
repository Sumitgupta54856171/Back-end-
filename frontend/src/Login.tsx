import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {Eye,EyeOff} from "lucide-react";
import axios from "axios";

export default function Login(){
    const[showPassword,setShowPassword] = useState(false);
    const[formData,setFormData] = useState({
        email:"",
        password:"",
    });
    const[isLoading,setIsLoading] = useState(false);
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))
    }
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          
            console.log('Login submitted:', formData);
             const oauthsign = () => {
                  window.location.href = "http://localhost:3004/auth/google";
             }
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    }


return (
    <div className="min-h-screen bg-white font-sans text-[#181111] flex flex-col">
      
      {/* Simple Header for Login Page */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#f4f0f0]">
        <div className="flex items-center gap-4 text-[#181111] cursor-pointer">
            {/* Reusing the Logo from Navbar */}
            <div className="w-8 h-8 text-[#ea2a33]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#ea2a33] text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">
              StayAway
            </h2>
        </div>
        <button className="text-sm font-medium hover:bg-[#f4f0f0] px-4 py-2 rounded-full transition-colors">
          Join now
        </button>
      </header>

      {/* Main Login Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white">
          
          {/* Login Card Header */}
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
            <p className="text-[#886364]">Login to manage your trips and wishlists.</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Input */}
            <div className="space-y-1">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3.5 text-[#181111] placeholder:text-[#886364] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3.5 text-[#181111] placeholder:text-[#886364] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#886364] hover:text-[#181111]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-medium">
               <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                  <span>Remember me</span>
               </label>
               <a href="#" className="underline decoration-1 hover:text-black text-[#886364]">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ea2a33] hover:bg-[#d9252d] text-white font-bold py-3.5 rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Continue'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#eddddd]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-[#886364]">or login with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full border border-[#181111] hover:bg-[#f7f7f7] font-medium py-3 rounded-lg flex items-center justify-center gap-3 transition-colors relative">
               <svg className="w-5 h-5 absolute left-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                  <path d="M3.15295 7.3455L6.4385 9.755C7.3275 7.554 9.4805 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.1585 2 4.828 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
                  <path d="M12 22C14.6605 22 17.0715 20.9455 18.8585 19.233L15.6925 16.7195C14.6295 17.5475 13.346 18 12 18C9.3865 18 7.1705 16.3255 6.3455 13.9945L3.1085 16.5235C4.7815 19.777 8.1315 22 12 22Z" fill="#4CAF50"/>
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.257 15.108 16.5765 16.0715 15.6925 16.7195L18.8585 19.233C20.791 17.4455 22 14.897 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
               </svg>
               <span>Continue with Google</span>
            </button>
            
            <button className="w-full border border-[#181111] hover:bg-[#f7f7f7] font-medium py-3 rounded-lg flex items-center justify-center gap-3 transition-colors relative">
               <svg className="w-5 h-5 absolute left-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
               </svg>
               <span>Continue with Facebook</span>
            </button>

            <button className="w-full border border-[#181111] hover:bg-[#f7f7f7] font-medium py-3 rounded-lg flex items-center justify-center gap-3 transition-colors relative">
               <svg className="w-5 h-5 absolute left-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.1 1.88-2.57 6.55.66 7.95-.64 1.47-1.47 2.93-2.71 4.26zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
               </svg>
               <span>Continue with Apple</span>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}