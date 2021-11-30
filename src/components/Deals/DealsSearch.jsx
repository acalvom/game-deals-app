import {useState} from "react";

const DealsSearch = () => {
    const [title, setTitle] = useState("");

    const sendTitle = (evt) => {
        evt.preventDefault()
        console.log('titulo: ', title)
    }

    const clearInput = (evt) => {
        evt.preventDefault();
        setTitle("");
    }

    return (
        <form onSubmit={sendTitle} onReset={clearInput}>
            <div className="d-flex w-100 my-3">
                <label htmlFor="gameTitleInput" className="form-label" hidden>Game title</label>
                <input type="text" className="form-control" id="gameTitleInput"
                       placeholder="Type a title to search deals..." value={title}
                       onChange={(evt) => setTitle(evt.target.value)}/>
                <button className="btn btn-secondary mx-1" type="submit"><span className="fa fa-search"/></button>
                <button className="btn btn-secondary mx-1" type="reset"><span className="fa fa-undo-alt"/></button>
            </div>
        </form>
    );
};

export default DealsSearch;
