
import './App.css';
import Navbar from './components/Navbar/navbar';
import Title from './components/Text/tittle';
import ItemListContainer from './components/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ItemList from './components/container/Item';
import Item from './components/container/Item';

function App() {
  return (
    <div className="App" style={{fontSize: '20px' , borderBotton: '1px solid red'}}>
    <Navbar/>
      <Title/>
      <ItemListContainer textoBusqueda={"Zapatillas"}/>
       <Item/>
       <ItemList/>
    </div>
  );
}




export default App;


