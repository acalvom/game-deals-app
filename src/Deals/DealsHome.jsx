import './Deals.css';

function DealsHome() {

    const deals = [
        {title:'' , salePrice: 55, normalPrice: 22, savings: 66, steamRatingText:' ',dealRating:'', releaseDate:333333, lastChange:44444,thumb: 'https://via.placeholder.com/48'},
        {title:'' , salePrice: 55, normalPrice: 22, savings: 66, steamRatingText:' ',dealRating:'', releaseDate:333333, lastChange:44444,thumb: 'https://via.placeholder.com/48'},
        {title:'' , salePrice: 55, normalPrice: 22, savings: 66, steamRatingText:' ',dealRating:'', releaseDate:333333, lastChange:44444,thumb: 'https://via.placeholder.com/48'}
    ]

    return (
        <div className="container-fluid">
            <h2 className="text-secondary"> Deals Home Page</h2>
            <div className="list-deals list-group">
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="img-deal d-none d-sm-block">
                        <img src="https://via.placeholder.com/120" className="img-fluid" alt=""/>
                    </div>
                    <div className="text-deal">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Game Title</h5>
                            <small>3 days ago</small>
                        </div>
                        <div className="d-flex w-100 justify-content-end">
                            <span>Sale Price</span>
                            <span>Normal Price</span>
                            <span>Discount</span>
                        </div>

                        <p className="mb-1">Deal rating - Deal text</p>
                        <small>Release sale date</small>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="img-deal d-none d-sm-block">
                        <img src="https://via.placeholder.com/120" className="img-fluid" alt=""/>
                    </div>
                    <div className="text-deal">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Game Title</h5>
                            <small>3 days ago</small>
                        </div>
                        <div className="d-flex w-100 justify-content-end">
                            <span>Sale Price</span>
                            <span>Normal Price</span>
                            <span>Discount</span>
                        </div>

                        <p className="mb-1">Deal rating - Deal text</p>
                        <small>Release sale date</small>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default DealsHome;