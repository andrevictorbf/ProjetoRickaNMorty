import { Card, Button } from "react-bootstrap";
import { LocationsType } from "../../Types";


interface LocationsCardProps {
    locations: LocationsType[] | null;
}

export const LocationsCard: React.FC<LocationsCardProps> = ({ locations }) => {
    if (!locations || !Array.isArray(locations)) {
        return <div>Nenhuma localizacao encontrada.</div>;
    }
    return (

        <div>
            {locations.map(location => (
                <Card key={location.id} style={{ width: '18rem', padding: '16px ' }}>
                    <Card.Body>
                        <Card.Title>{location.name}</Card.Title>
                        <Card.Text>
                            {location.dimension}
                        </Card.Text>
                        <Card.Text>
                            {location.type}
                        </Card.Text>
                    </Card.Body>

                    <Button variant="dark">Veja mais!</Button>

                </Card>
            ))}
        </div>

    );
};

