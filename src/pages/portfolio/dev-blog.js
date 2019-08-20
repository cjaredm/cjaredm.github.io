import React from 'react';
import genericDeskImg from '../../assets/images/simple-desk-computer.jpg';
import { PortfolioPage } from '../../components/PortfolioPage'

const DevBlog = props => (
  <PortfolioPage
    helmetProps={{
      title: 'Dev Blog',
      description: 'Description of building Dev Blog/Portfolio',
    }}
    heroProps={{
      img: genericDeskImg,
      title: 'Dev Blog/Portfolio',
      content: `Hey! You know what this is. It's this. This here. You're 
      looking at it right now.`,
    }}
    codeLink="https://github.com/cjaredm/cjaredm.github.io"
    techs={[
      'gatsbyjs',
      'reactjs',
      'apollo',
      'graphql',
      'netlify',
      'github',
      'styledComponents',
    ]}
    what={
      <>
        <p>
          I heard how GatsbyJS was <i>crazy fast</i> and amazing so I had to
          give it a try. It was <strong>CRAZY FAST</strong>. I started to
          throw some blog posts up here and there as a few friends and people
          I mentor asked me questions.
        </p>
        <p>
          At some point we started hiring at work where I saw a lot of
          resume's and dev portfolio websites. I realized: <br />
          <i>> Dang! I need to make something better than these.</i>
        </p>
        <p>Look around my site:</p>
        <div>
          <a href="/blog">Blog</a>

        </div>
      </>
    }
  />
);

export default DevBlog;
