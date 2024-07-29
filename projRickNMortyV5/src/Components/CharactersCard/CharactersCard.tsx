
import React from 'react';
import { CharacterType } from '../../Types';
import { Badge, Button, Card, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styles from './cards.module.scss';

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
        <Col key={character.id} md={4} className=" mb-4 ">
          <Card className={`${styles.cards} shadow-sm mb-5 bg-body rounded`}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush ">
              <ListGroup.Item><Card.Text>Gênero: {character.gender} </Card.Text></ListGroup.Item>
              <ListGroup.Item><Card.Text> Origem: <br/> {character.origin.name}</Card.Text></ListGroup.Item>
              <ListGroup.Item> <Card.Text> Última Localizacao: <br/> {character.location.name}</Card.Text></ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-center">
              <Link to={`/character/${character.id}`}>
                <Button variant="dark">Veja mais!</Button>
              </Link>
            </Card.Body>

            {character.status === 'Dead' ? (
              <Badge className={`${styles.badge} position-absolute`} pill bg="danger">
                {character.status}
              </Badge>
            ) : 
            character.status === 'Alive' ? (
              <Badge className={`${styles.badge} position-absolute`} pill bg="success">
                {character.status}
              </Badge>
            ) : (
              <Badge className={`${styles.badge} position-absolute`} pill bg="secondary">
                {character.status}
              </Badge>
            )}
          </Card>

        </Col>
      ))}
    </div>
  );
};
