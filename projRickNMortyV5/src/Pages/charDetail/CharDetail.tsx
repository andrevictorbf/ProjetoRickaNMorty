import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleCharacter, charEpisode } from "../../Services";
import { CharacterType, EpisodeType } from "../../Types";
import { Container, Row, Col, Card } from "react-bootstrap";
import { EpisodeCards } from "../../Components";
import 'bootstrap/dist/css/bootstrap.min.css';



interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const CharDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  useEffect(() => {
    const fetchCharacterAndEpisodes = async () => {
      try {
        const characterData = await getSingleCharacter(Number(id));
        setCharacter(characterData);

        const episodeData = await charEpisode(Number(id));
        setEpisodes(episodeData);
      } catch (error) {
        console.error("Erro ao buscar personagem ou episódios:", error);
      }
    };

    fetchCharacterAndEpisodes();
  }, [id]);

  if (!character || episodes.length === 0) {
    return null;
  }

  return (
    <div>
      <Container><h1 className=" my-4 text-center ">Detalhes do Personagem</h1></Container>
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12}>
            <Card className="mx-auto shadow-sm" style={{ width: '100%' }}>
              <Card.Body>
                <Row>
                  <Col md={8} className="text-start">
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>Espécie: {character.species}</Card.Text>
                    <Card.Text>Status: {character.status}</Card.Text>
                    <Card.Text>Origem: {character.origin.name}</Card.Text>
                    <Card.Text>Localização: {character.location.name}</Card.Text>
                  </Col>
                  <Col md={4}>
                    <Card.Img src={character.image} className="img-fluid" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>





      {/* esquema do card
    <h1>{character.name}</h1>
    <img src={character.image} alt={character.name} />
    <p>Status: {character.status}</p>
    <p>Gênero: {character.gender}</p>
    <p>Origem: {character.origin.name}</p>
    <p>Localização: {character.location.name}</p>
    <p>Espécie: {character.species}</p>
    <p>Tipo: {character.type || 'N/A'}</p>  */}
      <Container>
        <Row className="gap-4">
          <h1 className=" my-5 text-center ">Episodios em que {character.name} aparece</h1>
          {episodes?.map((episode) => (
            <Col key={episode.id} >
              <EpisodeCards episodes={[episode]} />
            </Col>
          ))}
        </Row>

      </Container>
    </div >

  );
};

export default CharDetail;

