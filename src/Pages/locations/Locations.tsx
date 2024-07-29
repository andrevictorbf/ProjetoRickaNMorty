import { useState, useEffect } from "react";
import { LocationsType } from "../../Types";
import { getAllLocations } from "../../Services";
import { Container, Row, Col } from "react-bootstrap";
import { LocationsCard } from "../../Components";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationComponent from "../../Components/pagination/PaginationComponent";

export const Locations = () => {
    const [locations, setLocations] = useState<LocationsType[] | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    useEffect(() => {
        const fetchLocations = async (page: number) => {
            try {
                const data = await getAllLocations(page);
                setLocations(data.results);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Erro ao buscar os localizacoes', error);
            }
        };

        fetchLocations(currentPage);
    }, [currentPage]);

    return (
        <Container>
            <Row className="gap-4">
                <h1 className="mb-4 my-5 text-center">Localizações</h1>
                {locations?.map((location) => (
                    <Col key={location.id} >
                        <LocationsCard locations={[location]} />
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