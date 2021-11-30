import Swal from "sweetalert2";
import {useEffect, useState} from "react";

const DealsList = (props) => {
    const deals = props.deals;

    const msToDate = (s) => {
        let date = new Date(s * 1000);
        return date.toLocaleDateString("es");
    }
    const parseFloatDecimals = (str, decimals = 0) => {
        return parseFloat(str).toFixed(decimals)
    }

    const [stores, setStores] = useState([]);
    const API_STORES = `https://www.cheapshark.com/api/1.0/stores`;
    const fetchStores = async () => {
        try {
            const res = await fetch(API_STORES);
            const data = await res.json();
            setStores(data)
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        } finally {
            console.log('End of stores request');
        }
    }

    useEffect(() => {
        fetchStores(API_STORES).then();
    },[API_STORES]);

    const BASE_API_URL = "https://www.cheapshark.com";

    return (
        <div className="list-deals list-group">
            {
                deals.length > 0 ?
                    deals.map(item =>
                        <div key={item.dealID} className="list-group-item list-group-item-action">
                            <div className="img-deal d-none d-sm-block">
                                <img src={item.thumb} className="img-fluid" alt={item.title}/>
                            </div>
                            <div className="text-deal">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <small><i className="far fa-calendar-alt"/> {msToDate(item.lastChange)}</small>
                                </div>
                                <div className="d-flex w-100 justify-content-end">
                                    <span className="pvs">{parseFloatDecimals(item.salePrice, 2)}€</span>
                                    <span className="pvp">{parseFloatDecimals(item.normalPrice, 2)}€</span>
                                    <span>{parseFloatDecimals(item.savings)}%</span>
                                </div>
                                <div className="d-flex w-100 justify-content-between">
                                    <p className="mb-1">
                                        <i className="fas fa-award"/> {parseFloatDecimals(item.steamRatingPercent)}/100
                                        - {item.steamRatingText}
                                    </p>
                                    <img className="img-store" alt=""
                                         src={stores.filter(it => it.storeID === item.storeID).map(it => BASE_API_URL + it.images.logo)}/>
                                </div>

                                <small>Game release date: {msToDate(item.releaseDate)}</small>
                            </div>
                        </div>
                    ) : <h5>No deals to show</h5>
            }
        </div>
    );
};

export default DealsList;
