import React from 'react';
import video2 from '../../assets/video/video2.mp4';
import Video from 'react-responsive-video';
import './Section4.css';

const Section4 = () => {
    return (
        <div>
            <div className="video2">
            <Video
               className="video"
               mp4={video2}
                objectFit={"cover"}
            />  
        </div>
        <div className="article2">
            <h2>We’ve <br/> never<br/> done things <br/>by the<br/> book.</h2>
        </div>
            
        </div>
    );
};

export default Section4;