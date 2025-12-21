"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Player = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

type Video = {
  id: string;
  title: string;
  url: string;
  platform: "youtube" | "vimeo" | "mp4";
};

const videos: Video[] = [
  {
    id: "1",
    title: "Cronica Urbana - Presentacion",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    platform: "youtube",
  },
  {
    id: "2",
    title: "Voces de Barrio - Segmento",
    url: "https://www.youtube.com/watch?v=jNgP6d9HraI",
    platform: "youtube",
  },
  {
    id: "3",
    title: "Reportaje Comunitario - Especial",
    url: "https://www.youtube.com/watch?v=O6Xo21L0ybE",
    platform: "youtube",
  },
  {
    id: "4",
    title: "Entrevista - Liderazgos Locales",
    url: "https://www.youtube.com/watch?v=glpHpu3NoZE",
    platform: "youtube",
  },
];

const accentBars = [
  { color: "#48A4DB", width: "w-12" },
  { color: "#E93C55", width: "w-10" },
  { color: "#F4BD31", width: "w-8" },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!swiperInstance || !prevRef.current || !nextRef.current) return;
    const navigation = swiperInstance.params.navigation;
    if (navigation && typeof navigation !== "boolean") {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [swiperInstance]);

  const motionSettings = useMemo(
    () => ({
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.18, ease: "easeOut" },
    }),
    []
  );

  return (
    <main className="min-h-screen bg-white text-[var(--brand-ink,#231F20)]">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <motion.div
            {...motionSettings}
            className="flex flex-col gap-6 md:col-span-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div
                  aria-label="Sello o codigo QR"
                  className="relative h-16 w-16 overflow-hidden rounded-2xl border border-[color:rgba(30,34,79,0.18)] bg-white shadow-[0_14px_36px_rgba(30,34,79,0.16)]"
                >
                  <Image
                    src="/tigreSalvacion.jpg"
                    alt="Sello Salvacion Nacional"
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {accentBars.map((bar) => (
                    <span
                      key={`seal-${bar.color}`}
                      className={`block h-1 rounded-full ${bar.width}`}
                      style={{ backgroundColor: bar.color }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="relative flex h-28 w-44 max-w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-4 py-3 shadow-[0_10px_24px_rgba(30,34,79,0.12)] sm:h-32 sm:w-56 md:h-36 md:w-64">
                  <Image
                    src="/salvacionNacionalv2.jpg"
                    alt="Logo Salvacion Nacional"
                    width={640}
                    height={360}
                    sizes="(min-width:1024px) 16rem, (min-width:640px) 14rem, 11rem"
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                {...motionSettings}
                transition={{ ...motionSettings.transition, delay: 0.05 }}
                className="flex items-start gap-5"
              >
                <div className="relative mt-1 h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-[color:rgba(30,34,79,0.18)] bg-gradient-to-br from-white via-white to-slate-50 shadow-[0_10px_28px_rgba(30,34,79,0.14)] sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[color:rgba(30,34,79,0.24)]" />
                  <Image
                    src="/avatar.png"
                    alt="Retrato de Ana Maria Ayerbe"
                    fill
                    sizes="(min-width:1024px) 14rem, (min-width:640px) 12rem, 9rem"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-2">
                  <h1
                    className="text-4xl font-serif uppercase leading-tight tracking-[0.36em] text-[var(--brand-navy,#1E224F)] sm:text-5xl lg:text-6xl"
                    style={{ textShadow: "0 14px 30px rgba(30, 34, 79, 0.14)" }}
                  >
                    Ana Maria Ayerbe
                  </h1>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:rgba(35,31,32,0.7)]">
                    <span className="h-px w-6 bg-[#48A4DB]" />
                    <span>La voz que representa a la comunidad</span>
                    <span className="h-px w-6 bg-[#E93C55]" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...motionSettings}
                transition={{ ...motionSettings.transition, delay: 0.09 }}
              >
                <Button
                  variant="ghost"
                  className="rounded-full border border-[color:rgba(30,34,79,0.18)] px-6 py-2 uppercase tracking-[0.14em] text-[var(--brand-navy,#1E224F)] hover:border-[color:rgba(30,34,79,0.35)]"
                >
                  Conocer mas
                </Button>
              </motion.div>
            </div>

            <motion.div
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: 0.12 }}
              className="mt-2 flex flex-wrap items-center gap-4 text-[13px] uppercase tracking-[0.14em] text-[color:rgba(35,31,32,0.7)]"
            >
              <button
                aria-label="Instagram"
                className="group flex items-center gap-2 rounded-full px-2 py-1 transition hover:text-[var(--brand-navy,#1E224F)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue,#48A4DB)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Instagram className="h-4 w-4 text-[var(--brand-blue,#48A4DB)] transition group-hover:text-[var(--brand-navy,#1E224F)]" />
                <span>@ayerbe.oficial</span>
              </button>
              <button
                aria-label="Twitter"
                className="group hidden items-center gap-2 rounded-full px-2 py-1 transition hover:text-[var(--brand-navy,#1E224F)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue,#48A4DB)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:flex"
              >
                <Twitter className="h-4 w-4 text-[var(--brand-red,#E93C55)] transition group-hover:text-[var(--brand-navy,#1E224F)]" />
                <span>@ayerbevoz</span>
              </button>
              <button
                aria-label="YouTube"
                className="group flex items-center gap-2 rounded-full px-2 py-1 transition hover:text-[var(--brand-navy,#1E224F)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue,#48A4DB)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Youtube className="h-4 w-4 text-[var(--brand-green,#89C97F)] transition group-hover:text-[var(--brand-navy,#1E224F)]" />
                <span>/AnaMariaAyerbe</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            {...motionSettings}
            transition={{ ...motionSettings.transition, delay: 0.08 }}
            className="md:col-span-6"
          >
            <div className="relative rounded-2xl border border-[color:rgba(30,34,79,0.14)] bg-white shadow-[0_24px_68px_rgba(30,34,79,0.15)] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {accentBars.map((bar) => (
                    <span
                      key={`card-${bar.color}`}
                      className={`block h-1 rounded-full ${bar.width}`}
                      style={{ backgroundColor: bar.color }}
                    />
                  ))}
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-[color:rgba(35,31,32,0.7)]">
                  Destacados
                </div>
              </div>

              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Keyboard, A11y]}
                  spaceBetween={18}
                  slidesPerView={1}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  onSwiper={setSwiperInstance}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  pagination={{ clickable: true }}
                  keyboard={{ enabled: true }}
                  a11y={{ enabled: true }}
                  className="pb-10"
                >
                  {videos.map((video, index) => (
                    <SwiperSlide key={video.id}>
                      <div className="space-y-3">
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100">
                          <Player
                            url={video.url}
                            width="100%"
                            height="100%"
                            playing={activeIndex === index}
                            muted
                            controls
                            playsinline
                            config={{
                              youtube: { playerVars: { modestbranding: 1 } },
                            }}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex items-center justify-between rounded-lg border border-[color:rgba(30,34,79,0.12)] bg-white/85 px-4 py-3"
                        >
                          <div>
                            <p className="text-sm font-semibold text-[var(--brand-navy,#1E224F)]">
                              {video.title}
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:rgba(35,31,32,0.7)]">
                              {video.platform}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-1 w-8 rounded-full bg-[#48A4DB]" />
                            <span className="h-1 w-6 rounded-full bg-[#E93C55]" />
                            <span className="h-1 w-5 rounded-full bg-[#F4BD31]" />
                          </div>
                        </motion.div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-3">
                  <Button
                    ref={prevRef}
                    aria-label="Video anterior"
                    variant="ghost"
                    className="pointer-events-auto h-10 w-10 rounded-full border border-[color:rgba(30,34,79,0.14)] bg-white/95 p-0 text-[var(--brand-navy,#1E224F)] shadow-[0_10px_28px_rgba(30,34,79,0.14)] hover:border-[color:rgba(30,34,79,0.28)]"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    ref={nextRef}
                    aria-label="Video siguiente"
                    variant="ghost"
                    className="pointer-events-auto h-10 w-10 rounded-full border border-[color:rgba(30,34,79,0.14)] bg-white/95 p-0 text-[var(--brand-navy,#1E224F)] shadow-[0_10px_28px_rgba(30,34,79,0.14)] hover:border-[color:rgba(30,34,79,0.28)]"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
