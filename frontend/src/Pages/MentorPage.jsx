import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import MentorCard from '../Components/MentorCard';
import axios from "axios";
export const MentorPage = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://zany-red-mussel-boot.cyclic.cloud/mentors`)
    .then((res)=> {
      setData(res.data.allMentors)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])




  return (
    <DIV>
      <div>
      {data && data.map((el)=>(
         <MentorCard key={el.id} mentor={el} /> 

      ))}
      </div>
    </DIV>
  )
};


const DIV = styled.div`
     width: 100%;
     height: auto;
     margin: auto;
     margin-top: 30px;

     >div{
      width:80%;
     height: auto;
     margin: auto;
     display: flex;
     align-items: flex-start;
     justify-content: flex-start;
     gap: 15px;
     flex-wrap: wrap;
     }
`