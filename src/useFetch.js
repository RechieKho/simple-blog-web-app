import { useState, useEffect } from "react";

// custom hook must start with use
const useFetch = (url) => {
    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url, {signal : abortCont.signal})
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
                if(err.name !== "AbortError"){
                    setIsPending(false);
                    setError(err.message);
                }
            });
        
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;

// we cannot set state of unmounted component

// useEffect can hava a "clean up" function that runs everytime when its parent component get unmounted
// to set the "clean up" function, we just need to return a function in useEffect's argument (which is a function)