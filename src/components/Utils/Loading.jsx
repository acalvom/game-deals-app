import React, {Fragment} from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <Fragment>
            <div className="loading-spinner d-flex justify-content-center">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="loading-span d-flex justify-content-center">
                <span>LOADING...</span>
            </div>
        </Fragment>

    );
};

export default Loading;
