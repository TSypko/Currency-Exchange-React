import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState({
        content: null,
        loading: null,
        error: null,
    });

    useEffect(() => {
        setData({
            loading: true
        });
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const responseData = await response.json();
                setData({
                    content: responseData,
                    loading: false,
                    error: false
                });
            } catch (error) {
                setData({
                    content: null,
                    loading: false,
                    error: true
                });
                console.error(error);
            };
        };
        setTimeout(fetchData, 700);
    }, [url]);

    return data;
};
