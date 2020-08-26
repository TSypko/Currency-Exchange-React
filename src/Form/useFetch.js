import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState({
        content: null,
        loading: "Loading...",
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const responseData = await response.json();
                setData({
                    content: responseData,
                    loading: "",
                    error: null
                });
            } catch (error) {
                setData({
                    content: null,
                    loading: "",
                    error: "Unable to receive data. Try again later"
                });
                console.error(error);
            };
        };
        setTimeout(fetchData, 1000);
    }, [url]);
    return data;
};
