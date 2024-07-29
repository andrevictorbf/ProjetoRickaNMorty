import React from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PaginationStyle.scss';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    const generatePageItems = () => {
        const pageItems = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (currentPage <= 3) {
            endPage = Math.min(5, totalPages);
        } else if (currentPage >= totalPages - 2) {
            startPage = Math.max(totalPages - 4, 1);
        }

        if (startPage > 1) {
            pageItems.push(
                <Pagination.Item key={1} onClick={() => onPageChange(1)}>
                    1
                </Pagination.Item>,
                startPage > 2 && <Pagination.Ellipsis key="start-ellipsis" />
            );
        }

        for (let page = startPage; page <= endPage; page++) {
            pageItems.push(
                <Pagination.Item key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
                    {page}
                </Pagination.Item>
            );
        }

        if (endPage < totalPages) {
            pageItems.push(
                endPage < totalPages - 1 && <Pagination.Ellipsis key="end-ellipsis" />,
                <Pagination.Item key={totalPages} onClick={() => onPageChange(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        return pageItems;
    };

    return (
        <Pagination  className=" dark justify-content-center my-4">
            <Pagination.First onClick={handleFirstPage} disabled={currentPage === 1} />
            <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
            {generatePageItems()}
            <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={handleLastPage} disabled={currentPage === totalPages} />
        </Pagination>
    );
};

export default PaginationComponent;
