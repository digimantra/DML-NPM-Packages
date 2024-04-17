import { useState, useImperativeHandle, forwardRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Carousel = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = props.images;

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Expose nextSlide and prevSlide functions using useImperativeHandle
  useImperativeHandle(ref, () => ({
    next: nextSlide,
    prev: prevSlide,
  }));

  return (
    <div
      ref={ref}
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-96 overflow-hidden rounded-lg">
        {images?.map((image, index) => (
          <div
            key={index}
            className={`${index === activeIndex ? "opacity-100" : "opacity-0"} duration-700 ease-in-out`}
            data-carousel-item={`${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>

      {/* Buttons prev */}
      <div
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaAngleLeft onClick={prevSlide} />
          <span className="sr-only">Previous</span>
        </span>
      </div>

      {/* Buttons next */}
      <div
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaAngleRight onClick={nextSlide} />
          <span className="sr-only">Next</span>
        </span>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";
