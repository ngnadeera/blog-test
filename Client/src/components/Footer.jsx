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

    return <div className={"footer"}>
        <div className={"footer-container"}>
            <img src={pqLogo} alt={"Paraqum Logo"}  loading="lazy"/>
            <div className={"footer-contact"}>
                <div className={"footer-email"}><a href="mailto:info@paraqum.com">info@paraqum.com</a></div>
                <div className={"footer-filler"}>|</div>
                <div className={"footer-number"}><a href={"tel:94112099700"}>+94 11 2 099700</a></div>
            </div>
            
            <div className={"footer-social"}>
                <a href={"https://linkedin.com/company/paraqum"} target={"_blank"} rel={"noopener noreferrer"} onMouseEnter={()=>setSocial(0)} onMouseLeave={()=>setSocial(null)}>
                    <img src={social === 0 ? LinkedIn1 : LinkedIn} alt={"LinkedIn"}  loading="lazy"/>
                </a>
                <a href={"https://www.facebook.com/paraqum/"} target={"_blank"} rel={"noopener noreferrer"} onMouseEnter={()=>setSocial(1)} onMouseLeave={()=>setSocial(null)}>
                    <img src={social === 1 ? Facebook1 : Facebook} alt={"Facebook"}  loading="lazy"/>
                </a>
                <a href={"https://twitter.com/paraqum"} target={"_blank"} rel={"noopener noreferrer"} onMouseEnter={()=>setSocial(2)} onMouseLeave={()=>setSocial(null)}>
                    <img src={social === 2 ? Twitter1 : Twitter} alt={"Twitter"}  loading="lazy"/>
                </a>
                <a href={"https://www.youtube.com/c/paraqum"} target={"_blank"} rel={"noopener noreferrer"} onMouseEnter={()=>setSocial(3)} onMouseLeave={()=>setSocial(null)}>
                    <img src={social === 3 ? Youtube1 : Youtube} alt={"Youtube"}  loading="lazy"/>
                </a>
                
            </div>
            <div className={"footer-address"}>
                <p>Paraqum Technologies(Pvt) Ltd</p>
                <p>106, Bernard Botejue Business Park</p>
                <p>Dutugemunu Street, Dehiwala 10350</p>
                <p>Sri Lanka</p>
            </div>
            <div className={"footer-links"}>
                <h6>Quik Links</h6>
                <p>Your Subscription</p>
            </div>
            <div className={"footer-links"}>
                {/* <h5>Quick Links</h5> */}
                {/* <a href={"https://billing.paraqum.com"}>
                    Your Subscriptions
                </a> */}
            </div>
        </div>
    </div>
}

export default Footer;