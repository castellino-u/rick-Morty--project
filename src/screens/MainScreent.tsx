import { useEffect, useState } from "react"
import { Header } from "../components/ui/Header"
import { getAllCharacters } from "../cruds/crudCharacter"
import { Icharacter } from "../types/Icharacter"
import { ListCharacter } from "../components/ui/ListCharacter"



export const MainScreent = () => {
    const [arrayCharacters, setArrayCharacters] = useState<Icharacter[]>([])

    //resolvedora
    const getCharacters = async ()=>{
        const response = await getAllCharacters()
        setArrayCharacters(response)
    }

    useEffect(()=>{
        getCharacters()
    },
    [])

    return (
    <div>
        <Header></Header>
        <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-[100%] w-[100%]  flex flex-col m-auto">
            <ListCharacter characterArray={arrayCharacters} ></ListCharacter>
        </div>
    </div>
    )
}
