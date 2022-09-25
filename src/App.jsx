import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ComponentTest from './pages/componentTest';
import FormPage from './pages/formPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FormPage/>}/>
          <Route path='/test' element={<ComponentTest/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
