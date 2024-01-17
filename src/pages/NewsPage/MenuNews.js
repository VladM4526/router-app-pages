import { NavLink } from "react-router-dom";
import Logo from "../../img/Logo-app-edited.png";
import SetIcons from "../../img/set-icons.svg";
import {
  AccountContainer,
  ContainerButtons,
  ContainerMenu,
  ItemIcons,
  ListItem,
  LogoApp,
} from "../Menu.styled";
import "../active-button.css";

export const MenuNews = () => {
  return (
    <ContainerMenu>
      <NavLink to="/">
        <LogoApp src={Logo} alt="LogoApp" />
      </NavLink>
      <ContainerButtons>
        <ul>
          <ListItem>
            <NavLink to="/">
              <ItemIcons className="not-active">
                <use href={`${SetIcons}#icon-home`}></use>
              </ItemIcons>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/ProductsPage">
              <ItemIcons className="not-active">
                <use href={`${SetIcons}#icon-shopping-bag`}></use>
              </ItemIcons>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/NewsPage">
              <ItemIcons className="active">
                <use href={`${SetIcons}#icon-news`}></use>
              </ItemIcons>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/ReviewsPage">
              <ItemIcons className="not-active">
                <use href={`${SetIcons}#icon-reviews`}></use>
              </ItemIcons>
            </NavLink>
          </ListItem>
        </ul>
      </ContainerButtons>

      <AccountContainer>
        <ItemIcons>
          <use href={`${SetIcons}#icon-account`}></use>
        </ItemIcons>
      </AccountContainer>
    </ContainerMenu>
  );
};
