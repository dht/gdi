import { Json } from '../types.iso';

type TimelineItem = {
  id: string;
  timestamp: number;
  duration: number;
  url?: string;
} & Json;

export type TimelineItems = Record<string, TimelineItem>;

type TimelineMeta = {
  currentTime: number;
  totalTime: number;
  assetsRootUrl?: string;
};

export const analyzeItems = <T extends TimelineItem>(
  items: Record<string, T>,
  currentId: string,
  meta: TimelineMeta
) => {
  const { currentTime, totalTime, assetsRootUrl } = meta;
  return Object.values(items).map((item) => {
    const { id, timestamp, duration = 0, url = '' } = item;

    const start = timestamp;
    const end = start + duration;

    const isSelected = id === currentId;

    const isHovered = currentTime >= start && currentTime <= end;

    const timestampPercent = timestamp / totalTime;
    const durationPercent = duration / totalTime;

    const parsedUrl = url.includes('http') ? url : `${assetsRootUrl}${url}`;

    return {
      ...item,
      timestampPercent,
      durationPercent,
      start,
      end,
      url: parsedUrl,
      isSelected,
      isHovered,
    };
  });
};
