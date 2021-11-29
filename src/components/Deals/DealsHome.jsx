import './Deals.css';
import DealsList from "./DealsList";
import {useEffect, useState} from "react";
import Pagination from "../Pagination";

function DealsHome() {

    const [deals, setDeals] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isFetching, setIsFetching] = useState(true);
    const API_DEALS = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}`;

    const fetchDeals = async (url) => {
        try {
            setIsFetching(true);
            const res = await fetch(url);
            const data = await res.json();
            setDeals(data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsFetching(false);
            console.log('End of request');
        }
    }
    useEffect(() => {
        fetchDeals(API_DEALS).then();
    }, [API_DEALS])

    return (
        <div className="container-fluid">
            <h2 className="text-secondary"> Deals Home Page</h2>
            {isFetching && <div><h2>Fetching data...</h2></div>}
            {!isFetching && <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>}
            {!isFetching && <DealsList deals={deals}/>}
        </div>
    );
}

export default DealsHome;