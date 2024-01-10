import { useEffect, useState } from 'react';

export function useYoutubePlaybackTime(iframe: HTMLIFrameElement | null) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!iframe) {
      return;
    }
    var iframeWindow = iframe.contentWindow;

    var lastTimeUpdate = 0;

    function onMessage(event: any) {
      // Check that the event was sent from the YouTube IFrame.
      if (event.source === iframeWindow) {
        var data = JSON.parse(event.data);

        // The "infoDelivery" event is used by YT to transmit any
        // kind of information change in the player,
        // such as the current time or a playback quality change.
        if (data.event === 'infoDelivery' && data.info && data.info.currentTime) {
          // currentTime is emitted very frequently,
          // but we only care about whole second changes.
          var time = Math.floor(data.info.currentTime);

          if (time !== lastTimeUpdate) {
            lastTimeUpdate = time;
            setTime(time);
          }
        }
      }
    }

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, [iframe]);

  return time;
}
