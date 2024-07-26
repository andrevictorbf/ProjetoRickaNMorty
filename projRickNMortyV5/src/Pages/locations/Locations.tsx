import { useState, useEffect } from "react";
import { LocationsType } from "../../Types";
import { getAllLocations } from "../../Services";
import { Container, Row, Col } from "react-bootstrap";
import { LocationsCard } from "../../Components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Locations = () => {
    const [locations, setLocations] = useState<LocationsType[] | null>(null);
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const data = await getAllLocations();
                setLocations(data);
            } catch (error) {
                console.error('Erro ao buscar os episodios:', error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <Container>
            <Row className="gap-4">
                <h1 className="mb-4 my-5 text-center">Localizacoes</h1>
                {locations?.map((location) => (
                    <Col key={location.id} >
                        <LocationsCard locations={[location]} />
                    </Col>
                ))}


            </Row>

        </Container>
    )
}

