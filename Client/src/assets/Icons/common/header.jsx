import React, { useState } from 'react';

const dropdownItems = [
    {
        id: 0,
        title: "Service Providers",
        icon: "/assets/icons/header/ServiceProviders.svg",
        sections: [
            {
                title: "ISP/Telco",
                url: "/isp_telco",
                column1: [
                    {
                        title: "Network Analyzer",
                        url: "/isp_telco/networkAnalyzer"
                    },
                    {
                        title: "Traffic Shaper",
                        url: "/isp_telco/trafficShaper"
                    },
                    {
                        title: "SMS",
                        url: "/isp_telco/sms"
                    }
                ],
                column2: [

                ]
            },
            {
                title: "WISP",
                url: "/wisp",
                column1: [
                    {
                        title: "Wi-Di",
                        url: "/wisp/wi-di"
                    },
                    {
                        title: "Wi-Di Lite",
                        url: "/wisp/wi-di-lite"
                    }
                ],
                column2: [
                    
                ]
            }
        ],
        direct: [],
        width: "full"
    },
    {
        id: 1,
        title: "Enterprise",
        icon: "/assets/icons/header/EnterpriseSection.svg",
        width: "full",
        sections: [
            {
                title: "CeySeries",
                url: "/ceySeries",
                column1: [
                    {
                        title: "CeyAnalyst",
                        url: "/ceySeries/ceyAnalyst"
                    },
                    {
                        title: "CeyMarshal",
                        url: "/ceySeries/ceyMarshal"
                    },
                    {
                        title: "CeyFlow",
                        url: "/ceySeries/ceyFlow"
                    }
                ],
                column2: [
                    {
                        title: "CeyGalaxy",
                        url: "/ceySeries/ceyGalaxy"
                    },
                    {
                        title: "CeyBroker",
                        url: "/ceySeries/ceyBroker"
                    },
                    {
                        title: "CeyDirect",
                        url: "/ceySeries/ceyDirectI"
                    }
                ]
            },
            {
                title: "SME",
                url: "/sme",
                column1: [
                    {
                        title: "EX-Series",
                        url: "/sme/ex-series"
                    }
                ],
                column2: [
                    
                ]
            }
        ],
        direct: [],
    },
    {
        id: 2,
        title: "Company",
        sections: [],
        direct: [
            {
                title: "About",
                url: "/about"
            },
            {
                title: "Team",
                url: "/team"
            },
            {
                title: "News",
                url: "/news"
            }
        ],
        width: "half",
        icon: "/assets/icons/header/About.svg",
    },
    {
        id: 3,
        title: "Resources",
        sections: [],
        direct: [
            {
                title: "Case Studies",
                url: "/case-studies"
            },
            {
                title: "Use Cases",
                url: "/use-cases"
            },
            {
                title: "Datasheets",
                url: "/datasheets"
            },
        ],
        width: "half",
        icon: "/assets/icons/header/Resources.svg",
    },
    {
        id: 4,
        title: "Contact Us",
        sections: [],
        direct: [],
        width: "none",
        url: "/contact"
    }
];

const Header = (props) => {
    const [dropdown,setDropdown] = useState(null);
    const [expanded,setExpanded] = useState(false);
    const [mobileSection,setMobileSection] = useState(null);

    const toggleMiniDropdown = (section) => {
        if(mobileSection === section) {
            setMobileSection(null);
        } else {
            setMobileSection(section);
        }
    }

    return <div className={"header-container"}>
        <div className={props.transparent === true ? "header transparent" : "header"}>

            <div className={dropdown === null || dropdown.width === "none" ? "header-dropdown-container hidden" : dropdown.width === "half" ? "header-dropdown-container half" : "header-dropdown-container"} onMouseLeave={()=>setDropdown(null)} >
                <div className={"header-dropdown"}>
                {
                    dropdown !== null && dropdown.width === "full" ?
                    <div className={"col col1"}>
                        <a href={ dropdown.sections[0].url }><div className={"col-header"}>{ dropdown.sections[0].title }</div></a>
                        <div className={"col-container"}>
                        {
                            dropdown.sections[0].column1.map((item)=>{
                                return <a href={item.url}>
                                    <div className={"col-header-item"}>{item.title}</div>
                                </a>
                            })
                        }
                        </div>
                    </div>:null
                }
                {
                    dropdown !== null && dropdown.width === "full" ?
                    <div className={"col col2"}>
                        <div className={"col-header"}>&nbsp;</div>
                        <div className={"col-container"}>
                        {
                            dropdown.sections[0].column2.map((item)=>{
                                return <a href={item.url}>
                                    <div className={"col-header-item"}>{item.title}</div>
                                </a>
                            })
                        }
                        </div>
                    </div>:null
                }
                <hr className={"vertical-hr"}></hr>
                <div className={"col col3"}>
                    {
                        dropdown !== null && dropdown.sections.length > 1 ?
                        <a href={ dropdown.sections[1].url }><div className={"col-header"}>{ dropdown.sections[1].title }</div></a>
                        : null 
                    }
                    <div className={"col-container"}>
                    {
                        dropdown !== null && dropdown.sections.length > 1 ?
                        dropdown.sections[1].column1.map((item)=>{
                            return <a href={item.url}>
                                <div className={"col-header-item"}>{item.title}</div>
                            </a>
                        })
                        : null
                    }
                    {
                        dropdown !== null && dropdown.direct.length > 0 ?
                        <div className={"col-header"}></div>
                        : null
                    }
                    {
                        dropdown !== null && dropdown.direct.length > 0 ?
                        dropdown.direct.map((item)=>{
                            return <a href={item.url}>
                                <div className={"col-header-item"}>{item.title}</div>
                            </a>
                        })
                        : null
                    }
                    </div>
                </div>
                <div className={"col col4"}>
                    { dropdown !== null  ? <img src={dropdown.icon} alt={dropdown.title}/> : null }
                </div>
                </div>
            </div>
            <div className={"header-left"}>
                <a href={"/"}><img src="/assets/icons/common/pq_white.png" alt="Paraqum Technologies" /></a>
            </div>
            <div className={"header-right"}>
                <div className={"header-sections"}>
                    {
                        dropdownItems.map((item, index)=>{
                            return <div className={dropdown === null ? "header-section" : index === 4 &&  dropdown.id === index ? "header-section header-section-contact selected" : dropdown.id === index ? "header-section selected" : "header-section"} onMouseEnter={()=>setDropdown(item)} key={"title_"+index}>
                                {dropdown !== null && dropdown.width === "none" ? <a href={item.url}>{item.title}</a> : {item.title}}
                                <img className={index === 4 ? "header-selected-bar-hidden":"header-selected-bar"} alt="paraqum selected header" src={"/assets/icons/header/dropdownIndicator.svg"}/>
                            </div>
                        })
                    }
                </div>
                <div className={"header-solution"}>
                    <a href={"https://embedded.paraqum.com/"} target={"_blank"} rel={"noreferrer"}>
                        Paraqum Solutions
                    </a>
                </div>
            </div>
        </div>
        <div className={expanded ? "header-mobile expanded" : props.transparent === true ? "header-mobile transparent" : "header-mobile" }>
            <div className={expanded ? "header-mobile-dropdown expanded" : props.transparent === true ? "header-mobile-dropdown transparent" : "header-mobile-dropdown"}>
                <div className={expanded ? "hamburg expanded" : "hamburg"} onClick={()=>setExpanded(!expanded)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={"header-mobile-logo"}>
                    <a href={"/"}><img src="/assets/icons/common/pq_white.png" alt="Paraqum Technologies" /></a>
                </div>
                
                <div className={"header-mobile-content"}>
                    <div className={"header-mobile-content-wrapper"}>
                        <div className={"header-mobile-content-types"}>
                            <img src={mobileSection === 0 ? "/assets/icons/header/ISP_TELCOwhite.svg" : "/assets/icons/header/ISP_TELCO.svg"} onClick={()=>toggleMiniDropdown(0)} alt={"ISP/Telco"}/>
                            <img src={mobileSection === 1 ? "/assets/icons/header/WISPwhite.svg" : "/assets/icons/header/WISP.svg"}  onClick={()=>toggleMiniDropdown(1)} alt={"WISP"}/>
                            <img src={mobileSection === 2 ? "/assets/icons/header/ENTERPRISEwhite.svg" : "/assets/icons/header/ENTERPRISE.svg"}  onClick={()=>toggleMiniDropdown(2)} alt={"Enterprise"}/>
                            <img src={mobileSection === 3 ? "/assets/icons/header/SMEwhite.svg" : "/assets/icons/header/SME.svg"}  onClick={()=>toggleMiniDropdown(3)} alt={"SME"}/>
                        </div>

                        <br/>

                        <div className={mobileSection === 0 ? "header-mobile-content-section" : "header-mobile-content-section hidden"}>
                            <a href={"/isp_telco"}><h5>ISP/Telco</h5></a>
                            <div className={"row"}>
                                <a href={"/isp_telco/trafficShaper"}>Traffic Shaper</a>
                                <a href={"/isp_telco/networkAnalyzer"}>Network Analyzer</a>
                            </div>
                            <div className={"row"}>
                                <a href={"/isp_telco/subscriberManager"}>Subscriber Manager</a>
                            </div>
                        </div>

                        <div className={mobileSection === 1 ? "header-mobile-content-section" : "header-mobile-content-section hidden"}>
                            <a href={"/wisp"}><h5>WISP</h5></a>
                            <div className={"row"}>
                                <a href={"/wisp/wi-di"}>Wi-Di</a>
                                <a href={"/wisp/wi-di-lite"}>Wi-Di Lite</a>
                            </div>
                        </div>

                        <div className={mobileSection === 2 ? "header-mobile-content-section" : "header-mobile-content-section hidden"}>
                            <a href={"/ceySeries"}><h5>Enterprise (Cey Series)</h5></a>
                            <div className={"row"}>
                                <a href={"/ceySeries/ceyAnalyst"}>CeyAnalyst</a>
                                <a href={"/ceySeries/ceyMarshal"}>CeyMarshal</a>
                            </div>
                            <div className={"row"}>
                                <a href={"/ceySeries/ceyFlow"}>CeyFlow</a>
                                <a href={"/ceySeries/ceyGalaxy"}>CeyGalaxy</a>
                            </div>
                            <div className={"row"}>
                                <a href={"/ceySeries/ceyBroker"}>CeyBroker</a>
                                <a href={"/ceySeries/ceyDirect-i"}>CeyDirect-<i>i</i></a>
                            </div>
                        </div>

                        <div className={mobileSection === 3 ? "header-mobile-content-section" : "header-mobile-content-section hidden"}>
                            <a href={"/sme"}><h5>SME</h5></a>
                            <div className={"row"}>
                                <a href={"/sme/ex-series"}>Ex-Series</a>
                            </div>
                        </div>

                        <br/>

                        <div className={"header-mobile-content-section"}>
                            <h5>Company</h5>
                            <div className={"row"}>
                                <a href={"/about"}>About</a>
                                <a href={"/team"}>Team</a>
                            </div>
                            <div className={"row"}>
                                <a href={"/news"}>News</a>
                                <a href={"/contact"}>Contact Us</a>
                            </div>
                        </div>

                        <br/>

                        <div className={"header-mobile-content-section"}>
                            <h5>Resources</h5>
                            <div className={"row"}>
                                <a href={"/case-studies"}>Case Studies</a>
                                <a href={"/use-cases"}>Use Cases</a>
                            </div>
                            <div className={"row"}>
                                <a href={"/datasheets"}>Datasheets</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"header-mobile-dropdown-logo"}>
                    <a href={"/"}><img src="/assets/icons/common/pq_white.png" alt="Paraqum Technologies" /></a>
                </div>
            </div>
        </div>
    </div>
}

export default Header;