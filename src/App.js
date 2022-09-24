import './App.css';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <h1 className = "header"> UIUC Campus</h1>
      <ImageSlider slides = {SliderData} />

    </div>
  )
}

export default App;
