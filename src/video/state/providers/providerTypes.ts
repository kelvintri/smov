import { MWStreamQuality, MWStreamType } from "@/backend/helpers/streams";

type VideoPlayerSource = {
  source: string;
  type: MWStreamType;
  quality: MWStreamQuality;
} | null;

export type VideoPlayerStateController = {
  pause: () => void;
  play: () => void;
  setSource: (source: VideoPlayerSource) => void;
  setTime(time: number): void;
  setSeeking(active: boolean): void;
};

export type VideoPlayerStateProvider = VideoPlayerStateController & {
  providerStart: () => {
    destroy: () => void;
  };
};
