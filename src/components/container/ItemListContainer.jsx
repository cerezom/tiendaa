import { useState, useEffect } from "react";
import ItemList from './ItemList';


function ItemListContainer({textoBusqueda }) { 
const [items, setItems] = useState([])
const [loaded,setLoaded] = useState(false)

const buscarProductos = async () => {
    try{ 
        const response = await fetch('httpS://api.mercadolibre.com/sites/MLA/search?q='+textoBusqueda)
        const data = await response.json ();
        console.log(data)
        setItems(data.results);
        setLoaded(true)
            } catch(e){
                console.log(e)
            }

    }
useEffect(() => {
    buscarProductos()
}, [])

if(!loaded){
    return <h1>Loading..</h1>
}
return(
    <ItemList productos = {items.slice(0)} /> 
)
}
export default ItemListContainer






