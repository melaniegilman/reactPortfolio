// import React from "react";
// import Carousel from "./Carousel";

// function Portfolio() {

  
//     return (
//       <div className='card'>
          
//       <div className="portfolioContainer">
    
//         <Carousel></Carousel>
//         </div>
//         </div>
//     );
//   }

//   export default Portfolio;



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
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Ask Father Time</h4>
            <p>Ask Father Time is a modern take on the vintage advice column. Users can submit questions for Father Time (site admin) to answer. Users may also communicate inside of a live chat room.</p>
            <h4><a href="https://github.com/nosremetnarg/askFatherTime" target="blank">Github Repo</a></h4>
            <h4><a href="https://mighty-meadow-10557.herokuapp.com/" target="blank">Deployed Link</a></h4>
        </Carousel.Caption>.
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={blog} alt='Second Slide' />
       <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Tech Blog</h4>
            <p>A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developer's posts as well.</p>
            <h4><a href="https://github.com/melaniegilman/tech-blog" target="blank">Github Repo</a></h4>
            <h4><a href="https://mysterious-fjord-57455.herokuapp.com/" target="blank">Deployed Link</a></h4>
        </Carousel.Caption>.
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={budget} alt='Third Slide'/>
       <Carousel.Caption>
            <h4 style={{textAlign: 'center' }}>Budget Tracker</h4>
            <p>Updating an existing budget tracker application to allow for offline access and functionality.</p>
            <h4><a href="https://github.com/melaniegilman/budget-tracker" target="blank">Github Repo</a></h4>
            <h4><a href="https://powerful-crag-39646.herokuapp.com/" target="blank">Deployed Link</a></h4>
        </Carousel.Caption>.
       </Carousel.Item>
       <Carousel.Item>
       <img  className="d-block w-100" src={news}  alt='Fourth Slide'/>
       <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>News By The Map</h4>
            <p>News By The Map is a web application that brings you the latest news based off of a searched location using Google Maps.</p>
            <h4><a href="https://github.com/adamkeyser45/newsbythemap" target="blank">Github Repo</a></h4>
            <h4><a href="https://adamkeyser45.github.io/newsbythemap/" target="blank">Deployed Link</a></h4>
        </Carousel.Caption>.
       </Carousel.Item>
      </Carousel>
  
  );
}

export default Carousels;