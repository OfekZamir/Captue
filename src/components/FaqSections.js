import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import useScroll from "./useScroll";
import { fade } from "../animation";

export const FaqSections = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>test test</p>
            <p>aljdfsahdlsjakdsad</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedul">
          <div className="answer">
            <p>test test</p>
            <p>aljdfsahdlsjakdsad</p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methodes">
          <div className="answer">
            <p>test test</p>
            <p>aljdfsahdlsjakdsad</p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>test test</p>
            <p>aljdfsahdlsjakdsad</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
