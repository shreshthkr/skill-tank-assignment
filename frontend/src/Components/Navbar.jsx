import React, { useState } from 'react'
import styled from "styled-components";
import {CgProfile} from "react-icons/cg";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,Portal
  } from '@chakra-ui/react';
  import {useNavigate} from "react-router-dom";
const Navbar = () => {

    const [state, setState] = useState(false);
    const navigate = useNavigate();
 
   const toMentorsPage = () => {
    return navigate("/mentor")
   }

   const homePage = () => {
    return navigate("/")
   }
  return (
    <NAVBAR>
      <div className='logo-container'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXK3cE8I364R3exmX4LRXRmMQPTeO95D2kBg&usqp=CAU" alt="MR" onClick={homePage} />
         <h1 onClick={homePage}>MR</h1>
      </div>
      <div className='menu-container'>
        <button>Learn</button>
        <button onClick={toMentorsPage}>Mentors</button>
        <button>Compete</button>
        <button>Jobs</button>
      </div>
      <div className='authentication-container'>
        {!state ? (<button><CgProfile fontSize={"29px"} color='rgb(115,86,136)' /></button>) 
        :
         (<Popover>
            <PopoverTrigger>
              <Button><CgProfile fontSize={"29px"} color='rgb(115,86,136)' /></Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Do you really want to logout?</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button colorScheme='blue'>Logout</Button>
                </PopoverBody>
              
              </PopoverContent>
            </Portal>
          </Popover>)
        }
      </div>
    </NAVBAR>
  )
}

export default Navbar;


const NAVBAR = styled.div`
     width: 100%;
     height: 70px;
     display: flex;
     align-items: center;
     justify-content: space-around;
     background-color: #ffff;

   .logo-container{
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
   }
   .logo-container>img{
    width: 40%;
    height: 80%;
    border-radius: 90%;
    object-fit: fill;
    cursor: pointer;
   }
   .logo-container>img+h1{
    font-size: 30px;
    font-weight: 800;
    color: rgb(115,86,136);
    cursor: pointer;
   }
   .menu-container{
      width: 33%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
   }
   .menu-container button{
    width: 100px;
    height: 50%;
    background-color: #ffff;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
      border: none;
      transition: background-color 500ms linear, color 1s linear;
   }
   .menu-container button:hover{
      background-color: rgb(115,86,136);
      color: #ffff;
   }
   .authentication-container{
     width: 10%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;}
   .authentication-container button{
     border: none;
     background-color: #ffff;
     color: black;
     font-weight: 600;
     font-size: 16px;
   }
`