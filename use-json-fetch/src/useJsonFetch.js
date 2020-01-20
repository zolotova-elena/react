import {useState, useEffect} from 'react';

export default function useJsonFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if(response.ok) {
                    const data = await response.json();
                    setData(data);
                } else if (!response.ok) {
                    setError(response.statusText);
                    setLoading(true)
                }
                setLoading(false)
            } catch (error) {
                setError(error);
                console.log('error', error);
            }
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return [data, loading, error]
}