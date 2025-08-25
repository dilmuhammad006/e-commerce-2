import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './layout/index.ts';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

const client = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <MainLayout>
            <App />
          </MainLayout>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
