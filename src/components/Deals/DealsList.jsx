import StoresLogo from "../Stores/StoresLogo";
import {Link} from "react-router-dom";

const DealsList = (props) => {
    const deals = props.deals;
    const stores = props.stores;

    const msToDate = (s) => {
        let date = new Date(s * 1000);
        return date.toLocaleDateString("es");
    }
    const parseFloatDecimals = (str, decimals = 0) => {
        return parseFloat(str).toFixed(decimals)
    }

    return (
        <div className="list-deals list-group">
            {
                deals.length > 0 ?
                    deals.map(item =>
                        <Link to={`/gameDetail/${item.gameID}`} key={item.dealID} className="list-group-item list-group-item-action">
                            <div className="img-deal d-none d-sm-block">
                                <img src={item.thumb} className="img-fluid" alt={item.title}/>
                            </div>
                            <div className="text-deal">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <small><i className="far fa-calendar-alt"/> {msToDate(item.lastChange)}</small>
                                </div>
                                <div className="store-deal d-flex w-100 justify-content-end">
                                    <span className="pvs">{parseFloatDecimals(item.salePrice, 2)}€</span>
                                    <span className="pvp">{parseFloatDecimals(item.normalPrice, 2)}€</span>
                                    <span>{parseFloatDecimals(item.savings)}%</span>
                                    <StoresLogo item={item} stores={stores}/>
                                </div>
                                <div className="d-flex w-100 justify-content-between">
                                    <p className="mb-1">
                                        <i className="fas fa-award"/> {parseFloatDecimals(item.steamRatingPercent)}/100
                                        - {item.steamRatingText}
                                    </p>

                                </div>
                                {(item.releaseDate !== 0) &&
                                <small>Game release date: {msToDate(item.releaseDate)}</small>}
                            </div>
                        </Link>
                    ) : <h5>No deals to show</h5>
            }
        </div>
    );
};

export default DealsList;
