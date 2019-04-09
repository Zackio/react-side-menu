import React, { Component } from "react";
import Styled from "styled-components";
import MenuWrapper from "./MenuWrapper";
import MenuCloseIcon from "../icons/menu-close-icon.svg";

const Item = Styled.div`
    padding: 5px 0;
`;

const CloseButton = Styled.div`
position: absolute;
right: 20px;
width: 20px;
cursor: pointer;
img {
    width: 100%;
}
`;

class Menu extends Component {

  render(props) {
    return (
      <MenuWrapper opened={this.props.opened}>
      <CloseButton onClick={this.props.closeMenu}><img src={MenuCloseIcon}/></CloseButton>
        {this.props.items.map(x => (
          <Item key={x}>{x.toUpperCase()}</Item>
        ))}
      </MenuWrapper>
    );
  }
}

export default Menu;
