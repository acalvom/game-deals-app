import React from 'react';

const Pagination = (props) => {
    const prevPage = () => {
        console.log('prev')
    }

    const nextPage = () => {
        console.log('next')
    }

    return (
        <div className="d-flex w-100 justify-content-between my-3">
            <button type="button" className="btn btn-outline-primary" onClick={prevPage}>Previous</button>
            <button type="button" className="btn btn-outline-primary" onClick={nextPage}>Next</button>
        </div>
    )

};

export default Pagination;