import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";

interface FectchResponse<T> {
    count : number;
    results : T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
      
      setLoading(true);
      apiClients
        .get<FectchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) => {setData(res.data.results); setLoading(false)})
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
            setLoading(false)
        });
 
      return () => controller.abort()
    }, []);

    return {data, error, isLoading};
}

export default useData;