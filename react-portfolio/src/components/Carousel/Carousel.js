// import React from 'react';
// import Project from '../Project';
// // import Hero from "../Hero";


// function Portfolio() {
//     return (
//         <div className="m-4">
//             {/* <Hero /> */}
//             <Project />
            
//         </div>
//     )
// }

// export default Portfolio;

import React, {useState} from "react";
import ask from '../../assets/img/ask.png'
import blog from '../../assets/img/blog.png'
import budget from '../../assets/img/budget.png'
import news from '../../assets/img/news.png'
import Carousel from "react-bootstrap/Carousel";
require("dotenv").config();



function Carousels() {

  const style = {
    color: 'black',
    backgroundColor: 'black'
  }

  const carouselItems = {
  
  }
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
  
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={ask} style={style} alt="First Slide"/>
          <Carousel.Caption >
            <h2 class="restHead">RALEIGH</h2>
            <h4>ST. ROCH FINE OYSTERS + BAR</h4>
            <p>223 SOUTH WILMINGTON STREET, RALEIGH, NC, 27601</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={blog} alt='Second Slide' />
          <Carousel.Caption>
          <h2 class="restHead">RALEIGH</h2>
          <h3>MADDEN'S SEAFOOD</h3>
            <p>8401 HONEYCUTT ROAD, RALEIGH, NC 27615</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={budget} alt='Third Slide'/>
          <Carousel.Caption>
          <h2 class="restHead">BEAUFORT</h2>
          <h3>ROSE SEAFOOD RETAIL AND WHOLESALE</h3>
           <p>1646 LIVE OAK STREET, BEAUFORT, NC 28516</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={news}  alt='Fourth Slide'/>
          <Carousel.Caption>
          <h2 class="restHead">BEAUFORT</h2>

          <h3>BLACKBEARD'S GRILL AND STEAM BAR</h3>
          <p>1644 LIVE OAK STREET, BEAUFORT, NC 28516</p>
          </Carousel.Caption>
       </Carousel.Item>
      </Carousel>
  
  );
}

export default Carousels;