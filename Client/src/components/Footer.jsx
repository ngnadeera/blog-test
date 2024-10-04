import React, { useState } from 'react';
import LinkedIn from "../assets/Icons/common/Vector-3.svg";
import Facebook from "../assets/Icons/common/Vector-7.svg";
import Twitter from "../assets/Icons/common/Vector-6.svg";
import Youtube from "../assets/Icons/common/Vector-2.svg";

import LinkedIn1 from "../assets/Icons/common/Vector-4.svg";
import Facebook1 from "../assets/Icons/common/Vector.svg";
import Twitter1 from "../assets/Icons/common/Vector-5.svg";
import Youtube1 from "../assets/Icons/common/Vector-1.svg";
import pqLogo from "../assets/Icons/common/pq_white.png";



const Footer = (props) => {

    const [social,setSocial] = useState(null);

    return (
        <>

<div className="footerNew">
          <div className="footerNew-container">
            
            <div className="footerNew-section1">
             
                <img
                className='footerNew-pq-logo'
                  src={"\assets\pq_white.png"}
                  alt={"Paraqum Logo"}
                  loading="lazy"
                />
              
                <div className={"footer-links"}>
                    <h5 className='wispa-text'>WISPA Vendor Member</h5>
                    <img src={ "../assets/Icons/header/WISPwhite.svg"} alt={"WISPA"} style={{ height: 50, width: 'auto' }} loading="lazy"/>
                </div>

                <h5 className='rights-text'>&copy; 2024 Paraqum. All Rights Reserved.</h5>
            </div>
    
            <div className="footerNew-section2">
              <div>
                <p className="footerNew-topics">Navigation</p>
                <div className='footerNew-section2-list'>
                <p><a href='./Privacy-Policy'>Privacy Policy</a></p>
                <p><a href='/Terms-of-Services'>Terms of Services</a></p>
                <p><a href='./about'>About</a></p>
             
                </div>

              </div>
            </div>
    
            <div className="footerNew-section3">

            <div>
                <p className="footerNew-topics">Contact Us</p>
                <p className="footerNew-topics-content-top footerNew-mb">
                  email:
                  <div className={"footer-email"}>
                    <a className={"footer-email-a"} href="mailto:info@paraqum.com">info@paraqum.com</a>
                  </div>
                </p>
                <p className="footerNew-topics-content">
                  phone:&nbsp;
                  <div className={"footerNew-number"}>
                    <a href={"tel:94112099700"}>+1 469 405 2622</a><br/>
                    {/* <a href={"tel:94112099700"}>+94 11 2 099700</a><br/> */}
                   
                  </div>
                </p>
              </div>
             
            </div>

            <div className="footerNew-section4">

            <div>
                <p className="footerNew-topics">Social</p>
                <p className="footerNew-topics-content-top footerNew-mb">
                Follow us on social media
                </p>

                  <div className={"footerNew-social"}>
                  <a
                    href={"https://linkedin.com/company/paraqum"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    onMouseEnter={() => setSocial(0)}
                    onMouseLeave={() => setSocial(null)}
                  >
                    <img
                      src={
                        social === 0
                          ? "/assets/icons/common/Vector-4.svg"
                          : "/assets/icons/common/Vector-3.svg"
                      }
                      alt={"LinkedIn"}
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={"https://www.facebook.com/paraqum/"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    onMouseEnter={() => setSocial(1)}
                    onMouseLeave={() => setSocial(null)}
                  >
                    <img
                      src={
                        social === 1
                          ? "/assets/icons/common/Vector.svg"
                          : "/assets/icons/common/Vector-7.svg"
                      }
                      alt={"Facebook"}
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={"https://twitter.com/paraqum"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    onMouseEnter={() => setSocial(2)}
                    onMouseLeave={() => setSocial(null)}
                  >
                    <img
                      src={
                        social === 2
                          ? "/assets/icons/common/Vector-5.svg"
                          : "/assets/icons/common/Vector-6.svg"
                      }
                      alt={"Twitter"}
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={"https://www.youtube.com/c/paraqum"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    onMouseEnter={() => setSocial(3)}
                    onMouseLeave={() => setSocial(null)}
                  >
                    <img
                      src={
                        social === 3
                          ? "/assets/icons/common/Vector-1.svg"
                          : "/assets/icons/common/Vector-2.svg"
                      }
                      alt={"Youtube"}
                      loading="lazy"
                    />
                  </a>
                </div>
                
              </div>
            
              
            </div>
            
          </div>
          <hr className="footerNew-hr"/>
        </div>



      
        
        </>
    )
}

export default Footer;