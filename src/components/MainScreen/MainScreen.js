import React from 'react';
import videoSrc from '../../assets/video/video.mp4';
import './MainScreen.css';
import Video from 'react-responsive-video';
import { Link } from "react-router-dom";

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
            <Link to="/store">
                <button className="shop_btn">Shop Now</button>
            </Link>
            
        </div>
        </>
    );
};

export default MainScreen;