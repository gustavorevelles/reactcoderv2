import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/about' element={<h1>Sobre nosotros</h1>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
