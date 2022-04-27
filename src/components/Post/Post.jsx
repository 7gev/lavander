import React from "react"
import './Post.css'  


export default ({title, img}) => {
return (

    <div className="post">
<img src={img}/>
      {title}
        
   
    </div>

)
}

 



