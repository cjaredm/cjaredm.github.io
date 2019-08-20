import React from 'react';
import styled from 'styled-components';

export function ContactIcons({ className }) {
  return (
    <ul className={`icons ${className}`}>
      <li>
        <A
          href="https://twitter.com/cjaredm"
          className="icon alt fa-twitter"
          title="Twitter"
        >
          <span className="label">Twitter</span>{' '}
        </A>
      </li>
      <li>
        <A
          href="https://github.com/cjaredm"
          className="icon alt fa-github"
          title="GitHub"
        >
          <span className="label">GitHub</span>{' '}
        </A>
      </li>
      <li>
        <A
          href="https://www.linkedin.com/in/cjaredm/"
          className="icon alt fa-linkedin"
          title="LinkedIn"
        >
          {' '}
          <span className="label">LinkedIn</span>{' '}
        </A>
      </li>

      <li>
        <A
          href="mailto:cjaredm@protonmail.com"
          className="icon alt fa-envelope"
          title="cjaredm@protonmail.com"
        >
          <span className="label">Email</span>{' '}
        </A>
      </li>
    </ul>
  );
}

const A = styled.a`
  box-shadow: 0 0 0 0;
`;