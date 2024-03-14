import './apitest.css'
import { useState, useEffect } from "react";
import { ApiCard } from "../../common/apiCard/apiCard";
import { Getcharacters } from "../../services/apiCalls";

export const Apitest = () => {

    const [characters, setcharacters] = useState([])

    useEffect(() => {
        if (characters.length === 0) {
            const bringData = async () => {
                try {
                    const fetched = await Getcharacters()
                    setcharacters(fetched)
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            <div>No characters called from Rick&Morty's API</div>
        }
        bringData()
    },[characters])

    return (
        <ApiCard />
    )
}