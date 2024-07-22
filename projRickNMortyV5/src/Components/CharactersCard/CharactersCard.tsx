
import React from 'react';
import { CharacterType } from '../../Types';
import { Card, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CharactersCardProps {
  characters: CharacterType[] | null;
}

export const CharactersCard: React.FC<CharactersCardProps> = ({ characters }) => {
  if (!characters || !Array.isArray(characters)) {
    return <div>Nenhum personagem encontrado.</div>;
  }

    return (
        <div>
            {characters.map(character => (
              <Col md={4} className=" mb-4 ">
                  <Card className="shadow-sm mb-5 bg-body rounded"  style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                      {character.status}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{character.gender}</ListGroup.Item>
                    <ListGroup.Item>{character.origin.name}</ListGroup.Item>
                    <ListGroup.Item>{character.location.name}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
                {/* esqueleto dos cards 
                // <div key={character.id}>
                //     <h2>{character.name}</h2>
                //     <p>{character.status}</p>
                //     <img src={character.image} alt={character.name} />
                //     <p>{character.species}</p>
                //     <p>{character.gender}</p>
                //     <p>Origem: {character.origin.name}</p>
                //     <p>Localização: {character.location.name}</p>
                // </div> */}
              </Col>
            ))}
        </div>
    );
};
