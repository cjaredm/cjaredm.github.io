import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from './layout';
import Hero from './Hero';
import { TechStack } from './TechStack';
import { Carousel } from './Carousel';

export function PortfolioPage({
  helmetProps,
  heroProps,
  techs,
  what,
  screenshots,
  codeLink,
}) {
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
                  {codeLink && <a href={codeLink}>See the code!</a>}
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

            {screenshots && (
              <Container id="three" color="#8d82c4">
                <div className="inner">
                  <header className="major">
                    <h2>Screenshots</h2>
                  </header>

                  <div className="box alt">
                    <div className="grid-wrapper">
                      {screenshots.map((img, i) => (
                        <div className="col-4" key={img}>
                          <button
                            className="image fit"
                            onClick={() =>
                              setModal(
                                <Images images={screenshots} selected={i} />
                              )
                            }
                          >
                            <img
                              src={img}
                              alt="screen shot"
                              style={{ cursor: 'pointer' }}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Container>
            )}
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

function Images({ images, selected }) {
  return (
    <Carousel
      items={images.map(img => (
        <Image src={img} alt="screen shot" key={img} />
      ))}
      indexSelected={selected}
    />
  );
}
