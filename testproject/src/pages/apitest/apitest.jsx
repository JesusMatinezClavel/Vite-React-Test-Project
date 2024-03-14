import './apitest.css'
import { useState, useEffect } from "react";
import { ApiCard } from "../../common/apiCard/apiCard";
import { getCharacters } from "../../services/apiCalls";

export const Apitest = () => {

    const [characters, setcharacters] = useState([])

    useEffect(() => {
        if (characters.length === 0) {
            const bringData = async () => {
                try {
                    const fetched = await getCharacters()
                    setcharacters(fetched)
                } catch (error) {
                    console.log(error);
                }
            }
            bringData()
        }
    }, [characters])

    const clickedCharacter = (person) => {
        console.log(person)
      }

    return (
        <>
            {
                characters.length > 0
                    ? <div className="apitestDesign">
                        {
                            characters.slice(0, 10).map((person) => {
                                return (
                                    <ApiCard
                                        key={person.id}
                                        name={person.name}
                                        species={person.species}
                                        image={person.image}
                                        clickFunction={()=>clickedCharacter(person)}
                                    />
                                )
                            })
                        }
                    </div>
                    : <div className="apitestDesign">The characters are coming!</div>
            }
        </>
    )
}