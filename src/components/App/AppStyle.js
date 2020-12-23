import styled from 'styled-components';
import planets from '../../assets/images/planets.jpg';

export const MaineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${planets});
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
`;
