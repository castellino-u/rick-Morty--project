import { useParams } from "react-router-dom"
import { Icharacter } from "../../types/Icharacter"
import { getCharacterById } from "../../cruds/crudCharacter"
import { useEffect, useState } from "react"
import { IcharacterIndividual } from "../../types/ICharacterIndividual"




export const DetailScreen = () => {
    //consigo el id desestructurando los params
    const {idParam} = useParams()

    const [charDetails, setCharDetails] = useState<IcharacterIndividual>()


    const characterDetails = async(id: string) =>{

        const response = await getCharacterById(id)
        setCharDetails(response)

    }

    useEffect(()=>{
        if(idParam){
            characterDetails(idParam)
        }
        
    },
    [])

    return (
    
    <div>
        <p>{charDetails?.name}</p>


    </div>
    )
}

