import { Route, Routes } from "react-router-dom"
import { MainScreen } from "../screens/MainScreen"
import { DetailScreen } from "../components/ui/DetailScreen/DetailScreen"



export const AppRoutes = () => {



    return (



    
        <Routes>
            <Route path="/" element ={<MainScreen/>}/>
            <Route path="/DetailScreen/:idParam" element ={<DetailScreen/>}/>
        </Routes>
    


    )
}
