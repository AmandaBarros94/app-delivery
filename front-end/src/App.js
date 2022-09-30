import AppProvider from './context/AppProvider';
import Router from './Router';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
