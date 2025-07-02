import axios from "axios"
import { Icharacter } from "../types/Icharacter"
import { IcharacterIndividual } from "../types/ICharacterIndividual"


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


//get by id


export const getCharacterById = async (id: string) : Promise<IcharacterIndividual | undefined >=>{

    
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        return response.data
    
    } catch (error) {
        console.error("error", error)
        return undefined
    }

}