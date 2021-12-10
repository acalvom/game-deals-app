import {useEffect, useState} from "react";
import Swal from "sweetalert2";

export const useFetch = (url) => {
    const [isFetching, setIsFetching] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                setIsFetching(true)
                const res = await fetch(url);
                const data = await res.json();
                console.log(data)
                setData(data);

            } catch (error) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                })
            } finally {
                setIsFetching(false);
                console.log('End of request');
            }
        }
        
        if (!url) return;
        fetchData().then();
    }, [url]);

    return {isFetching, data};
};