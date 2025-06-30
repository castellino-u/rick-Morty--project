import { Icharacter } from "../../types/Icharacter"

interface Props {
    character : Icharacter
}


export const CardCharacter : React.FC<Props> = ({character}) => {



    return (

    <div className="w-[400px]  h-[450px] border-2 rounded-2xl overflow-hidden   cursor-pointer hover:scale-101">
        <img src={character.image} alt="" className="w-full h-[70%]" />
        <div className="text-black font-bold flex items-center  gap-6 m-7">
            <p>Id: <br />{character.id}</p>
            <p>Name:<br />{character.name}</p>
            <p>Species: <br />{character.species}</p>
            <p>Status:  <br />{character.status} </p>
        </div>
    </div>

    )
}
