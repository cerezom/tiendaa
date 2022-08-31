import { useState, useEffect } from "react"


const Item = ({TextoBusqueda}) => {
    const  [carrito, setCarrito ] = useState([ ])
    const [productos, setProductos] = useState( [ ])

    const Producto = async ( )=>{
        try{
            const respinse = await fetch('http://api.mercadolivre.com/sites/MLA/search?q=${textoBusqueda}')
            const data = await Response.json ();
                }catch(e){
                    console.log(e)
                }



                fetch('htttps://api.mercadolibre.com/sites/MLA/search?q=${textoBusqueda}')
                .then(response => response.json())
                .then(data =>{

                }).catch(error =>{
                    console.log(error);
                })
                  
                  useEffect(() => {
                    Producto()
                  }, [TextoBusqueda])
                  console.log (productos)
                  console.log("Me estoy por renderizar")

}
    const [ numero, setNumero] = useState(0)

    function aumentar() {
        setNumero( numero + 1)

    }
    function disminuir(){
        setNumero( numero - 1)
    }


    return <section>
        <div className="contein">
        <h3>Productos</h3>
        <p>{numero}</p>
        <button className="contein" onClick={disminuir}>-</button>
        <button className="contein" onClick={aumentar}>+</button>
        {productos.map((productos) => {
            return <div>
            <button className="contein" onClick={() => {
                setCarrito( [ ...carrito,]);
                console.log(carrito)
            }}>
                
            Agregar al carrito 
            </button>
            </div> 
    })}
    </div>
    </section> 

 };
 export default Item()