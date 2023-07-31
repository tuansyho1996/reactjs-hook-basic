import { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        try {
            const fetchData = async () => {
                let res = await axios.get(url);
                let data = (res && res.data && res.data.data) ? res.data.data : [];
                console.log(res)
                setData(data)
                setIsLoading(false)
                setIsError(false)
            }
            fetchData();
        }
        catch (e) {
            setIsLoading(false)
            setIsError(true)
        }
    }, [url])
    return ({ data, isLoading, isError })
}
export default useFetch;