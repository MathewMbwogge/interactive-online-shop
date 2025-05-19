import React from "react";
import styled from "styled-components";
import ContactDetails from "./ContactDetails";
import InputForm from "./InputForm";

import { useTotalPrice } from "../PriceContext";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 70%;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  height: 80vh;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;

const ContactUs = () => {
  const {totalPrice, showTotalPrice} = useTotalPrice();
  
  return (
    <>
    {showTotalPrice && 
    <p style={{
        fontWeight: "bold", 
        fontSize: "x-large", 
        color: "blue", 
        position: "relative", 
        right: "-466px"
      }}
    >Total Price: £{totalPrice}</p>}
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact Us</TextOne>
        <TextTwo>
            Your comfort and happiness matters to us. We take all client queries seriously. 
            Just write us a message and we take care of the rest
        </TextTwo>
      </PageHeadingWrapper>
      <FormContainer style={{display: "flex"}}>
        <ContactDetails />
        <InputForm />
      </FormContainer>
    </PageWrapper>
    </>
  );
};

export default ContactUs;