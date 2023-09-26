import React, { useState } from "react";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
const MentorCard = ({ mentor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [appointDate, setAppointDate] = useState("");
  const [appointTime, setAppointTime] = useState("");
  const toast = useToast();
  const token = localStorage.getItem("token");
  const handleAppointment = (e) => {
    e.preventDefault();
    const payload = {
      name: mentor.name,
      designation: mentor.designation,
      image: mentor.image,
      date: appointDate,
      time: appointTime,
    };
    fetch("https://zany-red-mussel-boot.cyclic.cloud/appointment/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        console.log(res);
        toast({
          title: "Appointment Scheduled",
          description: "Your appointment has been scheduled",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error 404",
          description: "Your appointment has not been scheduled",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <CARD>
      <div>
        <div className="mentor-image">
          <img src={mentor.image} alt={mentor.name} />
        </div>
        <div className="mentor-details">
          <p>{mentor.name}</p>
          <p>{mentor.designation}</p>
        </div>
        <div className="appoint">
          <button onClick={onOpen}>Book an Appointment</button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Book an Appointment with {mentor.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div>
                  <div>
                    <label>Select Date</label>
                    <Input
                      type="date"
                      value={appointDate}
                      onChange={(e) => {
                        setAppointDate(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Select Time</label>
                    <Input
                      type="time"
                      value={appointTime}
                      onChange={(e) => {
                        setAppointTime(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <Button
                  mt={"10px"}
                  bgColor={"rgb(255,116,38)"}
                  color={"#ffff"}
                  onClick={handleAppointment}
                >
                  Book
                </Button>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </CARD>
  );
};

export default MentorCard;

const CARD = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 5px;

  > div {
    width: 95%;
    height: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mentor-image {
    width: 100%;
    height: 70%;
  }
  .mentor-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .mentor-details {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mentor-details > p:first-child {
    font-weight: 600;
    font-size: 16px;
  }
  .mentor-details > p:last-child {
    font-weight: 500;
    font-size: 15px;
    color: gray;
  }
  .appoint {
    width: 100%;
    height: 30px;
  }
  .appoint > button {
    width: 100%;
    height: 100%;
    color: #ffff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background-color: rgb(255, 116, 38);
  }
`;
