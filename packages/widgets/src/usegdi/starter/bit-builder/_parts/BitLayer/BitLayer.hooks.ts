import { useEffect, useState } from 'react';

export function useJsonResource(url: string) {
  const [json, setJson] = useState<any | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setJson(json);
      });
  }, [url]);

  return json;
}
