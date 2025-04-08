import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "./EmblaDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaArrows";
import useEmblaCarousel from "embla-carousel-react";

type SlideType = {
  image: string;
  title: string;
  link: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container mb-10">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content">
                <a
                  href={slide.link}
                  rel="noopener noreferrer"
                  className="block w-full h-full work-card"
                >
                  <div className="w-full h-[400px] rounded-2xl overflow-hidden relative group">
                    <div className="latest-bg relative overflow-hidden flex items-center justify-center">
                      <div className="z-10">
                        <div className="flex items-center justify-between gap-3 content">
                          <h5 className="font-gt-medium text-[24px] text-white">
                            {slide.title}
                          </h5>
                          <i className="fa fa-arrow-right text-2xl sm:text-2xl text-white"></i>
                        </div>
                      </div>
                    </div>
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      width={400}
                      height={400}
                      className="absolute top-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="w-full h-[1px] bg-[#9b9b9b]"></div>

        <div>
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
