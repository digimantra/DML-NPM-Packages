import React, { ReactElement, useEffect } from "react";
import clsx from "clsx";
// import { ADPIcon, iconList } from "../adpIcon";
import "./carousel.styles.css"
import { log } from "console";

export interface ICarouselItem {
  /**
   * Html for slide
   */
  children: React.ReactElement;
  /**
   * Callback for each item click
   */
  onClick?: () => void;
}

export interface ICarouselProps {
  /**
   * Array of Items that needs to be displayed in Carousel
   */
  items: ICarouselItem[];
  /**
   * Index of the item to be displayed initially,
   * Carousel will start from 1st item if not provided
   * @default 0
   */
  initialIndex?: number;
  /**
   * Accepts space separated class names to override the wrapper's styles
   */
  classes?: string;
  /**
   * Accepts space separated class names to override the button's styles
   */
  buttonClasses?: string;
  /**
   * Number of items visible at a time
   * @default 1
   */
  numItemsVisible?: number;
  /**
   * Number of items to scroll at a time,
   * should be less than numItemsVisible
   * @default 1
   */
  numItemsScroll?: number;
  /**
  * Makes the carousel content full width
  * @default false
  */
  fullWidth?: boolean;
  /**
   * Callback function called after the the current index changes
   */
  onChange?: ( startIndex: number ) => void;
}

export const Carousel = ({
  initialIndex = 0,
  buttonClasses,
  classes,
  items,
  numItemsVisible = 1,
  fullWidth = false,
  numItemsScroll = 1,
  onChange
}: ICarouselProps ): ReactElement => {

  // calculate the startIndex using initialIndex
  // startIndex is calculated such that initial index comes at start or in active slide
  const [ startIndex, setStartIndex ] = React.useState<number>(
    initialIndex && initialIndex > 0 && initialIndex <= items?.length ?
      Math.floor( initialIndex / numItemsVisible ) * numItemsVisible : 0
  );
  
  // check for numItemsVisible is positive and not exceeds number of items
  const itemsVisible = numItemsVisible > 1 && numItemsVisible <= items?.length ? numItemsVisible : 1;

  // check for itemsScroll is positive and not exceeds number of numItemsVisible
  const itemsScroll = numItemsScroll > 1 && numItemsScroll <= numItemsVisible ? numItemsScroll : 1;

  // calculate the sliding windows we will have based on itemsVisible and itemsScroll
  const slides = Math.ceil((( items?.length - itemsVisible ) / itemsScroll ));
  // const currentSlide = Math.floor(startIndex / numItemsVisible);

  // calculate the max translate value to avoid over translation in case numItemsScroll is greater
  // const maxTranslateBy = ( slides - 1 ) * 100;

  // calculate translateBy and should not exceed maxTranslateBy
  const translateBy = startIndex === 0 ? 0 : startIndex *  ( 100 / itemsVisible );

  useEffect(() => {
    onChange?.( startIndex );
  }, [ onChange, startIndex ]);

  const handleNext = () => {    
    if ( items?.length > 0 && items?.length !==  startIndex + numItemsScroll ) {
      setStartIndex(( index ) => index + numItemsScroll );
    }
  };

  console.log(`items-> ${items?.length}, startIndex-> ${startIndex}, numScroll -> ${numItemsScroll}, slides -> ${slides}`); 

  

  const handlePrev = () => {
    if ( items?.length > 0 && startIndex - numItemsScroll > -1 ) {
      setStartIndex(( index ) => index - numItemsScroll );
    }
  };

  const renderSliders = () => {
    const sliders = [
      {
        label: "previous",
        onClick: handlePrev,
        disabled: startIndex === 0,
        icon: "prev",
        position: "start-0"
      },
      {
        label: "next",
        onClick: handleNext,
        disabled:  startIndex > (slides * numItemsScroll) - 1,
        icon: "next",
        position: "end-0"
      }
    ];
    return (
      sliders.map(({ label, disabled, onClick, icon, position }, i ) => {
        return <button
          key={`${label}-${i}`} aria-label={label} disabled={disabled} onClick={onClick} type="button"
          className={clsx( "carousel-button", position, buttonClasses )}>
          {icon}
        </button>;
      })
    );
  };

  const renderCarousel = () => {
    return <div className={clsx( "carousel-wrapper", fullWidth ? "w-full" : "w-[90%]", classes )}>
      <div
        style={{ transform: document.dir === "rtl" ? `translate3d(${translateBy}%, 0px, 0px)` : `translate3d(-${translateBy}%, 0px, 0px)` }}
        className="carousel-content">
        {
          items?.map(( carouselItem, idx ) => <div
            style={{ width: `${( 100 / itemsVisible )}%` }}
            className={"flex-none px-px"}
            onClick={carouselItem?.onClick}
            key={`item-${idx}`}>
            {carouselItem?.children}
          </div>
          )}
      </div>
    </div>;
  };

  return <div data-testid="carousel" className="carousel-container">
    {/* Carousel wrapper  */}
    {renderCarousel()}
    {/* Slider controls */}
    {renderSliders()}
  </div>;
};

export default Carousel;
