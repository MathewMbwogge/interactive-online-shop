import React from "react";
import * as Icon from "react-feather";
import styled from "styled-components";

import { useTotalPrice } from "../PriceContext";

const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubmissionMessage = () => {
  const {totalPrice, showTotalPrice} = useTotalPrice();

  return (
    <>
    {showTotalPrice && 
                <p 
                  style={{
                    fontWeight: "bold", 
                    fontSize: "x-large", 
                    color: "blue", 
                    position: "relative", 
                    right: "-950px"
                  }}
                >Total Price: ${totalPrice}</p>}
    <React.Fragment>
        <MessageWrapper>
          <Icon.CheckCircle color="rgb(8, 8, 63)" style={{ width: 50, height: 50 }} />
          <SuccessMessage className="sucess-message">MESSAGE SENT WITH SECCESS</SuccessMessage>
        </MessageWrapper>
    </React.Fragment>
    </>
  );
};

export default SubmissionMessage;