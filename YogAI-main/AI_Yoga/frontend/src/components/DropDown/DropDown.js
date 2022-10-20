import React, { useState } from 'react'

import { poseImages } from '../../utils/pose_images'

import './DropDown.css'

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
    const [btnStatus,setBtnStatus] = useState(false)
return (
        <div
        className='dropdown dropdown-container'
         
      >
        <button 
            className="btn btn-secondary" style={{width:"35%"}}
            type='button'
            onClick={()=>{setBtnStatus(!btnStatus)}}
        >{currentPose}
        </button>
        {
            btnStatus === true ? ( <ul class="dropdown-menu dropdown-custom-menu" style={{display:"block",left:"auto"}} aria-labelledby="dropdownMenuButton1">
            {poseList.map((pose) => (
                
                <li onClick={() => setCurrentPose(pose)}>
                    <div class="dropdown-item-container">
                        <p className="dropdown-item-1">{pose}</p>
                        <img 
                            src={poseImages[pose]}
                            className="dropdown-img"
                        />
                        
                    </div>
                </li>
            )) }
            
        </ul>) : (<></>)
        }
       
              
          
      </div>
    )
}
 