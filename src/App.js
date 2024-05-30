import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RoutesProvider } from './RoutesContext';
import Test from './pages/Test';
import Home from './pages/Home';

function App() {
  return (
    <RoutesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </RoutesProvider>
  );
}

export default App;
