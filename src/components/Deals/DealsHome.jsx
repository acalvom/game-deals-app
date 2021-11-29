import './Deals.css';
import DealsList from "./DealsList";
import {useEffect, useState} from "react";
import Pagination from "../Pagination";

function DealsHome() {

    const [deals, setDeals] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    // const [isFetching, setIsFetching] = useState(true);
    const API_DEALS = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}`;

    const fetchDeals = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // setIsFetching(true);
            setDeals(data);
            console.log(data);
        } catch (e) {
            console.log(e);
        } finally {
            // setIsFetching(false);
            console.log('End of request');
        }
    }
    useEffect(() => {
        fetchDeals(API_DEALS).then();
    }, [pageNumber])

    return (
        <div className="container-fluid">
            <h2 className="text-secondary"> Deals Home Page</h2>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            <DealsList deals={deals}/>
        </div>
    );
}

export default DealsHome;