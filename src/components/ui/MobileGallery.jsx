'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { X } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

export default function ProductGallery({ images = [] }) {
  // Основная карусель
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  // Карусель для полноэкранного режима
  const [modalEmblaRef, modalEmblaApi] = useEmblaCarousel({ loop: false });
  // Общее состояние для текущего индекса
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Миниатюры (можно оставить общие или разделить при необходимости)
  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  // Обработчики для основной карусели
  const onMainSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Обработчики для модальной карусели
  const onModalSelect = useCallback(() => {
    if (!modalEmblaApi) return;
    setSelectedIndex(modalEmblaApi.selectedScrollSnap());
  }, [modalEmblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onMainSelect);
      onMainSelect();
    }
    if (modalEmblaApi) {
      modalEmblaApi.on('select', onModalSelect);
    }

    return () => {
      emblaApi?.off('select', onMainSelect);
      modalEmblaApi?.off('select', onModalSelect);
    };
  }, [emblaApi, modalEmblaApi, onMainSelect, onModalSelect]);

  // Синхронизация при открытии модалки
  useEffect(() => {
    if (isFullscreen && modalEmblaApi) {
      modalEmblaApi.scrollTo(selectedIndex);
    }
  }, [isFullscreen, modalEmblaApi, selectedIndex]);

  const scrollTo = useCallback(
    (index) => {
      if (isFullscreen && modalEmblaApi) {
        modalEmblaApi.scrollTo(index);
      } else if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, modalEmblaApi, isFullscreen]
  );

  return (
    <>
      {/* Основной вид */}
      <div
        className='w-full relative overflow-hidden'
        onClick={() => setIsFullscreen(true)}
      >
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {images.map((src, index) => (
              <div key={index} className='min-w-full'>
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className='w-full h-auto max-h-[400px] object-cover'
                />
              </div>
            ))}
          </div>
          <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10'>
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === selectedIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Полноэкранный режим */}
      {isFullscreen && (
        <div className='fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center px-4 py-8'>
          <button
            onClick={() => {
              setIsFullscreen(false);
              // Синхронизация при закрытии
              if (emblaApi) emblaApi.scrollTo(selectedIndex);
            }}
            className='absolute top-4 right-4 text-white text-2xl font-bold z-50 shadow-xl'
          >
            <X size={27} />
          </button>

          <div className='overflow-hidden w-full max-w-4xl' ref={modalEmblaRef}>
            <div className='flex'>
              {images.map((src, index) => (
                <div key={index} className='min-w-full flex justify-center'>
                  <img
                    src={src}
                    alt={`Fullscreen ${index}`}
                    className='max-h-[80vh] object-contain rounded-xl'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Миниатюры */}
          <div
            className='mt-4 w-full max-w-3xl overflow-hidden'
            ref={thumbEmblaRef}
          >
            <div className='flex gap-2'>
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`border-2 rounded-md ${
                    index === selectedIndex
                      ? 'border-white'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={src}
                    className='w-16 h-16 object-cover rounded-md'
                    alt={`Thumb ${index}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
