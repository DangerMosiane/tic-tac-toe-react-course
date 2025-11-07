import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 4rem;
  border: none;
  width: 10rem;
  height: 10rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  cursor: pointer;
  padding: 1.2rem;

  .icons {
    fill: ${(props) => props.theme.colors.primary};
  }
  ${(props) => props.theme.size.media.mobile} {
    width: 6rem;
    height: 6rem;
    .icons {
      fill: ${(props) => props.theme.colors.primary};
      height: 4rem;
      width: 4rem;
      padding-right: 5px
    }
  }
`;
