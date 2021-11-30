import Swal from "sweetalert2";

const API_STORES = "https://www.cheapshark.com/api/1.0/stores";

const fetchStores = async () => {
    try {
        const res = await fetch(API_STORES);
        return await res.json();
    } catch (e) {
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        })
    } finally {
        console.log('End of stores request');
    }
}

export default fetchStores;
