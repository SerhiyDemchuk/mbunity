import './App.css';
import { Suspense } from 'react';
import { AppRouter } from '@app/routing';

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
