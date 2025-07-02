
//tengo que hacerlo FC a este para que funcione en diferentes contextos

import { useState } from "react"
import { Icharacter } from "../../types/Icharacter"
import { CardCharacter } from "./CardCharacter"

interface Props {
    //va a recibir un array y de que va a ser el array
    characterArray : Icharacter[]

}

export const ListCharacter : React.FC<Props> = ({characterArray}) => {

    //filtrado: mapear sobre el array que tenes, agarrar el elemento que queres y luego 
    //array para guardar las razas
    const arraySpecie: string[] = []
    const arrayGender: string[] = []

    //estado para guardar el click del select
    const [specie, setSpecie] = useState ("")
    const [gender, setGender] = useState ("")


    //le puedo poner como quiera, por ejemplo pepe
    characterArray.map((pepe)=>{
        //acá guardo las especies 
        if(!arraySpecie.includes(pepe.species)){
            arraySpecie.push(pepe.species)
        }
        if(!arrayGender.includes(pepe.gender)){
            arrayGender.push(pepe.gender)
        }
    })

    //ahora hay que agregar un handleChange para mostrar lo que yo clickee
    const handleChangeSpecie  = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        //el setSpecie recive el valor del selec que clickeamos, el evento
        setSpecie(e.target.value)
    }

    //handleChange para Gender
    const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setGender(e.target.value)
    }

    //un filter retorna un array
    //filtrado 

    const mapFuncion = (selectGender : string , selectSpecie : string) =>{
        return characterArray.filter((character)=>{
            const matchGender = selectGender ? character.gender === selectGender : true
            const matchSpecie = selectSpecie ? character.species == selectSpecie : true

            return matchGender && matchSpecie

        } )
    }

    const arrayMapeado = mapFuncion(gender,specie)

    return (
    <div className="h-[89vh] ">

        <div className="flex justify-center gap-6 py-4">
            
            <select name="" id="" onChange={handleChangeSpecie} className="border w-[150px]  rounded-3xl  focus:outline-none focus:ring-2 focus:ring-blue-40 bg-white">
                <option value="">Select a specie</option>
                {
                    arraySpecie.map((specie, index)=>(
                    <option value={specie} key={index} >{specie} </option>
                    ))
                }
            </select>

            <select name="" id="" onChange={handleChangeGender} className="border w-[150px]   rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-40 bg-white ">
                <option value="">Select a gender</option>
                    {
                        arrayGender.map((gender, index)=>(
                        <option value={gender} key={index} >{gender}</option>
                        ))
                    }
            </select>
            
        </div>

        <div className="m-auto flex flex-wrap justify-center  gap-10  overflow-y-auto h-[74vh] mt-4 ">
            {arrayMapeado.map((character)=>(
                <CardCharacter character={character} key={character.id}></CardCharacter>
            ))}
        </div>
    </div>

    )
}
