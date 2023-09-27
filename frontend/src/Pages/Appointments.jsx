import React, { useEffect, useState } from 'react'
import AppointmentCard from '../Components/AppointmentCard';
import axios from "axios";
import { Spinner } from '@chakra-ui/react'
import styled from 'styled-components';
const Appointments = () => {

  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const token = localStorage.getItem("token");

useEffect(()=>{
  setIsLoading(true);
   axios.get('https://zany-red-mussel-boot.cyclic.cloud/appointment/appointment',{
    headers:{"Authorization": token}
   })
   .then((res)=>{
     
     setData(res.data)
     setIsLoading(false);
   })
   .catch((err)=>{
    console.log(err)
    setIsLoading(false);
   })
},[]);
console.log(data)


  return (
    <DIV>
      {isLoading && <Spinner
thickness='4px'
speed='0.65s'
emptyColor='gray.200'
color='blue.500'
size='xl'
/>}
     {data.length === 0 ?( <h1 className='noAppoint'>No Scheduled Appointments...</h1>) : (data.map((el)=> (
      <AppointmentCard key={el._id} mentor={el} />
     )) )}
    </DIV>
  )
}

export default Appointments;


const DIV = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .noAppoint{
    font-size: 24px;
    font-weight: 700;
    margin-top: 60px;
  }
`