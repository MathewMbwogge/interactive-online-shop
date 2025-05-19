
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InputSideWrapper = styled.form`
  height: auto;
  padding-bottom: 100px;
  position: relative;
  padding: 10px 10px 100px 10px;
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 8px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid rgb(100, 21, 173);
  border-right: 1px solid rgb(100, 21, 173);
  border-top: 1px solid rgb(100, 21, 173);
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid rgb(100, 21, 173);
  border-right: 1px solid rgb(100, 21, 173);
  border-top: 1px solid rgb(100, 21, 173);
  outline: 0px transparent !important;
`;

const SubMitButton = styled.input`
  position: absolute;
  bottom: 0px;
  right: 150px;
  padding: 10px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px 12px 24px;
  cursor: pointer;
`;

const InputForm = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mrbpkazv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      setButtonLoading(false);
      navigate("/success");
    } else {
      setButtonLoading(false);
      alert("Failed to submit form");
    }
  };

  return (
    <InputSideWrapper style={{width: "500px"}} onSubmit={handleSubmit}>
      <InputWrapper>
        <p>Name</p>
        <Input 
          type="text"
          value={name} 
          placeholder="username"
          onChange={nameHandler} 
        />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input 
          type="email"
          value={email} 
          placeholder="username@gmail.com"
          onChange={emailHandler}
        />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input 
          type="number"
          value={phone} 
          placeholder="+Code-number" 
          onChange={phoneHandler}
        />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput 
          type="text"
          value={message}
          placeholder="Write your message"
          onChange={messageHandler} 
        />
      </InputWrapper>
      {buttonLoading && <p style={{ color: "red" }}>{buttonLoading}</p>}
      <SubMitButton type="submit" value="Send Message" />
    </InputSideWrapper>
  );
};

export default InputForm;

