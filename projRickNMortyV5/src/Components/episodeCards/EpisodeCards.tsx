import { Button, Card } from "react-bootstrap";
import { EpisodeType } from "../../Types";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
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
          <Link to={`/episode/${episode.id}`}>
            <Button variant="dark">Veja mais!</Button>
          </Link>
        </Card>
      ))}
    </div>
  )
}

