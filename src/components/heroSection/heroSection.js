import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { HeroSectionWrapper } from './heroSection.css';
import BackgroundImage from 'gatsby-background-image'
import scrollTo from 'gatsby-plugin-smoothscroll';

const FigureWrapper = ({ children, id, ...props}) => {
  return (
    <BackgroundImage
      Tag="figure"
      fluid={props.image}
      onClick={() => scrollTo(`#content-section-${id}`)}
    >
      {children}
    </BackgroundImage>
  )
}

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      homeJson {
        title
        landingTitle
        landingDescription {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        landingImage {
          childImageSharp {
            fluid(
              maxHeight: 800,
              quality: 90,
              traceSVG: {
                color: "#292733"
                turnPolicy: TURNPOLICY_MINORITY
              }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bannerSection {
          title
          content
          image {
            childImageSharp {
              fluid(
                maxHeight: 500,
                quality: 90,
                traceSVG: {
                  color: "#292733"
                  turnPolicy: TURNPOLICY_MAJORITY
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  return (
    <HeroSectionWrapper>
      <div className="left-col">
        <BackgroundImage
          Tag="figure"
          fluid={data.homeJson.landingImage.childImageSharp.fluid}
        >
          <figcaption>
            <h2>{data.homeJson.landingTitle}</h2>
            <p>{data.homeJson.landingDescription.childMarkdownRemark.rawMarkdownBody}</p>
            <span className="know-more" onClick={() => scrollTo(`#content-section-0`)}>Know more</span>
          </figcaption>
        </BackgroundImage>
      </div>
      <div className="right-col">
        {
          data.homeJson.bannerSection.map((item, i) => {
            return (
              <FigureWrapper key={i} id={i} image={item.image.childImageSharp.fluid}>
                <figcaption>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </figcaption>
              </FigureWrapper>
            )
          })
        }
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;