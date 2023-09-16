import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import "./Widgets.css"

function Widgets() {

    const newsArticle=(heading,subtitle) =>{


    <div className='widgets-articles'>
    <div className='widgets-articlesLeft'>
    <FiberManualRecordIcon />
    </div>

    <div className='widgets-articlesRight'>
    <h2>{heading}</h2>
    <p>{subtitle}</p>
    
    </div>
     
    </div>
    };


return(

<div className='widgets'>

<div className='widgets-header'>
<h2>LinkedIn News</h2>
<InfoIcon />

</div>
{newsArticle("Its back", "Top news- 999")}
{newsArticle("Its back", "Top Gun- 755")}
{newsArticle("Its back", "Track it- 999")}
{newsArticle("Its back", "Top news- 999")}

</div>
);
}

export default Widgets
