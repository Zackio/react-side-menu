import React, { Component } from "react";
import Menu from "./components/menu";
import Styled from "styled-components";
import burger from "./icons/menu-open-icon.svg";

const MenuItems = ["home", "about", "contact"];

const MenuBtn = Styled.div`
font-size: 40px;
font-weight: bolder;
position: absolute;
left: 20px;
top: 10px;
cursor: pointer;
`;

class App extends Component {
  state = {
    opened: false
  };

  constructor(props) {
    super(props);
  }

  toggleMenu() {
    this.setState(prevState => ({ opened: !prevState.opened }));
  }

  closeMenu() {
    console.log("close Menu");
    this.setState({ opened: false });
  }

  render() {
    return (
      <div className="App">
        <MenuBtn onClick={this.toggleMenu.bind(this)}>
          <img src={burger} />
        </MenuBtn>
        <Menu
          closeMenu={this.closeMenu.bind(this)}
          items={MenuItems}
          test={this.state.test}
          opened={this.state.opened}
        />
      </div>
    );
  }
}

export default App;
