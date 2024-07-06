import React from "react";
import './SubCard.css';
function SubCard({title,topics,instn,imgs}){
    return(
        <div className="subcard">
            <img src={imgs} alt="daa" width="150px" height="90px"/>
            {/* <p className="subTitle">Design and Analysis Of Algorithms </p> */}
            <p className="subTitle">{title}</p>
            <div className="subDetails">
                {/* <p>13 Topics</p> */}
                <p>{topics}</p>
                {/* <p>10+ instructors</p> */}
                <p>{instn}</p>
            </div>
        </div>
    )
}
export default SubCard