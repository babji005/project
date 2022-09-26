import React from "react";

// import { connect } from 'react-redux';

export default class Button extends React.Component {
  Rchange(event,index) {
    this.props.hanonChange(event);
  }
  render() {
    let data = this.props.data;
    let placeholder = this.props.placeholder;
    console.log(data)

    return (
      <div>
        {/* <label> :   </label> */}
        <select style={{width:200}}
          onChange={(event,index) => {
            this.Rchange(event,index);
          }}
        ><option selected="selected" class="holder" value="">{placeholder}</option>
          {data.map((x, key) => {
            return  (
            <option key={key}>{x.Value}</option>
            )
          })}
        </select>
      </div>
    );
  }
}