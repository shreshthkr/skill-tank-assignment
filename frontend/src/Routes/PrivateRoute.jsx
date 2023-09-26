import React from 'react';
import {useToast} from "@chakra-ui/react";
import {Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
 const toast = useToast();
const token = localStorage.getItem("token");

if(!token){
    toast({
        title: 'Login First',
        description: "You nedd to login to access this page",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
      return <Navigate to="/" />
}

  return  children;

}

export default PrivateRoute;

/* 
  */