import React from 'react';
import styled from 'styled-components';
import { getImageAttrs } from '../../../utils/db';

export default function TechStack({ techs = [] }) {
  return (
    <Wrapper>
      {techs.map(({ name, url, image }, i) => {
        return (
          <TechWrapper href={url} key={i + url}>
            <img {...getImageAttrs(image)} alt={name} title={name} />
            <span>{name}</span>
          </TechWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const TechWrapper = styled.a`
  display: flex;
  flex-direction: column;
  margin: 15px;
  max-width: 110px;

  img {
    height: 70px;
    margin: auto;
  }
  span {
    text-align: center;
  }
`;
