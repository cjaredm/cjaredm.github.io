import React from 'react';
import styled from 'styled-components';

export function Carousel({items, indexSelected = 0}) {
  const [current, setCurrent] = React.useState(indexSelected);
  const next = () => current === items.length -1 ? setCurrent(0) : setCurrent(current + 1);
  const previous = () => current === 0 ? setCurrent(items.length -1) : setCurrent(current - 1);
  const displayBtns = items.length > 1;
  return (
    <Wrapper>
      {displayBtns && <LBtn onClick={previous}>Prev</LBtn>}
      <Container>
      {items[current]}
      </Container>
      {displayBtns && <RBtn onClick={next}>Next</RBtn>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
`;

const Container = styled.div`
  height: inherit;
  display: flex;
  img {
    max-width: 90%;
    max-height: 90%;
    margin: 0 auto;
    align-self: center;
  }
`;

const LBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: white;
`;

const RBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: white;
`;
