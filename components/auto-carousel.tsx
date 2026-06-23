"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactNode, useCallback, useEffect, useRef } from "react";

type AutoCarouselProps = {
  children: ReactNode;
  className?: string;
  intervalMs?: number;
};

export function AutoCarousel({
  children,
  className,
  intervalMs = 7000
}: AutoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const hoverPausedRef = useRef(false);
  const manualPausedRef = useRef(false);

  const getCurrentIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return 0;
    }

    const cards = Array.from(track.children) as HTMLElement[];

    if (cards.length === 0) {
      return 0;
    }

    return cards.reduce((nearest, card, index) => {
      const nearestDistance = Math.abs(cards[nearest].offsetLeft - track.scrollLeft);
      const cardDistance = Math.abs(card.offsetLeft - track.scrollLeft);

      return cardDistance < nearestDistance ? index : nearest;
    }, 0);
  }, []);

  const syncActiveIndex = useCallback(() => {
    activeIndexRef.current = getCurrentIndex();
  }, [getCurrentIndex]);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(track.children) as HTMLElement[];

    if (cards.length <= 1) {
      return;
    }

    const targetIndex = ((index % cards.length) + cards.length) % cards.length;

    activeIndexRef.current = targetIndex;
    track.scrollTo({
      behavior: "smooth",
      left: cards[targetIndex].offsetLeft
    });
  }, []);

  const isAtEnd = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return false;
    }

    return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }, []);

  const handleDirection = useCallback((direction: "previous" | "next") => {
    manualPausedRef.current = true;

    const cards = trackRef.current ? (Array.from(trackRef.current.children) as HTMLElement[]) : [];

    if (cards.length <= 1) {
      return;
    }

    const currentIndex = getCurrentIndex();
    const lastIndex = cards.length - 1;

    if (direction === "next") {
      const nextIndex = currentIndex >= lastIndex || isAtEnd() ? 0 : currentIndex + 1;
      scrollToIndex(nextIndex);
      return;
    }

    const previousIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
    scrollToIndex(previousIndex);
  }, [getCurrentIndex, isAtEnd, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const advance = () => {
      if (hoverPausedRef.current || manualPausedRef.current) {
        return;
      }

      const cards = Array.from(track.children) as HTMLElement[];

      if (cards.length <= 1) {
        return;
      }

      let nextIndex = activeIndexRef.current + 1;

      if (nextIndex >= cards.length) {
        nextIndex = 0;
      }

      scrollToIndex(nextIndex);
    };

    const interval = window.setInterval(advance, intervalMs);
    track.addEventListener("scrollend", syncActiveIndex);
    syncActiveIndex();

    return () => {
      window.clearInterval(interval);
      track.removeEventListener("scrollend", syncActiveIndex);
    };
  }, [intervalMs, scrollToIndex, syncActiveIndex]);

  return (
    <div
      className="carousel-shell"
      onFocus={() => {
        hoverPausedRef.current = true;
      }}
      onBlur={() => {
        hoverPausedRef.current = false;
      }}
      onMouseEnter={() => {
        hoverPausedRef.current = true;
      }}
      onMouseLeave={() => {
        hoverPausedRef.current = false;
      }}
    >
      <button
        aria-label="Previous service"
        className="carousel-control carousel-control--previous"
        onClick={() => handleDirection("previous")}
        type="button"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <div className={className} ref={trackRef}>
        {children}
      </div>
      <button
        aria-label="Next service"
        className="carousel-control carousel-control--next"
        onClick={() => handleDirection("next")}
        type="button"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  );
}
