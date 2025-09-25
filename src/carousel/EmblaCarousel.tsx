import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "./EmblaDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaArrows";
import useEmblaCarousel from "embla-carousel-react";

interface SlideType {
  image: string;
  title: string;
  description?: string;
  technologies?: string[];
  link: string;
}

interface PropType {
  slides: SlideType[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
    dragFree: true,
  });

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex mb-3">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              key={index}
            >
              <div className="embla__slide__content">
                <a
                  href={slide.link}
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="group h-full bg-[#222]/30 border border-transparent hover:border-[#333] rounded-lg p-2 transition-all duration-300">
                    <div className="h-48 overflow-hidden rounded-md mb-5 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 right-0 m-3 w-8 h-8 bg-[#ecc9b0]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-50">
                        <i className="fa fa-arrow-right text-black/80 text-xs"></i>
                      </div>
                    </div>
                    <div className="px-2">
                      <h3 className="font-gt-regular text-base text-white mb-2 group-hover:text-[#ecc9b0] transition-colors duration-300">
                        {slide.title}
                      </h3>
                      {slide.description && (
                        <p className="text-[#c7c7c7] text-sm mb-3 line-clamp-2 font-gt-light">
                          {slide.description}
                        </p>
                      )}
                      <div className="flex items-center mt-3">
                        <span className="text-[#ecc9b0]/80 text-sm font-gt-light group-hover:text-[#ecc9b0] transition-colors duration-300">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons flex justify-center items-center gap-6">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="text-[#c7c7c7] hover:text-[#ecc9b0] p-1 transition-colors"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="text-[#c7c7c7] hover:text-[#ecc9b0] p-1 transition-colors"
          />
        </div>

        <div className="flex justify-center">
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
