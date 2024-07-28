import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterType, EpisodeType } from "../../Types";
import { episodeChars, getSingleEpisode } from "../../Services/Episodes";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CharactersCard } from "../../Components";
import 'bootstrap/dist/css/bootstrap.min.css';


interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}


const EpisodeDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [episode, setEpisode] = useState<EpisodeType>({} as EpisodeType);

  useEffect(() => {
    const fetchEpisodeCharacters = async () => {
      try {
        const episodeData = await getSingleEpisode(Number(id));
        setEpisode(episodeData);
        const charactersData = await episodeChars(Number(id));
        setCharacters(charactersData);
      } catch (error) {
        console.error("Erro ao buscar personagem ou episódios:", error);
      }
    };

    fetchEpisodeCharacters();
  }, [id]);

  return (
    <div>
      <Container>
      <Button variant="dark" href="/episodios" className="my-5">Voltar</Button>
        <h1 className=" my-4 text-center ">Detalhes do Episodio</h1>
        </Container>
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12}>
            <Card className="mx-auto shadow-sm" style={{ width: '100%' }}>
              <Card.Body>
                <Row>
                  <Col className="text-start">
                    <Card.Title>{episode.name}</Card.Title>
                    <Card.Text>Data de exibicao: {episode.air_date}</Card.Text>
                    <Card.Text>Temporada: {episode.episode}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="gap-4 ">
          <h1 className="mb-4 my-5 text-center">Personagens</h1>
          {characters?.map((character) => (
            <Col className="" key={character.id} >
              <CharactersCard characters={[character]} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default EpisodeDetail;