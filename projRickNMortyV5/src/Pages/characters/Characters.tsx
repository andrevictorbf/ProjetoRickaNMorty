import { useState, useEffect } from "react";
import { getAllCharacters } from "../../Services";
import { CharacterType } from "../../Types";
import { Col, Container, Row } from "react-bootstrap";
import { CharactersCard } from "../../Components";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationComponent from "../../Components/pagination/PaginationComponent";



export const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<CharacterType[] | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchCharacters = async (page: number) => {
            try {
                const data = await getAllCharacters(page);
                setCharacters(data.results);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Erro ao buscar personagens:', error);
            }
        };

        fetchCharacters(currentPage);
    }, [currentPage]);

    return (


        <Container>
            <h1 className="mb-4 my-5 text-center">Personagens</h1>
            <Row className="gap-4 my-5">
                {characters?.map((character) => (
                    <Col className="" key={character.id}>
                        <CharactersCard characters={[character]} />
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



