import { useEffect, useState } from 'react';

export function useMeta(assetUrl: string) {
  const [meta, setMeta] = useState<Json>({});

  useEffect(() => {
    if (!assetUrl) return;

    try {
      const metaUrl = assetUrl + '.json';
      fetch(metaUrl)
        .then((res) => res.json())
        .then((meta) => {
          if (meta.error) {
            setMeta({});
            return;
          }
          setMeta(meta);
        });
    } catch (err) {
      setMeta({});
      console.log('err =>', err);
    }
  }, [assetUrl]);

  return meta;
}
