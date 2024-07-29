import { useEffect, useState } from "react";
import { getAllEpisodes } from "../../Services/Episodes";
import { EpisodeType } from "../../Types";
import { EpisodeCards } from "../../Components";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationComponent from "../../Components/pagination/PaginationComponent";



export const Episodes: React.FC = () => {
    const [episodes, setEpisodes] = useState<EpisodeType[] | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    useEffect(() => {
        const fetchEpisodes = async (page: number) => {
            try {
                const data = await getAllEpisodes(page);
                setEpisodes(data.results);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Erro ao buscar os episodios:', error);
            }
        };

        fetchEpisodes(currentPage);
    }, [currentPage]);
    
    return (


        <Container>
            <h1 className="mb-4 my-5 text-center">Episódios</h1>
            <Row className="gap-4 my-5">
                {episodes?.map((episode) => (
                    <Col key={episode.id} >
                        <EpisodeCards episodes={[episode]} />
                    </Col>
                ))}
            </Row>
            <PaginationComponent 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </Container>




    )
}

