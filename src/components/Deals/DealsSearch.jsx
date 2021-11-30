import {Fragment} from "react";

const DealsSearch = () => {
    return (
        <Fragment>
            <div className="my-3">
                <label htmlFor="gameTitleInput" className="form-label" hidden>Game title</label>
                <input type="text" className="form-control" id="gameTitleInput"
                       placeholder="Type a title to search deals..."/>
            </div>
        </Fragment>
    );
};

export default DealsSearch;
