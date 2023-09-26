import React from "react";
import styled from "styled-components";
import { IoArrowRedoSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown, MdOutlineDatasetLinked } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbFriends } from "react-icons/tb";
const HomePage = () => {
  return (
    <HOME>
      <div>
        <div className="right-side">
          <div>
            <div className="heading">
              <div className="heading-1">
                <h1>Getting you</h1>
                <h1>4.9</h1>
              </div>
              <div className="heading-2">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1347228327/photo/portrait-of-positive-young-woman-with-brown-wavy-hair-in-yellow-t-shirt-standing-with-crossed.jpg?s=612x612&w=0&k=20&c=26Lv1_fMzwFBCvTbpcqtNPf9aa38i_1u2RK2NahbGlE="
                    alt="profile-pic"
                  />
                  <div className="online"></div>
                </div>
                <div>
                  <p>12k</p>
                </div>
                <div>
                  <h1>where you</h1>
                </div>
              </div>
              <div className="heading-3">
                <h1>want to study.</h1>
                <IoArrowRedoSharp
                  fontSize={"60px"}
                  color={"rgb(118,180,132)"}
                />
              </div>
            </div>
            <div className="sub-heading">
              <p>
                Everything you need to know for your study abroad journey:from
                first search to your first day on campus.
              </p>
            </div>
          </div>
          <div>
            <div className="circle-container"></div>
            <div className="form-container">
              <div className="form-heading">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwf6_cCjpAGK3jW4Hk-YdQxGGNMreHX0ycrQ&usqp=CAU"
                    alt="courses"
                  />
                  <h1>Courses</h1>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/?size=50&id=104081&format=png"
                    alt="Services"
                  />
                  <h1>Services</h1>
                </div>
              </div>
              <div className="form-area">
                <div className="subject-1">
                  <label>Subject</label>
                  <input type="text" placeholder="What do you want to study" />
                </div>
                <div className="search">
                  <label>Where</label>
                  <div className="search-input">
                    <input
                      type="text"
                      placeholder="Your ideal country / region or institution"
                    />
                    <button>
                      <BiSearch />
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side">
          <div>
            <div className="poster-box">
              <div className="quote-box">
                <div className="quote">
                  <p>Empowering Education Through Innovation</p>
                </div>
                <div className="student-data">
                  <div>
                    <MdOutlineDatasetLinked color="#ffff" fontSize={"18px"} />
                  </div>
                  <div>
                    <p>Total Students</p>
                    <p>159.89</p>
                  </div>
                  <div>
                    <MdKeyboardArrowDown fontSize={"18px"} />
                  </div>
                </div>
              </div>
              <div className="poster-box-1">
                <img
                  src="https://img.freepik.com/free-vector/girl-using-laptop-cartoon_1308-121412.jpg?w=740&t=st=1695731617~exp=1695732217~hmac=d2831f3fc930bea3b4eecc5d76e380c5b0f5419a7216893cb78ab2cf76a26e7f"
                  alt="poster"
                />
              </div>
            </div>
            <div className="data-box">
              <div className="data-1-box">
                <div className="data-1-box-heading">
                  <h1>World Top 10 university</h1>
                </div>
                <div className="data-representation">
                  <div>
                    <img
                      src="https://i.ibb.co/NTBzK1K/Capture1.png"
                      alt="data"
                    />
                  </div>
                </div>
              </div>
              <div className="data-2-box">
                <div className="data-2-heading">
                  <h2>Earning Report</h2>
                </div>
                <div className="data-2-data">
                  <div className="data-2-data-1">
                    <div>
                      <MdOutlineDatasetLinked />
                    </div>
                    <div>
                      <p>Total Students</p>
                      <p>78k</p>
                    </div>
                  </div>
                  <div className="data-2-data-2">
                    <div>
                      <PiStudentFill />
                    </div>
                    <div>
                      <p> BD Topper Students</p>
                      <p>8k</p>
                    </div>
                  </div>
                  <div className="data-2-data-3">
                    <div>
                      <TbFriends />
                    </div>
                    <div>
                      <p>Contributor Bobus</p>
                      <p>706</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HOME>
  );
};

export default HomePage;

const HOME = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 90%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .right-side {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .right-side > div:first-child {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .heading {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .heading-1 {
    width: 100%;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .heading-1 > h1:first-child {
    font-size: 60px;
    font-weight: 700;
    font-family: Verdana, sans-serif;
    color: black;
  }
  .heading-1 > h1:last-child {
    background-color: rgb(213, 16, 59);
    color: #ffff;
    width: 45px;
    height: 45px;
    border-radius: 80%;
    padding: 12px;
    font-size: 12px;
    margin-top: 15px;
    font-weight: 700;
    border: 1px solid #ffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  .heading-2 {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .heading-2 > div:first-child {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: relative;
  }
  .heading-2 > div:first-child > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    z-index: -1;
  }
  .online {
    background-color: rgb(255, 116, 38);
    width: 10px;
    height: 10px;
    border-radius: 80%;
    position: absolute;
    bottom: 5px;
    right: 0;
    border: 1px solid #ffff;
  }
  .heading-2 > div:nth-child(2) {
    width: 50px;
    height: 25px;
    background-color: rgb(255, 116, 38);
    color: #ffff;
    border-radius: 0 0 11rem 11rem;
    transform: rotate(335deg);
    margin-left: 10px;
  }
  .heading-2 > div:nth-child(2) > p {
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    padding: 5px;
  }
  .heading-2 > div:last-child {
    width: 62.5%;
  }
  .heading-2 > div:last-child > h1 {
    font-size: 60px;
    font-weight: 700;
    font-family: Verdana, sans-serif;
    color: black;
  }
  .heading-3 {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .heading-3 > h1 {
    font-size: 60px;
    font-weight: 700;
    font-family: Verdana, sans-serif;
    color: black;
  }
  .sub-heading {
    width: 100%;
    height: 70px;
    margin-top: 20px;
  }
  .sub-heading > p {
    width: 68%;
    font-size: 17px;
    font-weight: 600;
    word-spacing: 3px;
    line-height: 22px;
  }
  .right-side > div:last-child {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .circle-container {
    width: 120px;
    height: 120px;
    border-radius: 80%;
    position: absolute;
    top: 95%;
    left: 12%;
    transform: translate(-50%, -50%);
    background-color: rgb(245, 233, 211);
    z-index: -1;
  }
  .form-container {
    width: 90%;
    height: 100%;
    background-color: #ffff;
    margin-left: 50px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
  }
  .form-heading {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  .form-heading > div:first-child {
    width: 105px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 3px solid blue;
    margin-left: 10px;
  }
  .form-heading > div:last-child {
    width: 105px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .form-heading > div:first-child > img {
    width: 40px;
    height: 35px;
  }
  .form-heading > div:last-child > img {
    width: 35px;
    height: 35px;
  }
  .form-heading div h1 {
    font-size: 18px;
    font-weight: 600;
  }

  .form-area {
    width: 95%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .form-area div {
    width: 100%;
    height: auto;
  }
  .subject-1 {
    width: 100%;
  }
  .subject-1 label {
    position: absolute;
    left: 12.8%;
    top: 77.5%;
    font-size: 15px;
    font-size: 15px;
    transform: translateY(5px);
  }
  .subject-1 input {
    width: 100%;
    height: 60px;
    border: 1px solid gray;
    line-height: 1;
    margin: auto;
    border-radius: 5px;
  }
  .subject-1 input::placeholder {
    text-align: left;
    font-size: 12px;
    padding: 10px;
    transform: translateY(12px);
  }
  .search {
    width: 100%;
  }
  .search label {
    position: absolute;
    left: 12.8%;
    top: 86.5%;
    font-size: 15px;
    font-size: 15px;
    transform: translateY(13px);
  }
  .search-input {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-input input {
    width: 100%;
    height: 60px;
    border: 1px solid gray;
    line-height: 1;
    border-radius: 5px;
  }
  .search-input input::placeholder {
    text-align: left;
    font-size: 12px;
    padding: 10px;
    transform: translateY(10px);
  }
  .search-input button {
    width: 150px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background-color: rgb(175, 137, 148);
    border: none;
    border-radius: 5px;
    color: #ffff;
    position: absolute;
    right: 50%;
    font-weight: 600;
    gap: 10px;
  }
  .left-side {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left-side > div {
    width: 98%;
    height: 97%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 8px;
  }
  .poster-box {
    width: 95%;
    height: 40%;
    background-color: rgb(115, 86, 136);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .quote-box {
    width: 40%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .quote {
    width: 100%;
    height: 70%;
  }
  .quote > p {
    height: auto;
    color: #ffff;
    font-size: 28px;
    font-weight: 700;
  }
  .student-data {
    width: 100%;
    height: 70px;
    border: 1px solid white;
    background-color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .student-data > div:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 6px;
    background-color: rgb(255, 116, 38);
  }
  .student-data > div:nth-child(2) > p:first-child {
    font-size: 14px;
  }
  .student-data > div:nth-child(2) > p:last-child {
    font-size: 22px;
    font-weight: 600;
    color: black;
  }
  .student-data > div:last-child {
    background-color: rgb(246, 246, 250);
    border-radius: 50%;
  }
  .poster-box-1 {
    width: 40%;
    height: 60%;
    border: 1px solid white;
    background-color: #ffff;
    border-radius: 100%;
  }
  .poster-box-1 > img {
    background-color: rgb(115, 86, 136);
    mix-blend-mode: multiply;
  }
  .data-box {
    width: 95%;
    height: 36%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .data-1-box {
    width: 40%;
    height: 90%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .data-1-box-heading {
    width: 95%;
    height: 10%;
  }
  .data-1-box-heading > h1 {
    font-size: 16px;
    font-weight: 600;
    color: black;
    text-align: center;
  }
  .data-representation {
    width: 95%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .data-representation > div {
    width: 90%;
    height: 80%;
  }
  .data-representation > div > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .data-2-box {
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px;
  }
  .data-2-data {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .data-2-data > div {
    height: 33%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .data-2-heading > h2 {
    font-weight: 600;
    font-size: 18px;
  }
  .data-2-data-1 > div:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 6px;
    background-color: rgb(207, 230, 251);
  }
  .data-2-data-1 > div:last-child {
    width: 90%;
    margin-left: 5px;
  }
  .data-2-data-1 > div:last-child > p:first-child {
    font-size: 11px;
    text-align: left;
  }
  .data-2-data-1 > div:last-child > p:last-child {
    font-size: 20px;
    font-weight: 600;
  }
  .data-2-data-2 > div:last-child {
    width: 90%;
    margin-left: 5px;
  }
  .data-2-data-2 > div:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 6px;
    background-color: rgb(207, 230, 251);
  }
  .data-2-data-2 > div:last-child > p:first-child {
    font-size: 11px;
  }
  .data-2-data-2 > div:last-child > p:last-child {
    font-size: 20px;
    font-weight: 600;
  }
  .data-2-data-3 > div:last-child {
    width: 90%;
    margin-left: 5px;
  }
  .data-2-data-3 > div:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 6px;
    background-color: rgb(207, 230, 251);
  }
  .data-2-data-3 > div:last-child > p:first-child {
    font-size: 11px;
  }
  .data-2-data-3 > div:last-child > p:last-child {
    font-size: 20px;
    font-weight: 600;
  }
`;
