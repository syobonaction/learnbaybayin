import * as React from "react";
import Header from '../header/Header';
import Storybook from "../storybook/Storybook";
import './App.scss';

function App() {
  return(
    <div className="app_container">
      <Header></Header>
      <Storybook></Storybook>
    </div>
  );
};

export default App;