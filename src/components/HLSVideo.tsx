
'use client';

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src: string;
  className?: string;
  poster?: string;
  style?: React.CSSProperties;
}

export function HLSVideo({ src, className, poster, style }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Silent catch for autoplay blocking
        });
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Safari support
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      style={style}
    />
  );
}
