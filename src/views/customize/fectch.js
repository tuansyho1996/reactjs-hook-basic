import { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url, isUsers) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        const fetchData = async () => {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                });
                let data = []
                if (isUsers) {
                    data = (res && res.data && res.data.data) ? res.data.data : [];
                }
                else {
                    data = res
                }
                setData(data)
                setIsLoading(false)
                setIsError(false)
            }
            catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    setIsLoading(false)
                    setIsError(true)
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 2000);
        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }
    }, [url, isUsers])
    return ({ data, isLoading, isError })
}
export default useFetch;