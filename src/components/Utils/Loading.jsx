import React, {Fragment} from 'react';

const Loading = () => {
    return (
        <Fragment>
            <div className="loading-spinner d-flex justify-content-center">
                <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="loading-span d-flex justify-content-center">
                <span>Loading...</span>
            </div>
        </Fragment>

    );
};

export default Loading;
