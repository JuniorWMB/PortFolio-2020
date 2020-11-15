import React, { useState, useEffect } from "react";
import "./header.css";
//j'importe mes dependences
import { Link, withRouter } from "react-router-dom";
import Menu from "../Pages/Menu";

function Header({ history }) {
  //State for Menu button

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    nameMenu: "Menu",
  });

  //State for disabled button
  const [disabled, setDisabled] = useState(false);

  //Use effect for page changes

  useEffect(() => {
    //listen for page changes
    history.listen(() => {
      setState({ clicked: false, nameMenu: "Menu" });
    });
  });

  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        nameMenu: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        nameMenu: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        nameMenu: "Close",
      });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // console.log(state.nameMenu);

  return (
    <div>
      
      <header className="header">
        <div>
        <Link className="header__portfolio" to="/">
          Portfolio.
        </Link>
        </div>
        <div>

        <button
          disabled={disabled}
          onClick={handleMenu}
          className="header__menu"
        >
          {state.nameMenu}
        </button>
        </div>
      </header>
      <Menu state={state} />
    </div>
  );
}

export default withRouter(Header);
