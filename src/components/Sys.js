import React from "react";
import content from "../components/mock/Mock";
import Main from "./Main";

class Sys extends React.Component {
  render() {
    return (
      <div >
        <Main content={this.props.content} />
      </div>
    );
  }
}
Sys.defaultProps = {
  content: content,
};
export default Sys;