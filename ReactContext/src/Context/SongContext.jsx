import { createContext, useState, useEffect} from "react";
import canciones from "../Utils/listaCanciones.json";
import { Children } from "react";


//1. Crear Contexto
export const Context = createContext();

//2. Crear Provider
function SongProvider({children}) {
    const[list, setList] = useState([]); //lista de canciones
    const[loading, setLoading] = useState(true); //si esta cargando
    const[selectedSong, setSelectedSong] = useState({}); //contiene cancion seleccionada
    const{search,setSearch} = useState(''); //identifica la palabra que pongo en el buscador
    useEffect(() => {
        setTimeout(() => {
            setList(canciones);
            setLoading(false);

        },2000);
       
    },[]);

    const data = {
        list,
        loading,
        selectedSong, 
        setSelectedSong,
        search,
        setSearch
    }
    return(
        <SongContext.Provider value={data}>
            {children}
        </SongContext.Provider>
    )
}

export{
    SongContext,
    SongProvider
}