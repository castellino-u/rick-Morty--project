import { FC, useEffect, useState } from "react"
import { Icharacter } from "../../../types/Icharacter"
import { useStorePagination } from "../../../Store/useStorePagination"
import { CardCharacter } from "../CardCharacter/CardCharacter"


interface Props {
  charactersArray: Icharacter[]
}

export const ListCharacters: FC<Props> = ({ charactersArray }) => {
  const [selectedSpecie, setSelectedSpecie] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [species, setSpecies] = useState<string[]>([])
  const [genders, setGenders] = useState<string[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Icharacter[]>([])

  const { page } = useStorePagination()



  useEffect(() => {
    const uniqueSpecies: string[] = []
    const uniqueGenders: string[] = []

    charactersArray.forEach(character => {
      if (!uniqueSpecies.includes(character.species)) {
        uniqueSpecies.push(character.species)
      }
      if (!uniqueGenders.includes(character.gender)) {
        uniqueGenders.push(character.gender)
      }
    })

    setSpecies(uniqueSpecies)
    setGenders(uniqueGenders)
  }, [charactersArray])

  useEffect(() => {
    const result = charactersArray.filter(character => {
      const matchesGender = selectedGender ? character.gender === selectedGender : true
      const matchesSpecie = selectedSpecie ? character.species === selectedSpecie : true
      return matchesGender && matchesSpecie
    })
    setFilteredCharacters(result)
  }, [selectedGender, selectedSpecie, charactersArray])


  useEffect(() => {
    if (!species.includes(selectedSpecie)) {
      setSelectedSpecie('')
    }
    if (!genders.includes(selectedGender)) {
      setSelectedGender('')
    }
  }, [page, species, genders])

  return (
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