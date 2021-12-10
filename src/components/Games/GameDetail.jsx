import {useParams} from "react-router-dom";

const GameDetail = () => {
    const {gameID} = useParams();

    return (
        <div>
           Game detail page: {gameID}
        </div>
    );
};

export default GameDetail;
