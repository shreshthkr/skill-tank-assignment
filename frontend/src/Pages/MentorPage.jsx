import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MentorCard from "../Components/MentorCard";
import axios from "axios";
import { Spinner } from '@chakra-ui/react'
export const MentorPage = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://zany-red-mussel-boot.cyclic.cloud/mentors`)
      .then((res) => {
        
        setData(res.data.allMentors);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <DIV>
      <div>
        {isLoading && <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/> }
        {data && data.map((el) => <MentorCard key={el.id} mentor={el} />)}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 30px;

  > div {
    width: 80%;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
`;
