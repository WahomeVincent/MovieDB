import React from 'react'
import './featured.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
                    
            </div>
        )}
        <img 
            src='https://images.unsplash.com/photo-1695806067207-045446e7a0fa?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=500'
            alt='feature'
        />
        <div className="info">
            <img 
                src="https://i.pinimg.com/236x/97/10/71/9710718851037406d2ca5e71fa03d964.jpg"
                alt="info" 
            />
        
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, temporibus doloremque qui itaque animi consequatur aliquid deleniti, voluptates repudiandae ut totam recusandae quae eius iste quam consequuntur vitae ullam accusamus!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  );
}
