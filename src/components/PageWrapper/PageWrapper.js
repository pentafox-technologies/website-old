import styled, { css } from 'styled-components';
import { sm, md, xs } from 'helpers/device';

const PageWrapper = styled.div`
`;

export const TopSectionWrapper = styled.section`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 20px;
  background: linear-gradient(180deg, #E64545 0%, #C23232 39.46%, #A22121 100%);
  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */

  min-height: 340px;
  height: 60vh;
  max-height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fdfdfd;
    font-weight: 700;
    font-size: 2.75rem;
  }

  p {
    font-size: 1.2rem;
    color: #fdfdfd;
  }

  ${xs} {
    padding-top: 120px;
    padding-bottom: 60px;
    height: min(40vh, 400px);

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

`;

export default PageWrapper;
