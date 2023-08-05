import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './Assets/index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import Landing from './Pages/Landing';


const queryClient = new QueryClient();

// The following code helps us ensure that during production mode 
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//we have to replace this token after adding auth. 
var isloggedin=1;



root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools/>
    <BrowserRouter>
    {isloggedin?<App/>:<Landing/>}
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
