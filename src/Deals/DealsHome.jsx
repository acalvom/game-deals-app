import './Deals.css';
import DealsList from "./DealsList";

function DealsHome() {

    const deals = [
        {
            title: 'theHunter: Call of the Wild',
            salePrice: "0.00",
            normalPrice: "19.99",
            savings: "100.000000",
            steamRatingText: "Very Positive",
            dealRating: "10.0",
            releaseDate: 1487203200,
            lastChange: 1637857401,
            thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/518790/capsule_sm_120.jpg?t=1633535581"
        },
        {
            title: "Warhammer: End Times - Vermintide",
            salePrice: "0.00",
            normalPrice: "29.99",
            savings: "100.000000",
            steamRatingText: "Very Positive",
            dealRating: "10.0",
            releaseDate: 1445558400,
            lastChange: 1637856842,
            thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/235540/capsule_sm_120.jpg?t=1596795745"
        },
        {
            title: "Resident Evil 5",
            salePrice: "4.25",
            normalPrice: "19.99",
            savings: "78.739370",
            steamRatingText: "Very Positive",
            dealRating: "8.8",
            releaseDate: 1252972800,
            lastChange: 1637746058,
            thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/21690/capsule_sm_120.jpg?t=1591599188"
        }
    ];

    return (
        <div className="container-fluid">
            <h2 className="text-secondary"> Deals Home Page</h2>
            <DealsList deals={deals}/>
        </div>
    );
}

export default DealsHome;