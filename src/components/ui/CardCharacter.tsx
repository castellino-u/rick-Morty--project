import { Icharacter } from "../../types/Icharacter"

interface Props {
    character : Icharacter
}


export const CardCharacter : React.FC<Props> = ({character}) => {



    return (

    <div className="w-[350px]  h-[450px] border">
        <img src={character.image} alt="" />
        {character.id}
        
    </div>

    )
}
