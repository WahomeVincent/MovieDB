import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from './listItem.scss'
import { useState } from 'react'

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer =     "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


  return (
    <div className="list-item" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}
    >
        <img src="https://images.unsplash.com/photo-1694930102174-d6e808bbfadf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        {isHovered && (

        <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpAltOutlined className='icon'/>
            <ThumbDownAltOutlined className='icon'/>
          </div>

          <div className="itemInfoTop">
            <span>1 Hour 14 mins</span>
            <span className='limit'>+16 </span>
            <span>1999</span>
          </div>

          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime est culpa iste magnam eius illo corrupti 
          </div>
          
          <div className="genre">
            Action
          </div>
        </div>
        </>
          )}
        
    </div>
  )
}
