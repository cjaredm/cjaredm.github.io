/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Modal = ({children, close}) => children ? (
  <Wrapper id="modal" onClick={close}>
    <div className="inner">
      {children}
    </div>
    <a className="close" onClick={close}>
      Close
    </a>
  </Wrapper>
) : null;

export default Modal;

const Wrapper = styled.div`
  box-shadow: none;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  overflow: hidden;
  padding: 3em 2em;
  position: fixed;
  background-color: white;
  margin: auto;
`;
