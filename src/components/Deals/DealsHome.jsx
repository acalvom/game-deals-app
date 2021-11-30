import './Deals.css';
import DealsList from "./DealsList";
import {useEffect, useState} from "react";
import Pagination from "../Utils/Pagination";
import Loading from "../Utils/Loading";
import Swal from "sweetalert2";

function DealsHome() {

    const [deals, setDeals] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isFetching, setIsFetching] = useState(true);
    // const [title, setTitle] = useState('');
    const API_DEALS = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}`;
    // const API_SEARCH_DEAL = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}&title=${title}&exact=0`;

    const fetchDeals = async (url) => {
        try {
            setIsFetching(true);
            const res = await fetch(url);
            const data = await res.json();
            setDeals(data);
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        } finally {
            setIsFetching(false);
            console.log('End of request');
        }
    }
    useEffect(() => {
        fetchDeals(API_DEALS).then();
    }, [API_DEALS]);

    return (
        <div className="container-fluid">
            <h2 className="page-header text-secondary"> List of Deals</h2>
            {isFetching && <Loading/>}
            {!isFetching && <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>}
            {!isFetching && <DealsList deals={deals}/>}
        </div>
    );
}

export default DealsHome;