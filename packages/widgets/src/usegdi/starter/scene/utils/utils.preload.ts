import { invokeEvent } from 'shared-base';

export const fetchWithProgress = async (fileUrl: string) => {
  try {
    const response: any = await fetch(fileUrl);

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

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        return {
          success: true,
          url: fileUrl,
        };
      }

      receivedLength += value.length;
      const percent = Math.floor((receivedLength / contentLength) * 100);
      invokeEvent('scene/assets/progress', {
        url: fileUrl,
        fileBytesCompleted: receivedLength,
        fileBytesTotal: contentLength,
        percent,
      });
    }
  } catch (error) {
    return {
      success: false,
      url: fileUrl,
      error,
    };
  }
};
