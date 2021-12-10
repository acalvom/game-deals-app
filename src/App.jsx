import DealsHome from "./components/Deals/DealsHome";
import {useFetch} from "./hooks/useFetch";

const App = () => {

    const API_STORES = "https://www.cheapshark.com/api/1.0/stores";
    const {data: stores} = useFetch(API_STORES);

    return (
        <div className="container mt-5">
            <DealsHome stores={stores}/>
        </div>
    );
};

export default App;