import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const LogoApp = styled.img`
  width: 93px;
`;

export const ListItem = styled.li`
  margin-top: 30px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const ItemIcons = styled.svg`
  width: 60px;
  height: 60px;
`;

export const ContainerButtons = styled.div`
  margin-top: 200px;
`;

export const AccountContainer = styled.div`
  margin-top: 145px;
`;
