import React, {useEffect, useState} from 'react';

const Pagination = (props) => {
    const setPageNumber = props.setPageNumber;
    const pageNumber = props.pageNumber;
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        pageNumber === 0 ? setDisable(true) : setDisable(false)
    }, [pageNumber, disable])

    const prevPage = () => {
        setPageNumber(pageNumber - 1);
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    return (
        <div className="d-flex w-100 justify-content-between my-3">
            <button type="button" className="btn btn-outline-secondary" disabled={disable} onClick={prevPage}>Previous
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={nextPage}>Next</button>
        </div>
    )

};

export default Pagination;