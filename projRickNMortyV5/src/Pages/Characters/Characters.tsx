import { useState, useEffect } from "react";
import { getAllCharacters } from "../../Services";
import { CharacterType } from "../../Types";


export const Character = () => {
    const [character, setCharacter] = useState<CharacterType[]>([]);

    useEffect(() => {
        const getData = async () => {

            const [characterData] = await Promise.all([getAllCharacters()]);
            setCharacter(characterData);
        }
        getData();

    }, []);
    return (


        
    )
}


