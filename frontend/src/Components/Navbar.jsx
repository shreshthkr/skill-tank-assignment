import React, { useState } from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  const [activeLogin, setActiveLogin] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handleLoginClick = () => {
    setActiveLogin("login");
    setLogin(false);
  };
  const handleSignupClick = () => {
    setActiveLogin("signup");
    setLogin(true);
  };
  const toMentorsPage = () => {
    return navigate("/mentor");
  };

  const homePage = () => {
    return navigate("/");
  };
  const token = localStorage.getItem("token");

  const handleSignUp = (e) => {
    e.preventDefault();
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userType: userType,
    };
    fetch("https://zany-red-mussel-boot.cyclic.cloud/users/register", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast({
          title: "Successfull",
          description: "Signup Successful, go to Login page",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Couldn't signup, Something Wrong",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleLogin = () => {
    const payload = {
      email: loginEmail,
      password: loginPassword,
    };
    fetch("https://zany-red-mussel-boot.cyclic.cloud/users/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        toast({
          title: "Login Successfull",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setLoginEmail("");
        setLoginPassword("");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Invalid Credentials",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/");
  };

  return (
    <NAVBAR>
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXK3cE8I364R3exmX4LRXRmMQPTeO95D2kBg&usqp=CAU"
          alt="MR"
          onClick={homePage}
        />
        <h1 onClick={homePage}>MR</h1>
      </div>
      <div className="menu-container">
        <button>Learn</button>
        <button onClick={toMentorsPage}>Mentors</button>
        <button>Compete</button>
        <button>Jobs</button>
      </div>
      <div className="authentication-container">
        {!token ? (
          <>
            <button onClick={onOpen}>
              <CgProfile fontSize={"29px"} color="rgb(115,86,136)" />
            </button>
          </>
        ) : (
          <Popover>
            <PopoverTrigger>
              <Button>
                <CgProfile fontSize={"29px"} color="rgb(115,86,136)" />
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Do you really want to logout?</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button onClose colorScheme="blue" onClick={handleLogout}>
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        )}
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {!login ? <h1>Login</h1> : <h1>Signup</h1>}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                height: "400px",
              }}
            >
              {!login ? (
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "50%",
                        height: "100%",
                        textAlign: "center",
                        backgroundColor:
                          activeLogin === "login" ? "#735688" : "white",
                        color: activeLogin === "login" ? "#fff" : "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={handleLoginClick}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        LOGIN
                      </p>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        height: "100%",
                        textAlign: "center",
                        backgroundColor:
                          activeLogin === "signup" ? "#735688" : "white",
                        color: activeLogin === "signup" ? "#fff" : "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={handleSignupClick}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        SIGNUP
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "85px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter registered email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "rgb(255,116,38)",
                          width: "45%",
                          height: "45px",
                          borderRadius: "5px",
                          color: "#ffff",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Not a member?{" "}
                        <span
                          style={{
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onClick={handleSignupClick}
                        >
                          Signup now
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                //Signup
                <div
                  style={{
                    width: "100%",
                    height: "500px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "50%",
                        height: "100%",
                        textAlign: "center",
                        backgroundColor:
                          activeLogin === "login" ? "#735688" : "white",
                        color: activeLogin === "login" ? "#fff" : "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={handleLoginClick}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        LOGIN
                      </p>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        height: "100%",
                        textAlign: "center",
                        backgroundColor:
                          activeLogin === "signup" ? "#735688" : "white",
                        color: activeLogin === "signup" ? "#fff" : "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={handleSignupClick}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        SIGNUP
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "500px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "85px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: "48%",
                          height: "85px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <label
                          style={{
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          style={{
                            width: "100%",
                            height: "45px",
                            border: "1px solid gray",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          width: "48%",
                          height: "85px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <label
                          style={{
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          style={{
                            width: "100%",
                            height: "45px",
                            border: "1px solid gray",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "85px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        User
                      </label>
                      <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        style={{
                          width: "100%",
                          height: "45px",
                          border: "1px solid gray",
                          borderRadius: "5px",
                        }}
                      >
                        <option value="student">Student</option>
                        <option value="company">Company</option>
                      </select>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "rgb(255,116,38)",
                          width: "45%",
                          height: "45px",
                          borderRadius: "5px",
                          color: "#ffff",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                        onClick={handleSignUp}
                      >
                        Signup
                      </button>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Already a member?{" "}
                        <span
                          style={{
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onClick={handleLoginClick}
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </NAVBAR>
  );
};

export default Navbar;

const NAVBAR = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffff;

  .logo-container {
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .logo-container > img {
    width: 40%;
    height: 80%;
    border-radius: 90%;
    object-fit: fill;
    cursor: pointer;
  }
  .logo-container > img + h1 {
    font-size: 30px;
    font-weight: 800;
    color: rgb(115, 86, 136);
    cursor: pointer;
  }
  .menu-container {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .menu-container button {
    width: 100px;
    height: 50%;
    background-color: #ffff;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    transition: background-color 500ms linear, color 1s linear;
  }
  .menu-container button:hover {
    background-color: rgb(115, 86, 136);
    color: #ffff;
  }
  .authentication-container {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .authentication-container button {
    border: none;
    background-color: #ffff;
    color: black;
    font-weight: 600;
    font-size: 16px;
  }
`;
