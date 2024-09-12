import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

const images = [
  "https://pbs.twimg.com/media/GTm5ik7WQAA4EPZ?format=jpg&name=large",
  "https://pbs.twimg.com/profile_banners/1067125744768307202/1699395208/1500x500",
  "https://pbs.twimg.com/media/GTCJUHbWUAAmiph?format=jpg&name=medium"
];

export function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, speed: 10 },
    [Autoplay({ delay: 5000 })]
  );

  const onNavButtonClick = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="news_embla h-full relative" ref={emblaRef}>
      <div className="news_embla__container">
        {images.map((src, index) => (
          <div key={index} className="news_embla__slide relative">
            <div className="absolute inset-0 bg-left-gradient"></div>
            <div className="absolute inset-0 bg-bottom-gradient"></div>
            <img
              src={src}
              alt={`News Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="text-content">
              <h1 className="news-title">News Headline Is That Eomzo Just Choked FNCS, But Elite Had Sphinx, Parz, & Paper Qualify To The Copenhagen Lan {index + 1}</h1>
              <Link to="../contact" className="read-more-btn">Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
