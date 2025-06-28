import axios from "axios"
import { Icharacter } from "../types/Icharacter"


//api
const BASE_URL = 'https://rickandmortyapi.com/api/character'

//get characters

export const getAllCharacters = async (): Promise<Icharacter[]>=>{

    try {
        
        const response = await axios.get(BASE_URL)
        return response.data.results
        
    } catch (error) {
        console.log("Ocurrió un error", error)
        return []
    }
}
