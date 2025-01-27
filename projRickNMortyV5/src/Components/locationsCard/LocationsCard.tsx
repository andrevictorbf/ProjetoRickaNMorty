import { Card, Button } from "react-bootstrap";
import { LocationsType } from "../../Types";
import { Link } from "react-router-dom";

interface LocationsCardProps {
    locations: LocationsType[] | null;
}

export const LocationsCard: React.FC<LocationsCardProps> = ({ locations }) => {
    if (!locations || !Array.isArray(locations)) {
        return <div>Nenhuma localizacao encontrada.</div>;
    }
    return (
        <>
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
                    <Card.Body className="d-flex justify-content-center">
                        <Link to={`/location/${location.id}`}>
                        <Button variant="dark">Veja mais!</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};