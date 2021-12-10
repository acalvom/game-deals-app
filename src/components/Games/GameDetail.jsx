import {useParams} from "react-router-dom";
import Loading from "../Utils/Loading";
import {useFetch} from "../../hooks/useFetch"

const GameDetail = () => {
    const {gameID} = useParams();
    const API_GAME = `https://www.cheapshark.com/api/1.0/games?id=${gameID}`;
    const {isFetching, data: game} = useFetch(API_GAME);

    console.log(game)
    return (
        <div className="container-fluid">
            <h2 className="page-header text-secondary"> Game Detail id {gameID}</h2>
            {isFetching && <Loading/>}
        </div>
    );
};

export default GameDetail;
