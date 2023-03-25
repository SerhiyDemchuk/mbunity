import './App.css';
import { Suspense } from 'react';
import { AppRouter } from '@app/routing';
import { Header } from '@/widgets';

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
