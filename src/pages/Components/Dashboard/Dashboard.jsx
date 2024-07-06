import React from "react";
import Header from "../../Header";
import './Dashboard.css';
import SubCard from "../../SubCard";
import subs from "../../subsCore";
import subsElec from "../../subsElec";
import { useNavigate } from "react-router-dom";
function Dashboard(){
    const navigate=useNavigate();
    const handleCore=()=>{
        navigate('/course');
    }
    return (
        <div>
            <Header />
            <p className="subHead">Core Subjects</p>
            <div className="subCore" onClick={handleCore}>
            {subs.map((sub)=>{
                return <SubCard 
                key={sub.id}
                title={sub.title}
                topics={sub.topics}
                instn={sub.instn}
                imgs={sub.img}           
            />
            })}
            </div>
            <p className="subHead">Electives Subjects</p>
            <div className="subCore subElec">
            {subsElec.map((sub)=>{
                return <SubCard 
                key={sub.id}
                title={sub.title}
                topics={sub.topics}
                instn={sub.instn}
                imgs={sub.img}           
            />
            })}
            </div>
        </div>
    )
}
export default Dashboard;