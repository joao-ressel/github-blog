import styled from "styled-components";
import backgroundCover from "../../assets/background-cover.png";

export const HeaderContainer = styled.header`
  background-image: url(${backgroundCover});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: flex-start;
  padding: 4rem 0 0;
  justify-content: center;

  img {
    height: 98px;
    width: auto;
  }
`;
