import { createContext, useState, useEffect} from "react";
import canciones from "../Utils/listaCanciones.json";
import {children} from "react";


//1. Crear Contexto
const SongContext = createContext();

//2. Crear Provider
function SongProvider({children}) {
    const[list, setList] = useState([]); //lista de canciones
    const[loading, setLoading] = useState(true); //si esta cargando
    const[selectedSong, setSelectedSong] = useState({}); //contiene cancion seleccionada
    const[search, setSearch] = useState(''); //identifica la palabra que pongo en el buscador
    useEffect(() => { 
        setTimeout(() => {
            setList(canciones);
            setLoading(false);

        },2000);
       
    },[]);

    //---------------
    const filteredList = list.filter(song => 
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
    );
    //-----------

    const data = {
        list: filteredList,
        //list,
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

export { SongContext, SongProvider };
