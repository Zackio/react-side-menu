import React, { Component } from "react";
import Menu from "./components/menu";
import Styled from "styled-components";
import burger from "./icons/menu-open-icon.svg";

const MenuItems = ["home", "about", "contact"];

const CloseButton = Styled.div`
font-size: 40px;
font-weight: bolder;
position: absolute;
right: 20px;
top: 0;
`;

class App extends Component {
  state = {
    opened: false
  };

  constructor(props) {
    super(props);
  }

  toggleMenuClick() {
    this.setState(prevState => ({ opened: !prevState.opened }));
  }

  render() {
    return (
      <div className="App">
        <CloseButton onClick={this.toggleMenuClick.bind(this)}>
          <img src={burger} />
        </CloseButton>
        <Menu
          items={MenuItems}
          test={this.state.test}
          opened={this.state.opened}
        />
      </div>
    );
  }
}

export default App;
