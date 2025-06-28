
//tengo que hacerlo FC a este para que funcione en diferentes contextos

import { Icharacter } from "../../types/Icharacter"
import { CardCharacter } from "./CardCharacter"

interface Props {
    //va a recibir un array y de que va a ser el array
    characterArray : Icharacter[]

}

export const ListCharacter : React.FC<Props> = ({characterArray}) => {

    





    return (
    
    <div>
        {characterArray.map((character)=>(
            <CardCharacter character={character} key={character.id}></CardCharacter>
        ))}
    </div>


    )
}
