import React from 'react'
import facebook from "../../assets/Icons/Social/facebook.png"
import x from "../../assets/Icons/Social/twitter-x.png"
 import linkedin from "../../assets/Icons/Social/linkedin.png"
 import { TwitterButton, TwitterCount } from "react-social";


export const ShareThisPost = () => {
    let url = 'https://paraqum.com/';

  return (
    <div className='share-post'>



        <div className='share-post-caption main-card-date'>
            Share this post
        </div>
        <div className='share-post-app-icon'>
            <img className='share-post-img' src={facebook}/>
            
<TwitterButton  url={url} appId={27901873} style={{border:'none', backgroundColor:'white'}}>
<img className='share-post-img' src={x}/>
      </TwitterButton>
            
            <img className='share-post-img' src={linkedin}/>
        </div>

    </div>
  )
}
