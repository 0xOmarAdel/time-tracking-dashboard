import { useState, useCallback } from "react";
import axios, { AxiosError } from "axios";

type UseAxiosProps = {
  url: string;
  method?: string;
};

const useAxios = ({ url, method = "GET" }: UseAxiosProps) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const runAxios = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios({
        method,
        url,
      });

      setData(response.data);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [method, url]);

  return { runAxios, data, loading, error };
};

export default useAxios;
