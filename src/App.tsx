import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModelPage from './pages/ModelPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/models/:id' element={<ModelPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
