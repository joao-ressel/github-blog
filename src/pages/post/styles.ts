import styled from "styled-components";

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme["base-profile"]};
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme["base-title"]};
`;

export const PostLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    font-size: 0.8rem;
    display: flex;
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
    gap: 0.3rem;
    svg {
      width: 18px;
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PostContent = styled.div`
  line-height: 1.6;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  pre {
    background: ${(props) => props.theme["base-post"]};
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    color: #80abd6;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;
