import React from 'react';
import styled from 'styled-components';

export default function Modal({ children, close }) {
  return children ? (
    <Wrapper id="modal">
      <div className="inner">{children}</div>
      <button className="close" onClick={close}>
        Close
      </button>
    </Wrapper>
  ) : null;
}

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
