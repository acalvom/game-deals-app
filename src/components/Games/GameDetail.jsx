import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import Loading from "../Utils/Loading";

const GameDetail = () => {
    const {gameID} = useParams();
    const [game, setGame] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const API_GAME = `https://www.cheapshark.com/api/1.0/games?id=${gameID}`;

    const fetchGame = async (url) => {
        try {
            setIsFetching(true)
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setGame(data);

        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        } finally {
            setIsFetching(false);
            console.log('End of game request');
        }
    }

    useEffect(() => {
        fetchGame(API_GAME).then();
    }, [API_GAME]);


    return (
        <div className="container-fluid">
            <h2 className="page-header text-secondary"> Game Detail id {gameID}</h2>
            {isFetching && <Loading/>}
        </div>
    );
};

export default GameDetail;
