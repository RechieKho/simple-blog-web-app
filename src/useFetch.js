import { useState, useEffect } from "react";

// custom hook must start with use
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch data...");
                }
                return res.json();
            })
            .then(data => {
                // if success
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;