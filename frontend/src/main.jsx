import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider , DateProvider,FilterProvider, AuthProvider, WishlistProvider,HotelProvider,AlertProvider} from './Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <DateProvider>
        <FilterProvider>
          <AuthProvider>
            <WishlistProvider>
              <HotelProvider>
                <AlertProvider>
                  <App />
                </AlertProvider>
              </HotelProvider>
            </WishlistProvider>
          </AuthProvider>
        </FilterProvider>
      </DateProvider>
    </CategoryProvider>
  </StrictMode>,
)
