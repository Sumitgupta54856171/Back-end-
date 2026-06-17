import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import Condition from './context/features/Condition.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Condition>

     <App />
    </Condition>
  
     

    
   
      
    </BrowserRouter>
  </StrictMode>,
)
