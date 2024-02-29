import { useState, useCallback } from "react";
import axios, { AxiosError } from "axios";

type UseAxiosProps = {
  url: string;
  method?: string;
};

type UseAxiosResponse<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  runAxios: () => Promise<void>;
};

const useAxios = <T,>({
  url,
  method = "GET",
}: UseAxiosProps): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
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
