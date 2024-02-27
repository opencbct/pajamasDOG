import React, { useEffect, useRef } from 'react';

function Carousel() {
  const carouselRef = useRef();
  const nextRef = useRef();
  const prevRef = useRef();

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;

    const SliderDom = carouselDom.querySelector('.carousel .list');
    const thumbnailBorderDom = carouselDom.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function(){
        showSlider('next');    
    }

    prevDom.onclick = function(){
        showSlider('prev');    
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)

    function showSlider(type){
        let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if(type === 'next'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        }else{
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext)
    }
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <button id="next" ref={nextRef}>Next</button>
      <button id="prev" ref={prevRef}>Prev</button>
      {/* Other carousel content */}
    </div>
  );
}

export default Carousel;