import React from 'react';
import videoSrc from '../../assets/video/video.mp4';
import './MainScreen.css';
import Video from 'react-responsive-video';

const MainScreen = () => {
    return (
        <>
        <div className="video">
            <Video
               className="video"
               mp4={videoSrc}
                objectFit={"cover"}
            />  
        </div>
        <div className="slogan">
            <h2>Shape <br/>Tomorrow</h2>
            <button className="shop_btn">Shop Now</button>
        </div>
        </>
    );
};

export default MainScreen;