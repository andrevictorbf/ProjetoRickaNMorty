import { useState, useEffect } from "react";
import { getAllCharacters } from "../../Services";
import { CharacterType } from "../../Types";
import { Row } from "react-bootstrap";
import CharactersCard from "../../Components/CharactersCard/CharactersCard";


export const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<CharacterType[] | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getAllCharacters();
                setCharacters(data);
            } catch (error) {
                console.error('Erro ao buscar personagens:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <>
            <Row className="gap-4">
                <h3 className="mb-4">Personagens</h3>
                < CharactersCard characters={characters} />
            </Row>

        </>


    )
}



