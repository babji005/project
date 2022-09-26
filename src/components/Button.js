import React from "react";

// import { connect } from 'react-redux';

export default class Button extends React.Component {
  Rchange(event,index) {
    // var idx=this.props.data.indexOf(event.target.value)
    console.log(event.target.label , "77777777777777")
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
            {/* <option>Add new Schema</option> */}
          {data.map((x, key) => {
            return  (
                // Add new Schema
                // <option disabled>Select a schema</option>
                // {this.props.label}
            <option key={key}>{x.Value}</option>
            )
          })}
        </select>
      </div>
    );
  }
}