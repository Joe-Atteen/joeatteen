import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseSelectedSnapDisplayType = {
  selectedSnap: number;
  snapCount: number;
};

export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined
): UseSelectedSnapDisplayType => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

type PropType = {
  selectedSnap: number;
  snapCount: number;
};

export const SelectedSnapDisplay: React.FC<PropType> = (props) => {
  const { selectedSnap, snapCount } = props;

  return (
    <div className="embla__selected-snap-display z-10 !text-[#9b9b9b] text-nowrap">
      {selectedSnap + 1} / {snapCount}
    </div>
  );
};
