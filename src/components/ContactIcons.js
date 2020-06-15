import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

export function ContactIcons({ className }) {
  const { socials } = useStaticQuery(graphql`
    query SOCIALS {
      socials: allStrapiSocial {
        nodes {
          name
          fontAwesomeName
          url
        }
      }
    }
  `);

  return socials?.nodes?.length ? (
    <ul className={`icons ${className || ''}`}>
      {socials?.nodes?.map(icon => (
        <li key={icon.url}>
          <A
            href={icon.url}
            className={`icon alt ${icon.fontAwesomeName}`}
            title={icon.name}
          >
            <span className="label">{icon.name}</span>
          </A>
        </li>
      ))}
    </ul>
  ) : null;
}

const A = styled.a`
  box-shadow: 0 0 0 0;
`;
