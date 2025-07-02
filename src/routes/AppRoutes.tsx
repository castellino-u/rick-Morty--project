import { Route, Routes } from "react-router-dom"
import { MainScreent } from "../screens/MainScreent"
import { DetailScreen } from "../components/ui/DetailScreen"



export const AppRoutes = () => {



    return (



    
        <Routes>
            <Route path="/" element ={<MainScreent/>}/>
            <Route path="/DetailScreen/:idParam" element ={<DetailScreen/>}/>
        </Routes>
    


    )
}
