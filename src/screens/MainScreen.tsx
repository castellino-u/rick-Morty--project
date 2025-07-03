import { useEffect, useState } from "react"
import { Header } from "../components/ui/Header/Header"
import { getAllCharacters } from "../cruds/crudCharacter"
import { Icharacter } from "../types/Icharacter"
import { useStorePagination } from "../Store/useStorePagination"
import { Pagenation } from "../components/ui/DetailScreen/Pagination"
import { ListCharacters } from "../components/ui/ListCharacter/ListCharacter"
import { Loader } from "../components/ui/Loader/Loader"
import { Footer } from "../components/ui/Footer/Footer"



export const MainScreen = () => {
    //Estado para el loading
    const [loading, setLoading] = useState(false)

    //estado para los characters
    const [arrayCharacters, setArrayCharacters] = useState<Icharacter[]>([])

    //estado para el paginado
    const {page} = useStorePagination()

    //resolvedora
    const getCharacters = async ()=>{
        setLoading(true)
        const response = await getAllCharacters(page)
        setArrayCharacters(response)
        setLoading(false)    
    }

    useEffect(()=>{
        getCharacters()
    },
    [page])

    return (
    <div>
        
        <Header/>
        <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-[100%] w-[100%]  flex flex-col m-auto">
            {loading ? <Loader/> : < ListCharacters charactersArray={arrayCharacters} />}
        </div>
        <Pagenation/>
        <Footer/>
    </div>
    )
}
