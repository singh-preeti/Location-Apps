import React from 'react';
import  north from './Image/north.jpg';
import south  from './Image/south.jpg';
const HemisphereDisplay = ({latitude}) => {
    const hemi = latitude > 0 ? 'Northeren Hemisphere' : 'Southeren Hemisphere';
    const pic = latitude> 0 ? north : south;
    return(
        <div>
            <img src={pic} alt=""></img>
            {hemi}
        </div>
    )
}
export default HemisphereDisplay;