import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/page/Portfolio/Hero';
import TechStack from '../components/page/Portfolio/TechStack';
import { Carousel } from '../components/Carousel';

export default function PortfolioPage({ data }) {
  const { item = {} } = data;
  return (
    <Layout>
      {({ setModal }) => (
        <>
          <SEO title={`cJaredm - ${item.name}`} description={item.excerpt} />

          <Hero
            imgUrl={item?.screenshot?.childImageSharp?.fluid?.src}
            name={item.name}
            content={item.excerpt}
          />

          <div id="main" className="alt">
            <Container id="one">
              <div className="inner">
                <header className="major">
                  <h2>Tech Stack</h2>
                  {/* {codeLink && <a href={codeLink}>See the code!</a>} */}
                </header>
                <TechStack techs={item.techStack} />

                {/* <div>
                  {item.links?.map(link => (
                    <Icon key={link.name} {...link} />
                  ))}
                </div> */}
              </div>
            </Container>

            <Container id="two" color="#87c5a4">
              <div className="inner">
                <header className="major">
                  <h2>What</h2>
                </header>
                <ReactMarkdown source={item.description} />
              </div>
            </Container>

            {Boolean(item?.screenshot) && (
              <Container id="three" color="#8d82c4">
                <div className="inner">
                  <header className="major">
                    <h2>Screenshot</h2>
                  </header>

                  <div className="box alt">
                    <div className="grid-wrapper">
                      <button
                        className="screenshot-btn"
                        onClick={() =>
                          setModal(<Images images={[item.screenshot]} />)
                        }
                      >
                        <img
                          {...getScreenshotAttrs(item.screenshot)}
                          alt="screenshot"
                        />
                      </button>
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

export const pageQuery = graphql`
  query PortfolioItemByRoute($route: String!) {
    item: strapiPortfolioItem(route: { eq: $route }) {
      id
      strapiId
      featured
      name
      excerpt
      description
      techStack {
        name
        url
        image {
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
      screenshot {
        name
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  }
`;

const Container = styled.section`
  background-color: ${({ color }) => color || 'white'};
`;

const Image = styled.img`
  display: flex;
`;

function Images({ images, selected }) {
  return (
    <Carousel
      indexSelected={selected}
      items={images.map((img, i) => (
        <Image
          {...getScreenshotAttrs(img)}
          alt="screenshot"
          key={i + img.url}
        />
      ))}
    />
  );
}

function getScreenshotAttrs(img = {}) {
  const srcSet = img?.childImageSharp?.fluid?.srcSet;
  return {
    src: srcSet ? '' : img?.url,
    srcSet,
  };
}
