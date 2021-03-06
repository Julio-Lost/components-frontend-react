import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const LaptopIcon = styled.img`
  width: 16rem;
  height: 16rem;
  color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
`;

export const Title = styled.h1`
  color: #fff;
  margin-left: 2rem;
  font-size: 3rem;
`;

export const Description = styled.h2`
  color: #fff;
  font-weight: 400;
  margin-top: 9rem;
  margin-bottom: 9rem;
  font-size: 3rem;
`;

export const Banner = styled.img`
  width: min(120rem, 100%);
`;
