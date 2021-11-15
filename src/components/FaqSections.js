import React from "react";
import styled from "styled-components";
import { About } from "../styles";

export const FaqSections = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>test test</p>
          <p>aljdfsahdlsjakdsad</p>
        </div>
        <div className="faqLine"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>test test</p>
          <p>aljdfsahdlsjakdsad</p>
        </div>
        <div className="faqLine"></div>
      </div>
      <div className="question">
        <h4>Diferrent Payment Methodes</h4>
        <div className="answer">
          <p>test test</p>
          <p>aljdfsahdlsjakdsad</p>
        </div>
        <div className="faqLine"></div>
      </div>
      <div className="question">
        <h4>What Products Do You Offer?</h4>
        <div className="answer">
          <p>test test</p>
          <p>aljdfsahdlsjakdsad</p>
        </div>
        <div className="faqLine"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faqLine {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
