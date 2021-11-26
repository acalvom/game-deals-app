import './Deals.css';

function DealsHome() {
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
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="img-deal d-none d-sm-block ">
                        <img src="https://via.placeholder.com/120" className="rounded float-start" alt=""/>
                    </div>
                    <div className="text-deal">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="img-deal d-none d-sm-block">
                        <img src="https://via.placeholder.com/120" className="img-fluid" alt=""/>
                    </div>
                    <div className="text-deal">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="img-deal d-none d-sm-block ">
                        <img src="https://via.placeholder.com/120" className="rounded float-start" alt=""/>
                    </div>
                    <div className="text-deal">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default DealsHome;