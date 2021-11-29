import './Deals.css';
import DealsList from "./DealsList";
import {useEffect, useState} from "react";
import Pagination from "../Pagination";

function DealsHome() {

    const API_DEALS = 'https://www.cheapshark.com/api/1.0/deals';
    const [deals, setDeals] = useState([]);
    const fetchDeals = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setDeals(data);
            console.log(data);
        } catch (e) {
            console.log(e);
        } finally {
            console.log('End of request');
        }
    }
    useEffect(() => {
        fetchDeals(API_DEALS).then();
    }, [])

    return (
        <div className="container-fluid">
            <h2 className="text-secondary"> Deals Home Page</h2>
            <Pagination/>
            <DealsList deals={deals}/>
        </div>
    );
}

export default DealsHome;