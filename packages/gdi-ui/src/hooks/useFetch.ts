import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string, randomize?: boolean) => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);

    if (randomize) {
      url = `${url}?${Math.random()}`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setError(res.statusText);
          setIsLoading(false);
          return;
        }

        res.text().then((data) => {
          if (url.includes('.json')) {
            data = JSON.parse(data);
          }
          setData(data as any);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return [data, { isLoading, error }] as const;
};
