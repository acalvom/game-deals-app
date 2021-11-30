import DealsHome from "./components/Deals/DealsHome";
import fetchStores from "./components/Stores/StoresService";
import {useEffect, useState} from "react";

const App = () => {

    const [stores, setStores] = useState([]);

    useEffect(() => {
        const getStores = async () => {
            const data = await fetchStores();
            setStores(data)
        }
        getStores().then();
    }, []);

    return (
        <div className="container mt-5">
            <DealsHome stores={stores}/>
        </div>
    );
};

export default App;