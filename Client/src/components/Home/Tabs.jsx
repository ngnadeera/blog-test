import React, { useState } from 'react';
import './Home.css'; // Create a CSS file for styling
import BlogCard from './BlogCard';
import image from "../../assets/Carousel/Img (1).jpg"
import image1 from "../../assets/Carousel/Img (3).jpg"
import image3 from "../../assets/Carousel/Img (2).jpg"
import SmallBlogCards from './SmallBlogCards';

function Tabs() {
  const [selectedTab, setSelectedTab] = useState('latest'); // Initial selected tab is 'latest'

  // Function to handle tab selection
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${selectedTab === 'latest' ? 'selected' : '' }` }
          onClick={() => handleTabClick('latest')}
        >
          Latest Blogs
        </button>
        <button
          className={`tab-button ${selectedTab === 'top' ? 'selected' : ''}`}
          onClick={() => handleTabClick('top')}
        >
          Top Blogs
        </button>
      </div>

      <div className="tab-content">
        {selectedTab === 'latest' && (
          <div >
  
        <SmallBlogCards 
        category="Technology"
        title="Praqum Wi-Di: Transforming WISP Network Optimization for Peak Performance"
        date="2023-05-14"
        imageSrc={image}
        postRoute={"./"}
        />

<SmallBlogCards 
        category="Technology"
        title="Praqum Wi-Di: Transforming WISP Network Optimization for Peak Performance"
        date="2023-05-14"
        imageSrc={image1}
        postRoute={"./"}
        />

<SmallBlogCards 
        category="Technology"
        title="Praqum Wi-Di: Transforming WISP Network Optimization for Peak Performance"
        date="2023-05-14"
        imageSrc={image3}
        postRoute={"./"}
        />
              

          </div>
        )}
        {selectedTab === 'top' && (
          <div>
   
            <h2>Top Blogs</h2>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
