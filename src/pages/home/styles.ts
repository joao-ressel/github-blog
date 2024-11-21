import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  padding: 2rem 2.5rem;

  border-radius: 10px;
  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${(props) => props.theme["blue"]};
      text-decoration: none;
    }

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-title"]};
    }

    p {
      display: flex;
      gap: 0.3rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const InputSearch = styled.input`
  margin-top: 12px;
  padding: 12px 16px;
  color: ${(props) => props.theme["base-label"]};
  background-color: ${(props) => props.theme["base-input"]};
  border: solid 1px ${(props) => props.theme["base-label"]};
  border-radius: 6px;

  &&::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const PostsList = styled.ul`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
    :hover {
      border: 1px ${(props) => props.theme["base-label"]};
    }
  }

  li {
    list-style: none;
    background-color: ${(props) => props.theme["base-post"]};
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 260px;

    div {
      display: flex;
      justify-content: space-between;

      h4 {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-title"]};
        text-decoration: none;
        width: 284px;
      }

      p {
        font-size: 0.8rem;
      }
    }

    p {
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const Publications = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
