//Crear un hook para consumir contexto

import {SongContext, SongProvider} from "../Context/SongContext";
import {useContext} from "react";

export const useSongContext = () =>{
    const context = useContext(SongContext);


    if (!context) {
        throw new Error("use context tiene que ser usado dentro de song provider");        
    }

    return context
}