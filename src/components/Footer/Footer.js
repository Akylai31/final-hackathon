import React from 'react';
import "./Footer.css"

const Footer = () => {
   return (
      <>
         <footer className="footer">
            <div className="wrap-servise">
               <div className="container__footer">
                  <hr/>
                  <div className="servise__wraps">
                     <div className="wrap">
                        <ul>
                           <li><a href="">Shop Products</a></li>
                           <li><a href="">Bookmark</a></li>
                           <li><a href="">About</a></li>
                           <li><a href="">Custom Projects</a></li>
                           <li><a href="">TV</a></li>
                           <li><a href="">Music</a></li>
                        </ul>
                     </div>
                     <div className="wrap">
                        <ul>
                           <li><a href="">Wholesale Orders</a></li>
                           <li><a href="">Contact Us</a></li>
                           <li><a href="">Shipping + Returns</a></li>
                           <li><a href="">FAQs</a></li>
                        </ul>
                     </div>
                     
                     
                       
                     
                  <hr/>
                  <div className="wrap-end">
                     Copyright &copy;{new Date().getFullYear()} Apple Inc.All right reserved. Privacy Policy | Terms of Use | Sales and Refunds | legal | Site map
                  </div>
               </div>
            </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;