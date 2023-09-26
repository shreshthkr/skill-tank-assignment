import React from 'react'
import styled from 'styled-components';
import {IoArrowRedoSharp} from "react-icons/io5";
const HomePage = () => {
  return (
    <HOME>
      <div>
        <div className='right-side'>
            <div>
                <div className='heading'>
                   <div className='heading-1'>
                    <h1>Getting you</h1>
                    <h1>4.9</h1>
                   </div>
                   <div className='heading-2'>
                    <div>
                        <img src="https://media.istockphoto.com/id/1347228327/photo/portrait-of-positive-young-woman-with-brown-wavy-hair-in-yellow-t-shirt-standing-with-crossed.jpg?s=612x612&w=0&k=20&c=26Lv1_fMzwFBCvTbpcqtNPf9aa38i_1u2RK2NahbGlE=" alt="profile-pic" />
                        <div className='online'></div>
                    </div>
                    <div>
                        <p>12k</p>
                    </div>
                    <div>
                    <h1>where you</h1>
                    </div>
                   </div>
                   <div className='heading-3'>
                    <h1>want to study.</h1>
                    <IoArrowRedoSharp fontSize={"60px"}
                    color={'rgb(118,180,132)'}
                    />
                   </div>
                </div>
                <div className='sub-heading'>
                    <p>Everything you need to know for your study abroad journey:from first search to your first day on campus.</p>
                </div>
            </div>
            <div>
                <div className='circle-container'></div>
                <div className='form-container'>
                      <div className='form-heading'>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwf6_cCjpAGK3jW4Hk-YdQxGGNMreHX0ycrQ&usqp=CAU" alt="courses" />
                           <h1>Courses</h1> 
                        </div>
                        <div>
                            <img src="https://img.icons8.com/?size=50&id=104081&format=png" alt="Services" />
                            <h1>Services</h1>
                        </div>
                      </div>
                      <div className='form-area'></div>
                </div>
            </div>
        </div>
        <div className='left-side'></div>
      </div>
    </HOME>
  )
}

export default HomePage;


const HOME = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    >div{
        width: 90%;
        height: 800px;
        display: flex;
        align-items:center;
        justify-content: space-around;
    }
  .right-side{
     width: 50%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
  }
  .right-side>div:first-child{
     width: 100%;
     height: 60%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
    
  }
 
.heading{
    width: 100%;
    height: auto;
    display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
}
.heading-1{
    width: 100%;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
}
.heading-1>h1:first-child{
    font-size: 60px;
    font-weight: 700;
   font-family:Verdana, sans-serif;
   color: black;
}
.heading-1>h1:last-child{
  background-color: rgb(213,16,59);
  color: #ffff;
  width: 45px;
  height: 45px;
  border-radius: 80%;
  padding: 12px;
  font-size: 12px;
  margin-top: 15px;
  font-weight: 700;
  border: 1px solid #ffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.heading-2{
    width: 100%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
   
}
.heading-2>div:first-child{
   width: 55px;
   height: 55px;
   border-radius: 50%;
   position: relative;
  
}
.heading-2>div:first-child>img{
   width: 100%;
   height: 100%;
   border-radius: 50%;
   object-fit: cover;
   z-index: -1;
   
}
.online{
    background-color:rgb(255,116,38) ;
    width: 10px;
    height: 10px;
    border-radius: 80%;
    position: absolute;
    bottom: 5px;
    right: 0;
    border: 1px solid #ffff;
}
.heading-2>div:nth-child(2){
    width: 50px;
    height: 25px;
    background-color: rgb(255,116,38);
    color: #ffff;
    border-radius: 0 0 11rem 11rem;
    transform: rotate(335deg);
    margin-left:10px;
}
.heading-2>div:nth-child(2)>p{
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    padding: 5px;
}
.heading-2>div:last-child{
  width: 62.5%;
}
.heading-2>div:last-child>h1{
    font-size: 60px;
    font-weight: 700;
   font-family:Verdana, sans-serif;
   color: black;
}
.heading-3{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
}
.heading-3>h1{
    font-size: 60px;
    font-weight: 700;
   font-family:Verdana, sans-serif;
   color: black;
}
.sub-heading{
    width: 100%;
    height: 70px;
    margin-top: 20px;
}
.sub-heading>p{
    width: 68%;
    font-size: 17px;
    font-weight: 600;
    word-spacing: 3px;
    line-height: 22px;
}
.right-side>div:last-child{
    width: 100%;
     height: 30%;
     display: flex;
     align-items: center;
     justify-content: space-between;
}
.circle-container{
    width: 120px;
    height: 120px;
    border-radius: 80%;
    position: absolute;
    top:95%;
    left:12%;
  transform: translate(-50%, -50%);
  background-color:rgb(245,233,211);
  z-index: -1;
}
.form-container{
    width: 90%;
    height: 100%;
    background-color: #ffff;
    margin-left: 50px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
}
.form-heading{
   width :100% ;
   height: 60px;
   border: 1px solid red;
   display: flex;
   align-items: center;
   justify-content: flex-start;
}
.form-heading div{
    display: flex;
   align-items: center;
   justify-content: flex-start;
}
.form-area{
    width :100% ;
   height: 70%;
   border: 1px solid red;
}
  .left-side{
    width: 40%;
     border: 1px solid teal;
     height: 100%;
  }
`