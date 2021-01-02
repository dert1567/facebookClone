import React from 'react'
import './Widget.css'

function Widget() {
    return (
        <div className="widgets">
           <div class="fb-page"
            data-href="https://www.facebook.com/facebook" 
            data-tabs="timeline" 
            data-width="340" 
            data-height="1500" 
            data-small-header="false" 
            data-adapt-container-width="true"
            width="340"
            height="100%" 
            style={{border: "none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            data-hide-cover="false"
             data-show-facepile="true">
                 <blockquote cite="https://www.facebook.com/facebook" 
                 class="fb-xfbml-parse-ignore">
                     <a href="https://www.facebook.com/facebook">
                         Facebook</a>
                         </blockquote>
                         </div>
        </div>
    )
}

export default Widget
