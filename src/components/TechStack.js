import React from 'react';
import styled from 'styled-components';
import reactjs from '../assets/images/reactjs.svg';
import gatsby from '../assets/images/gatsby.png';
import prisma from '../assets/images/prisma.png';
import graphql from '../assets/images/graphql.svg';
import github from '../assets/images/github.png';
import netlify from '../assets/images/netlify.svg';

const TECH_NAME = {
  reactjs: 'reactjs',
  reactnative: 'reactnative',
  nextjs: 'nextjs',
  gatsbyjs: 'gatsbyjs',
  prisma: 'prisma',
  graphql: 'graphql',
  heroku: 'heroku',
  github: 'github',
  netlify: 'netlify',
  apollo: 'apollo',
  node: 'node',
  styledComponents: 'styledComponents',
};

const TECHS = {
  [TECH_NAME.reactjs]: {
    img: reactjs,
    label: 'React',
    href: 'https://reactjs.org/',
  },
  [TECH_NAME.reactnative]: {
    img: 'https://omaharentalads.com/images250_/svg-react-5.png',
    label: 'React Native',
    href: 'https://facebook.github.io/react-native/',
  },
  [TECH_NAME.nextjs]: {
    img:
      'https://cloud.githubusercontent.com/assets/50838/24116055/7076ba9c-0dcb-11e7-93d0-ba8f9ac8f6e4.png',
    label: 'NextJS',
    href: 'https://nextjs.org/',
  },
  [TECH_NAME.gatsbyjs]: {
    img: gatsby,
    label: 'Gatsby',
    href: 'https://www.gatsbyjs.org/',
  },
  [TECH_NAME.prisma]: {
    img: prisma,
    label: 'Prisma',
    href: 'https://prisma.io/',
  },
  [TECH_NAME.graphql]: {
    img: graphql,
    label: 'GraphQL',
    href: 'https://graphql.org/',
  },
  [TECH_NAME.heroku]: {
    img: 'https://brand.heroku.com/static/media/heroku-logo-solid.ab0c1b46.svg',
    label: 'Heroku',
    href: 'https://netlify.com/',
  },
  [TECH_NAME.github]: {
    img: github,
    label: 'Github',
    href: 'https://github.com/',
  },
  [TECH_NAME.netlify]: {
    img: netlify,
    label: 'Netlify',
    href: 'https://netlify.com/',
  },
  [TECH_NAME.apollo]: {
    img:
      'https://github.com/apollographql/community/blob/master/source/logo/favicon.png?raw=true',
    label: 'Apollo',
    href: 'https://www.apollographql.com/',
  },
  [TECH_NAME.node]: {
    img: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
    label: 'Node',
    href: 'https://nodejs.org/',
  },
  [TECH_NAME.styledComponents]: {
    img:
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/nail-polish_1f485.png',
    label: 'Styled-Components',
    href: 'https://www.styled-components.com/',
  },
};

export function TechStack({ techs }) {
  return (
    <Wrapper>
      {techs.map(tech => {
        if (!TECHS[tech]) return null;
        const { img, label, href } = TECHS[tech];
        return (
          <TechWrapper href={href} key={label}>
            <img src={img} alt={label} title={label} />
            <span>{label}</span>
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
  img {
    height: 70px;
    margin: auto;
  }
  span {
    text-align: center;
  }
`;
