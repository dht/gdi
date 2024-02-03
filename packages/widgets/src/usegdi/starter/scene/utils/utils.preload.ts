import { invokeEvent } from 'shared-base';

export const fetchWithProgress = (fileUrl: string) => {
  return new Promise((resolve) => {
    fetch(fileUrl)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentLength = response.headers.get('Content-Length');

        invokeEvent('scene/assets/size', {
          url: fileUrl,
          fileBytesTotal: contentLength,
        });

        let receivedLength = 0;

        const reader = response.body.getReader();

        function readChunk() {
          reader.read().then((state: any) => {
            const { done, value } = state;
            if (done) {
              resolve({
                success: true,
                url: fileUrl,
              });
              return;
            }

            receivedLength += value.length;
            const percent = Math.floor((receivedLength / contentLength) * 100);

            invokeEvent('scene/assets/progress', {
              url: fileUrl,
              fileBytesCompleted: receivedLength,
              fileBytesTotal: contentLength,
              percent,
            });

            readChunk();
          });
        }

        readChunk();
      })
      .catch((error) => {
        resolve({
          success: false,
          url: fileUrl,
          error,
        });
      });
  });
};
