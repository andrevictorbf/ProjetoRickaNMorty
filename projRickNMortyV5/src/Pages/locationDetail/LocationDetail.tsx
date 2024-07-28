import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterType, LocationsType } from "../../Types";
import { getSingleLocation, locationChars } from "../../Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import { CharactersCard } from "../../Components";

interface RouteParams {
    id: string;
    [key: string]: string | undefined;
}

export const LocationDetail: React.FC = () => {

    const { id } = useParams<RouteParams>();
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [location, setLocation] = useState<LocationsType>({} as LocationsType);

    useEffect(() => {
        const fetchLocationCharacters = async () => {
            try {
                const locationData = await getSingleLocation(Number(id));
                setLocation(locationData);
                const charactersData = await locationChars(Number(id));
                setCharacters(charactersData);
            } catch (error) {
                console.error("Erro ao buscar personagem ou episódios:", error);
            }
        };

        fetchLocationCharacters();
    }, [id]);

    return (
        <div>
            <Container><h1 className=" my-4 text-center ">Detalhes da Localização:</h1></Container>
            <Container>
                <Row className="justify-content-center my-5">
                    <Col xs={12}>
                        {location && (
                            <Card className="mx-auto shadow-sm" style={{ width: '100%' }}>
                                <Card.Body>
                                    <Row>
                                        <Col className="text-start">
                                            <Card.Title>{location.name}</Card.Title>
                                            <Card.Text>Tipo: {location.type}</Card.Text>
                                            <Card.Text>Dimensão: {location.dimension}</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="gap-4 ">
                    <h1 className="mb-4 my-5 text-center">Residentes</h1>
                    {characters?.map((character) => (
                        <Col className="" key={character.id}>
                            <CharactersCard characters={[character]} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}