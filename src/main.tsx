import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { MainLayout } from './layout/index.ts';
import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
  QueryCache,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

const client = new QueryClient({
  queryCache: new QueryCache({
    onError: (err: any) => {
      const status = err?.response?.status;
      if (status === 401) toast.error('Login qiling');
      if (status === 403) toast.error("Forbidden! Ruxsat yo'q");
    },
  }),
  mutationCache: new MutationCache({
    onError: (err: any) => {
      const status = err?.response?.status;
      if (status === 401) toast.error('Login qiling');
      if (status === 403) toast.error("Forbidden! Ruxsat yo'q");
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
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
