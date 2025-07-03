import { FC, useEffect, useState } from "react"
import { Icharacter } from "../../../types/Icharacter"
import { useStorePagination } from "../../../Store/useStorePagination"
import { CardCharacter } from "../CardCharacter/CardCharacter"


// componente para listar a los personajes y renderizarlos dependiendo de los filtros seleccionados


interface Props {
  charactersArray: Icharacter[]
}

export const ListCharacters: FC<Props> = ({ charactersArray }) => {
  //Definimos los estados 
  const [selectedSpecie, setSelectedSpecie] = useState('')  //estado para el select de Species(especies)
  const [selectedGender, setSelectedGender] = useState('')  //estado para el select de Gender(generos)
  const [species, setSpecies] = useState<string[]>([])   //estados para especies
  const [genders, setGenders] = useState<string[]>([])   //estados para géneros
  const [filteredCharacters, setFilteredCharacters] = useState<Icharacter[]>([])  //estado para mostrar a los personajes filtrados, ya sea por género o raza

  const { page } = useStorePagination()  //traemos de la Store, el número de página



  useEffect(() => {

    //array de especies y generos para listarlas en el select
    const uniqueSpecies: string[] = []
    const uniqueGenders: string[] = []

    charactersArray.forEach(character => {
      //si el array de especies no incluye la especie del personaje, la agregamos, si la incluye no hacemos nada  
      if (!uniqueSpecies.includes(character.species)) {
        uniqueSpecies.push(character.species)
      }
      if (!uniqueGenders.includes(character.gender)) {
        uniqueGenders.push(character.gender)
      }
    })

    //seteamos las species y genders
    setSpecies(uniqueSpecies)
    setGenders(uniqueGenders)

    }, [charactersArray])
  
  //useEffect para filtrar por personaje y género seleccionado
  useEffect(() => {
    //recorre todos los personajes y los filtra, me devuelve solo los que coinciden con la especie y e l genero seleccionado
    const result = charactersArray.filter(character => {
      const matchesGender = selectedGender ? character.gender === selectedGender : true  //si selectedGender tiene un valor, comprueba si el personaje tiene ese mismo género, si es null, me da true para no descargar ningún personaje y agregarlo al array
      const matchesSpecie = selectedSpecie ? character.species === selectedSpecie : true ////si selectedGender tiene un valor, comprueba si el personaje tiene ese misma especie, si es null, me da true para no descargar ningún personaje y agregarlo al array
      return matchesGender && matchesSpecie
    })
    //setea los personajes que cumplieron con las condiciones, para mostrarlos después
    setFilteredCharacters(result)
  }, [selectedGender, selectedSpecie, charactersArray])


  //useEffect para resetear los filtros cada vez que se cambia de página y hay otros personajes, o  por si ese género o especie desaparecen 
  useEffect(() => {
    if (!species.includes(selectedSpecie)) {
      setSelectedSpecie('')
    }
    if (!genders.includes(selectedGender)) {
      setSelectedGender('')
    }
  }, [page, species, genders])

  return (
    // componente para mostrar los filtros
    <div >
      <div className="w-8/10 m-auto flex justify-between mt-5 max-w-[450px]">
        <select className="bg-white p-2 rounded-xl w-[200px]" onChange={(e) => setSelectedSpecie(e.target.value)} value={selectedSpecie}>
          <option value="">Select a specie</option>
          {species.map((specie, index) => (
            <option value={specie} key={index}>{specie}</option>
          ))}
        </select>

        <select className="bg-white p-2 rounded-xl w-[200px]" onChange={(e) => setSelectedGender(e.target.value)} value={selectedGender}>
          <option value="">Select a gender</option>
          {genders.map((gender, index) => (
            <option value={gender} key={index}>{gender}</option>
          ))}
        </select>
      </div>

      <div className="w-9/10 h-[92vh] m-auto mt-10 flex flex-wrap overflow-y-auto justify-center gap-12 py-9">
        {filteredCharacters.map(character => (
          <CardCharacter character={character} key={character.id} />
        ))}
      </div>
    </div>
  )
}