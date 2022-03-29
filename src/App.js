import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Appliances from "./components/Appliances";
import Weather from "./components/Weather";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  const scroll = () =>{
    console.log('Scroll')
  }
  return (
    <div className="container">
      <Navbar name="Smart Home Panel"/>
      <Carousel>
        <Events/>
        <Weather/>
        <Events/>
      </Carousel>
      
      <div className="devices" onScroll={scroll}>
        <Appliances appliance={`Lamp1`}/>
        <Appliances appliance={`Lamp2`}/>
        <Appliances appliance={`Lamp3`}/>
        <Appliances appliance={`Lamp4`}/>
        <Appliances appliance={`Lamp4`}/>
        <Appliances appliance={`Lamp2`}/>
      </div>
      
    </div>
  );
}

export default App;
