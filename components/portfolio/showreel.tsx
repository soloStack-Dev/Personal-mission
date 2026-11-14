"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import {
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";

const VIDEO_SRC = "/vdadvertise.mp4";

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const total = Math.floor(value);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

const marqueeWords = [
  "Concept",
  "Storyboard",
  "Motion",
  "Sound Design",
  "Edit",
  "Color",
  "Delivery",
];

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const play = useCallback(async (withSound: boolean) => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !withSound;
    setMuted(!withSound);

    try {
      await video.play();
    } catch {
      // Browsers block autoplay with audio until the visitor interacts.
      // Fall back to muted playback so the reel still plays immediately.
      video.muted = true;
      setMuted(true);
      try {
        await video.play();
      } catch {
        // Playback is fully blocked; the play button remains available.
      }
    }
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void play(!muted);
    } else {
      video.pause();
    }
  }, [muted, play]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted && video.paused) {
      void video.play().catch(() => {});
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;

    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
      return;
    }

    void frame.requestFullscreen?.().catch(() => {});
  }, []);

  const seek = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video || !duration) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const ratio = Math.min(
        1,
        Math.max(0, (event.clientX - rect.left) / rect.width),
      );
      video.currentTime = ratio * duration;
      setCurrent(video.currentTime);
    },
    [duration],
  );

  const onProgressKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video || !duration) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        video.currentTime = Math.min(duration, video.currentTime + 5);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 5);
      }
    },
    [duration],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to start with audio; browsers that block it will fall back to muted.
    void play(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [play]);

  useEffect(() => {
    const onFullscreenChange = () =>
      setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <section
      id="showreel"
      className="relative overflow-hidden border-b border-line bg-background"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="animate-showreel-float absolute top-28 left-[7%] hidden size-16 border border-brand/30 md:block" />
        <div className="animate-showreel-float absolute right-[9%] bottom-28 hidden size-10 rotate-45 border border-white/15 [animation-delay:1.6s] md:block" />
        <div className="animate-showreel-orbit absolute top-1/3 -right-24 hidden size-64 rounded-full border border-dashed border-white/10 lg:block" />
        <div className="animate-showreel-orbit absolute -bottom-16 -left-20 hidden size-44 rounded-full border border-brand/15 [animation-direction:reverse] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          index="01"
          command="showreel --play"
          title="In Motion"
          description="A short reel of the work in movement — concept, motion, sound, and delivery. Press play, turn the sound on, and watch it full screen."
          action={
            <span className="flex items-center gap-2 border border-line bg-surface px-3 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Reel 01 · 1080p
            </span>
          }
        />

        <div data-reveal className="relative">
          <div
            aria-hidden="true"
            className="animate-showreel-orbit absolute -inset-3 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(230,57,70,0.5)_70deg,transparent_140deg,transparent_220deg,rgba(121,192,255,0.35)_290deg,transparent_360deg)] opacity-50 blur-2xl"
          />

          <div
            ref={frameRef}
            className="group relative z-10 border border-line bg-surface p-1.5 md:p-2"
          >
            <span className="pointer-events-none absolute top-0 left-0 z-20 size-8 border-t-2 border-l-2 border-brand transition-all duration-500 group-hover:size-14 group-hover:border-brand-bright" />
            <span className="pointer-events-none absolute top-0 right-0 z-20 size-8 border-t-2 border-r-2 border-brand transition-all duration-500 group-hover:size-14 group-hover:border-brand-bright" />
            <span className="pointer-events-none absolute bottom-0 left-0 z-20 size-8 border-b-2 border-l-2 border-brand transition-all duration-500 group-hover:size-14 group-hover:border-brand-bright" />
            <span className="pointer-events-none absolute right-0 bottom-0 z-20 size-8 border-r-2 border-b-2 border-brand transition-all duration-500 group-hover:size-14 group-hover:border-brand-bright" />

            <div className="relative aspect-[1900/964] overflow-hidden border border-line bg-ink">
              <video
                ref={videoRef}
                className="size-full object-cover"
                src={VIDEO_SRC}
                poster="/images/showreel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Showreel advertisement video"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onLoadedMetadata={(event) =>
                  setDuration(event.currentTarget.duration || 0)
                }
                onTimeUpdate={(event) =>
                  setCurrent(event.currentTarget.currentTime)
                }
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(255,255,255,0.028)_3px,rgba(255,255,255,0.028)_4px)] opacity-70"
              />
              <div
                aria-hidden="true"
                className="animate-showreel-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-transparent via-brand/12 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-transparent to-ink/40"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 p-4 md:p-5">
                <span className="flex items-center gap-2 border border-white/15 bg-ink/60 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  <span className="size-1.5 animate-pulse rounded-full bg-brand" />
                  Now screening
                </span>
                <span className="hidden border border-white/15 bg-ink/60 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm sm:block">
                  MP4 · Stereo · {formatTime(duration)}
                </span>
              </div>

              {!playing ? (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play showreel"
                  className="absolute top-1/2 left-1/2 z-30 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-brand bg-brand/90 text-white shadow-[0_0_45px_rgba(230,57,70,0.45)] backdrop-blur transition-transform duration-300 hover:scale-110 md:size-20"
                >
                  <span className="absolute inset-0 animate-ping border border-brand/60" />
                  <Play size={26} className="relative translate-x-0.5" />
                </button>
              ) : null}

              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent px-3 pt-10 pb-3 md:px-5 md:pb-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? "Pause showreel" : "Play showreel"}
                    className="flex size-9 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {playing ? <Pause size={15} /> : <Play size={15} />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Turn sound on" : "Mute showreel"}
                    aria-pressed={!muted}
                    className={`flex h-9 shrink-0 items-center gap-2 border px-2.5 font-mono text-[8px] uppercase tracking-[0.18em] transition-colors ${
                      muted
                        ? "animate-showreel-pulse border-brand bg-brand text-white"
                        : "border-white/15 bg-white/5 text-white hover:border-brand"
                    }`}
                  >
                    {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span className="hidden sm:inline">
                      {muted ? "Sound on" : "Sound off"}
                    </span>
                  </button>

                  <div
                    role="slider"
                    tabIndex={0}
                    aria-label="Video progress"
                    aria-valuemin={0}
                    aria-valuemax={Math.round(duration)}
                    aria-valuenow={Math.round(current)}
                    onClick={seek}
                    onKeyDown={onProgressKeyDown}
                    className="group/track relative h-1.5 min-w-0 flex-1 cursor-pointer bg-white/20 outline-none focus-visible:ring-1 focus-visible:ring-brand"
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-brand"
                      style={{ width: `${progress}%` }}
                    />
                    <span
                      className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-0 shadow-[0_0_12px_rgba(230,57,70,0.8)] transition-opacity group-hover/track:opacity-100"
                      style={{ left: `${progress}%` }}
                    />
                  </div>

                  <span className="hidden shrink-0 font-mono text-[9px] tracking-[0.12em] text-white/70 sm:block">
                    {formatTime(current)} / {formatTime(duration)}
                  </span>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label={fullscreen ? "Exit full screen" : "Enter full screen"}
                    className="flex size-9 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {fullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal-group
          className="mt-6 grid gap-3 sm:grid-cols-3"
        >
          {[
            { label: "Format", value: "16:9 · 1080p" },
            { label: "Runtime", value: duration > 0 ? formatTime(duration) : "1:39" },
            { label: "Audio", value: "Stereo · Clear voice" },
          ].map((meta) => (
            <div
              key={meta.label}
              className="group flex items-center justify-between border border-line bg-surface px-4 py-3 transition-colors hover:border-brand/60"
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-faint">
                {meta.label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors group-hover:text-brand">
                {meta.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden border-y border-line py-3">
          <div className="animate-showreel-marquee flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-8 pr-8"
              >
                {marqueeWords.map((word) => (
                  <span
                    key={`${group}-${word}`}
                    className="flex items-center gap-8 font-mono text-[9px] uppercase tracking-[0.3em] text-faint"
                  >
                    {word}
                    <span className="size-1 rotate-45 bg-brand/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
