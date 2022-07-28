import * as React from "react";
import Story from "./subcomponents/story/Story";
import './Storybook.scss';

function Storybook() {
  return(
    <div className="storybook_container">
      <Story />
    </div>
  );
};

export default Storybook;