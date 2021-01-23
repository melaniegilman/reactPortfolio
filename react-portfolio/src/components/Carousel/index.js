import React, {useState} from "react";
import ask from '../../assets/img/ask.png'
import blog from '../../assets/img/blog.png'
import budget from '../../assets/img/budget.png'
import news from '../../assets/img/news.png'
import readme from '../../assets/img/readme.png'
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
  // <section className="portfolioContainer container">
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
            <p>This application allows a user to update their budget and track their finances. This app has offline functionality so users can update their budgets from anywhere, anytime.</p>
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
       <Carousel.Item>
       <img  className="d-block w-100" src={readme}  alt='Fifth Slide'/>
       <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>README Generator</h4>
            <p>This is a professional README generator. When the user invokes the application by running node index.js in the terminal, the application will run and prompt the user for information. The information will be logged into the correct format and a professional README wil be automatically generated and will appear in the root of the directory</p>
            <h4><a href="https://github.com/melaniegilman/readMeGenerator" target="blank">Github Repo</a></h4>            
        </Carousel.Caption>.
       </Carousel.Item>
      </Carousel>
      // </section>
  
  );
}

export default Carousels;