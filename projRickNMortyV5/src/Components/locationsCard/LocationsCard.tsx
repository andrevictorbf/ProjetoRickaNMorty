import { Card, Button } from "react-bootstrap";
import { LocationsType } from "../../Types";
interface LocationsCardsProps {
    locations: LocationsType[];
  }
  

export const LocationsCard: React.FC<LocationsCardsProps> = ({ locations }) => {
// arrumar acentuacao e erros de digitacao
  return (
      <div>
        {locations.map(location => (
          <Card key={location.id} style={{ width: '18rem', padding: '16px ' }}>
            <Card.Body>
              <Card.Title>{location.name}</Card.Title>
              <Card.Text>
                {location.type}
              </Card.Text>
              <Card.Text>
                {location.dimension}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-center">
              <Button variant="dark">Veja mais!</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    )
}
