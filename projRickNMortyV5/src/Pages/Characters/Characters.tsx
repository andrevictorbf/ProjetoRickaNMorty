import { useState, useEffect } from "react";
import { getAllCharacters } from "../../Services";
import { CharacterType } from "../../Types";
import { Col, Container, Row } from "react-bootstrap";
import { CharactersCard } from "../../Components";



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
        
            <Container>
                <Row className="gap-4  ">
                    <h1 className="mb-4 my-5 text-center">Personagens</h1>
                    {characters?.map((character) => (
                        <Col key={character.id} >
                            <CharactersCard characters={[character]} />
                        </Col>
                    ))}
                </Row>
            </Container>


        


    )
}



