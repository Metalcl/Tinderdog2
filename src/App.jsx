import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Dog from './components/Dog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dog />
    </QueryClientProvider>
  );
}

export default App;
