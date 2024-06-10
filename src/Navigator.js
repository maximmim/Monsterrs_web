import Home from '../src/screen/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Navigator() {
  return (
    <div className='contaniner'>
    <BrowserRouter>
        <Routes> {/* Замените Switch на Routes */}
          <Route path='/' element={<Home />} /> {/* Замените Component на element */}
        </Routes> {/* Замените Switch на Routes */}
    </BrowserRouter>
    </div>
  );
}

export default Navigator;
