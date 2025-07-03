import React from "react"
import { IcharacterIndividual } from "../../../types/ICharacterIndividual"

interface Props {
    character : IcharacterIndividual
}


export const CardDetail3d: React.FC <Props> = ({character}) => {

    
    return (


    <div className="flex flex-col gap-6 md:flex-row md:p-6 " >
        <div className="cursor-pointer [transform:perspective(800px)_rotateY(10deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] w-70 sm:w-84 p-5 bg-violet-300 rounded-lg shadow-lg group duration-300 m-auto mt-6">
            <h1 className="font-bold text-lg flex items-center justify-center animate-pulse">Character ID: {character.id}</h1>
            <div className="bg-center bg-cover bg-img-bg p-8 rounded-lg overflow-hidden ">
                <img  className="duration-300 group-hover:-translate-x-8 rounded-3xl border" src={character?.image} alt="girl image" />
            </div>

            <div className="text-center mt-4 text-gray-900">
                <p className="font-bold text-xl">{character?.name}</p>
                <p>Origin: {character?.origin.name}</p>
            </div>
        </div>
        
        <div className="rounded-4xl m-auto w-[80%]  bg-violet-300 p-10 flex flex-col gap-3 text-center mt-4 text-gray-900 text-lg md:w-[40%] md:h-[400px] 
        
        ">
            <p><span className="font-bold">Origin:</span> <br />{character.origin.name}</p>
            <p><span className="font-bold">Courrent location:</span> <br />{character.location.name}</p>
            <p><span className="font-bold">Status:</span> <br />{character.status}</p>
            <p><span className="font-bold">Species:</span> <br />{character.species}</p>
            <p><span className="font-bold">Gender:</span> <br />{character.gender}</p>
        </div>

    </div>
    )
}
