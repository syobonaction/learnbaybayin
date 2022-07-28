import * as React from "react";
import './Story.scss';

interface StoryProps {
  children?: React.ReactNode;
}

function Story(props: StoryProps) {
  return(
    <div className="story_container">
      {props.children}
    </div>
  );
};

export default Story;