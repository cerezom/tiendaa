import { useState, useEffect } from "react"
import Navbar from '../Navbar/navbar'

const Item = () => {
    const  [carrito, setCarrito ] = useState([ ])
    const [productos, setProductos] = useState( [ ])

    const BuscarProductos = async ( )=>{
        try{
            const response = await fetch('http://api.mercadolibre.com/sites/MLA/search?q=${textoBusqueda}')
            const data = await response.json ();
            setProductos(data.results);
                }catch(e){
                    
                }
            
                useEffect(() => {
                    BuscarProductos()
                }, [])
                console.log (productos)
    console.log("Me estoy por renderizar")

}
return(
    <div className="App" style={{ fontsize: '20px,', borderBottom: "1px solid red"}}>
<Navbar carritoLength={carrito.length}/>   
   
<div>
    <h3>Producto</h3>
    <div>
        <button onClick={() =>{
            setCarrito([...carrito, "zapas"]);
            console.log(carrito)
        }}>
            Agregar al carrito
        </button>
         </div>
         </div>
         </div>

    );
 }

export default Item()