import { useEffect, useState } from "react";

export const useFetch = (URL) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState("Loading...");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const resData = await response.json();
                setResponse(resData);
                setLoading("");
            } catch (error) {
                setLoading("");
                setError("Unable to receive data. Try again later");
            }
        };
        setTimeout(() => fetchData(), 1000);
    }, [URL]);
    return { response, error, loading };
};
