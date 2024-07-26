import { useEffect, useState } from "react";
import { getAllEpisodes } from "../../Services/Episodes";
import { EpisodeType } from "../../Types";
import { EpisodeCards } from "../../Components";
import { Col, Container, Row } from "react-bootstrap";



export const Episodes: React.FC = () => {
    const [episodes, setEpisodes] = useState<EpisodeType[] | null>(null);
    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getAllEpisodes();
                setEpisodes(data);
            } catch (error) {
                console.error('Erro ao buscar os episodios:', error);
            }
        };

        fetchEpisodes();
    }, []);
    return (
        <Container>
            <Row className="gap-4 my-5">
                <h1 className="mb-4 my-5 text-center">Episodios</h1>
                {episodes?.map((episode) => (
                    <Col key={episode.id} >
                        <EpisodeCards episodes={[episode]} />
                    </Col>
                ))}
            </Row>

        </Container>
    )
}

