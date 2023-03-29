import './App.css';
import { Suspense } from 'react';
import { AppRouter } from '@app/routing';
import { Footer, Header } from '@/widgets';

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
