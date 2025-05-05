import VideoSection from "./SectionHome/VideoSection"
import Apropos from './SectionHome/Apropos'
import ImageSection from "./SectionHome/ImageSection"
import NosService from './SectionHome/NosService'
import Galleraie from "./SectionHome/Galeraie";
import "./HomeStyle.css";

const App = () => {
  return (
    <div>
      <VideoSection/>
      <Apropos/>
      <ImageSection/>
      <NosService />
      <Galleraie/>
    </div>
  );
};

export default App;