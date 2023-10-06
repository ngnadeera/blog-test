import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/Carousel/Img (1).jpg"
import image2 from "../../assets/Carousel/Img (2).jpg"
import image3 from "../../assets/Carousel/Img (3).jpg"
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import writer from '../../assets/Carousel/avatar.jpg'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CarouselCaption from './CarouselCaption';

const Slider = () => {
  const imageStyle = {
    height: "80vh", 
    width: "100%",   
    objectFit: "cover", 
  };
 return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src={image3}
          alt="First slide"
        />
        <CarouselCaption
        category="Technology"
        title="Latest lockdown a challenge for regional businesses"
        content="The latest lockdown measures have presented significant challenges for businesses. These challenges include disruptions in operations.."
        writer="John Doe"
        writerImage={writer}
        date="15-MARCH-2023"
      />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      <CarouselCaption
        category="Artificial Intelligence"
        title="Artificial Intelligence (AI) is reshaping industries across the globe"
        content="From self-driving cars to personalized recommendations on streaming platforms, AI is making our lives smarter and more efficient. "
        writer="John Doe"
        writerImage={writer}
        date="15-JAN-2023"
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          className="d-block w-100"
          src={image1}
          alt="Third slide"
        />
        <CarouselCaption
        category="Networks"
        title="The transition from 4G to 5G networks is revolutionizing the way we connect. "
        content="With lightning-fast speeds and low latency, 5G technology is unlocking the potential for autonomous vehicles, remote surgeries, and smart cities."
        writer="John Doe"
        writerImage={writer}
        date="15-DEC-2023"
      />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
