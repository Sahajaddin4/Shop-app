
import { createRoot } from 'react-dom/client'
import store from './redux/store/store';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
   
    <Provider store={store}>
       <div className="app">
         <App/>
       <ToastContainer/>
       </div>
        </Provider>

    
    </BrowserRouter>
  
)
