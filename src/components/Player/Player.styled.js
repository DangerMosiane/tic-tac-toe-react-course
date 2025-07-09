import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;

  ${(props) => props.theme.size.media.mobile} {
    flex-direction: row;
    margin: 4rem;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    height: 10rem;
    width: 10rem;
    filter: ${(props) => (props.isPlayerActive ? "" : "grayscale(90%)")};

    ${(props) => props.theme.size.media.mobile} {
    height: 8rem;
    width: 8rem;
    }
  }
`;
