import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const ContactDetailsWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const BigCircle = styled.div`
  height: 50px;
  margin-top: 30px;
  width: 50px;
  background-color: rgb(100, 21, 173);
  border-radius: 100%;
  z-index: 22;
  margin-left: 10px;
`;

const SmallCircle = styled.div`
  position: absolute;
  margin-left: 10px;
  background-color: rgb(252, 113, 137);
  border-radius: 100%;
  height: 30px;
  width: 30px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;

  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  height: 10px;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(252, 113, 137);
  }
`;

const ContactDetails = () => {
  return (
    <ContactDetailsWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
        <TextTwo>Fill up the form and our team will get back to you within 24 hours</TextTwo>
      </TextWrapper>
      <div>
        <ContactsWrapper href="tel:+447405900707">
          <Icon.Phone size={15} color="rgb(252, 113, 137)" />
          <ContactText>+447405900707</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="mailto:m.mbwoge@gmail.com">
          <Icon.Mail size={15} color="rgb(252, 113, 137)" />
          <ContactText>m.mbwoge@gmail.com</ContactText>
        </ContactsWrapper>
      </div>

      <div>
        <BigCircle></BigCircle>
        <SmallCircle></SmallCircle>
      </div>

      <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/profile.php?id=61567241009795">
          <Icon.Facebook color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://x.com/home">
          <Icon.Twitter color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="www.linkedin.com/in/matmbwogge">
          <Icon.Linkedin color="#fff" size={20} />
        </SocialIconWrapper>
      </SocialsWrapper>
    </ContactDetailsWrapper>
  );
};

export default ContactDetails;
