import React from 'react';

const StoresLogo = (props) => {
    const item = props.item;
    const stores = props.stores;

    const BASE_API_URL = "https://www.cheapshark.com";

    return (
        <img className="img-store" alt=""
             src={stores
                 .filter(it => it.storeID === item.storeID)
                 .map(it => BASE_API_URL + it.images.logo)}
        />
    );
};

export default StoresLogo;
