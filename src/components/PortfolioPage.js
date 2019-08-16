import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from './layout';
import Hero from './Hero';
import { TechStack } from './TechStack';
import Modal from './Modal';

export function PortfolioPage({
  helmetProps,
  heroProps,
  techs,
  what,
  screenshots,
}) {
  const [image, setModalImage] = React.useState(null);
  return (
    <Layout>
      {({ setModal }) => (
        <>
          <Helmet>
            <title>cJaredm - {helmetProps.title}</title>
            <meta name="description" content={helmetProps.description} />
          </Helmet>

          <Hero {...heroProps} height="450px" />

          <div id="main" className="alt">
            <Container id="one">
              <div className="inner">
                <header className="major">
                  <h2>Tech Stack</h2>
                </header>
                <TechStack techs={techs} />
              </div>
            </Container>

            <Container id="two" color="#6fc3df">
              <div className="inner">
                <header className="major">
                  <h2>What</h2>
                </header>
                {what}
              </div>
            </Container>

            <Container id="three" color="#8d82c4">
              <div className="inner">
                <header className="major">
                  <h2>Screenshots</h2>
                </header>

                <div className="box alt">
                  <div className="grid-wrapper">
                    {screenshots.map(img => (
                      <div className="col-4">
                        <span className="image fit">
                          <img src={img} alt="screen shot" onClick={() => setModal(<Image src={img} alt="screen shot" />)} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </>
      )}
    </Layout>
  );
}

const Container = styled.section`
  background-color: ${({ color }) => color || 'white'};
`;

const Image = styled.img`
  display: flex;
`;
