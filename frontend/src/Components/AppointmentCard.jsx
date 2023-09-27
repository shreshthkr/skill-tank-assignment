import React from 'react';
import styled from 'styled-components';
import {TiDelete} from "react-icons/ti";
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
 const AppointmentCard = ({mentor}) => {

  const token = localStorage.getItem("token");
  const toast = useToast();
const handleApoointDelete = () => {
   axios.delete(`https://zany-red-mussel-boot.cyclic.cloud/appointment/appointment/${mentor._id}`,{
    headers:{"Authorization": token}
   })
   .then((res)=>{
    toast({
      title: 'Appointment Deleted',
      description: "Appointment deleted successfully",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    window.location.reload();
   })
   .catch((err)=>{
    console.log(err);
   })
}





  return (
    <APPOINT>
       <div className='appoint-details'>
          <div className='appoint-image'>
            <img src={mentor.image} alt={mentor.name} />
          </div>
          <div className='appoint-name'>
            <p>{mentor.name}</p>
          </div>
          <div className='appoint-date'>
            <p>{mentor.date}</p>
          </div>
          <div className='apooint-time'>
            <p>Time: {mentor.time}</p>
          </div>
          <div className='appoint-delete'>
            <TiDelete fontSize={"30px"} color='red' cursor={"pointer"} onClick={handleApoointDelete} />
          </div>
       </div>
    </APPOINT>
  )
}

export default AppointmentCard;

const APPOINT = styled.div`
   width: 80%;
   height: auto;
   margin: auto;
   margin-top: 20px;
   box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
   border-radius: 5px;

   .appoint-details{
     width: 100%;
     height: 100px;
     display: flex;
     align-items: center;
     justify-content: space-around;
   }

   .appoint-image{
    width: 8%;
    height: 90%;
   }
   .appoint-image>img{
    width: 100%;
    height:100%;
    border-radius: 50%;
    object-fit: cover;
   }
   .appoint-name{
    width:auto;
    height: 90%;
    display: flex;
     align-items: center;
   }
   .appoint-name>p{
    font-weight:600;
    color: black;
    font-size: 16px;
   }
   .appoint-date{
    width:10%;
    height: 90%;
    display: flex;
     align-items: center;
   }
   .appoint-date>p{
    font-weight:600;
    color: black;
    font-size: 16px;
   }
   .apooint-time{
    width:10%;
    height: 90%;
    display: flex;
     align-items: center;
   }
   .apooint-time>p{
    font-weight:600;
    color: black;
    font-size: 16px;
   }
   .appoint-delete{
    width:10%;
    height: 90%;
    display: flex;
     align-items: center;
   }

`