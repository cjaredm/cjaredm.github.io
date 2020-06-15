import React from 'react';
import styled from 'styled-components';

export default function Icon({ url, iconName, name }) {
  return (
    <A href={url}>
      <span className={`icon alt ${iconName}`}>{name}</span>
      <span className="">{name}</span>
    </A>
  );
}

const A = styled.a`
  box-shadow: 0 0 0 0;
`;
