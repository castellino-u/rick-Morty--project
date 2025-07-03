import { useNavigate } from "react-router-dom";



export const Header = () => {
  //este me lleva al inicio
  const navigate = useNavigate()
  return (
    <header className="bg-blue-900 h-[11vh] ">
        <h1 className="font-bold text-3xl text-white p-3 py-5" onClick={()=>navigate("/")} >Rick and Morty Project</h1>
    </header>
  );
};