import React, {useState} from 'react'
import { SliderData } from './SliderData'

//ImageSlider takes in SliderData as a prop
const ImageSlider = ({slides}) => {

//Create a current state that acts as the index of the current image being displayed on the website.
const [current, setCurrent] = useState(0)
const length = slides.length

//This function changes the image so that it is the next image in the array from SliderData.
//If current is set at the last image, current will loop back to the first image.
const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

//This function changes the image so that it is the previous image in the array from SliderData.
//If current is set at the first image, current will loop back to the last image.
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

console.log(current);
//If statement guarantees that slides is full.
if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

// Return function creates left and right buttons
// Used the map function to set the src of the image to the index of current.
  return (
    <section className = 'slider'>
        <div>
        <button type = "button" className = 'right-button' onClick = {nextSlide} />
        <button type = "button" className = 'left-button' onClick = {prevSlide} />
        </div>
        {SliderData.map((slide, index) => {
            return (
                <div className = {index === current ? "slide active" : 'slide'} key = {index}>
                    {index === current && (
                    <img src = {slide.image} className = 'image' alt = 'quant image' />
                    )}
                </div>
            )
        })}
    </section>
  );
};
export default ImageSlider;