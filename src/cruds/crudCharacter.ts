import axios from "axios"
import { Icharacter } from "../types/Icharacter"
import { IcharacterIndividual } from "../types/ICharacterIndividual"


//api
const BASE_URL = 'https://rickandmortyapi.com/api/character'
//paginado que ya trae la API   
// https://rickandmortyapi.com/api/character/?page=19

//get characters by page

export const getAllCharacters = async (numberPage : number): Promise<Icharacter[]>=>{

    try {
        
        const response = await axios.get(`${BASE_URL}/?page=${numberPage}`)
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