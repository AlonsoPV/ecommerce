import { createContext, useState, useEffect} from "react";
import productos from "../Utils/listaProductos.json";
import {children} from "react";


//1. Crear Contexto
const ProductContext = createContext();

//2. Crear Provider
function ProductProvider({children}) {
    const[list, setList] = useState([]); //lista de canciones
    const[loading, setLoading] = useState(true); //si esta cargando
    const[selectedSong, setSelectedProduct] = useState({}); //contiene cancion seleccionada
    const[search, setSearch] = useState(''); //identifica la palabra que pongo en el buscador
    useEffect(() => { 
        setTimeout(() => {
            setList(productos);
            setLoading(false);

        },2000);
       
    },[]);

    //---------------
    const filteredList = list.filter(producto => 
        producto.title.toLowerCase().includes(search.toLowerCase()) ||
        producto.artist.toLowerCase().includes(search.toLowerCase())
    );
    //-----------

    const data = {
        list: filteredList,
        //list,
        loading,
        selectedProduct, 
        setSelectedProduct,
        search,
        setSearch
    }
    return(
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider };
