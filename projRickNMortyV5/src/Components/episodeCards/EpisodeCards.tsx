import { Button, Card } from "react-bootstrap";
import { EpisodeType } from "../../Types";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
interface EpisodeCardsProps {
  episodes: EpisodeType[] | null;
}

export const EpisodeCards: React.FC<EpisodeCardsProps> = ({ episodes }) => {
  if (!episodes || !Array.isArray(episodes)) {
    return <div>Nenhum episodio encontrado.</div>;
  }
  return (
    <div>
      {episodes.map(episode => (
        <Card key={episode.id} style={{ width: '18rem', padding: '16px ' }}>
          <Card.Body>
            <Card.Title>{episode.name}</Card.Title>
            <Card.Text>
              {episode.air_date}
            </Card.Text>
            <Card.Text>
              {episode.episode}
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

