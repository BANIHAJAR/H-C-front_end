import VideoSection from "./SectionHome/VideoSection"
import Apropos from './SectionHome/Apropos'
import ImageSection from "./SectionHome/ImageSection"
import RestaurantSlider from './SectionHome/RestaurantSlider'
import Galleraie from "./SectionHome/Galeraie";
import "./HomeStyle.css";

const App = () => {
  return (
    <div>
      <VideoSection/>
      <Apropos/>
      <ImageSection/>
      <RestaurantSlider />
      <Galleraie/>
    </div>
  );
};

export default App;