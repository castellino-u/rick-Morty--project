import { useParams } from "react-router-dom"
import { getCharacterById } from "../../../cruds/crudCharacter"
import { useEffect, useState } from "react"
import { IcharacterIndividual } from "../../../types/ICharacterIndividual"
import { Header } from "../Header/Header"
import { CardDetail3d } from "./CardDetail3d"
import { Loader } from "../Loader/Loader"




export const DetailScreen = () => {
    //Estado para el loading
        const [loading, setLoading] = useState(false)

    //consigo el id desestructurando los params
    const {idParam} = useParams()

    const [charDetails, setCharDetails] = useState<IcharacterIndividual>()


    const characterDetails = async(id: string) =>{
        setLoading(true)
        const response = await getCharacterById(id)
        setCharDetails(response)
        setLoading(false)
    }

    useEffect(()=>{
        if(idParam){
            characterDetails(idParam)
        }
        
    },
    [])

    return (
    
    <div className="bg-gray-200 min-h-[100vh]">
        <Header></Header>

        { loading ? <Loader/> : (charDetails && <CardDetail3d character={charDetails}></CardDetail3d>)}

        


    </div>
    )
}

