import React, { Component } from "react";
import Button from "./Button";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      list: [],
      list2: [],
      label: "",
      list3: [],
      nameofSegment: "",
      placeholder: "Please Choose",
      clicked: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      msg: nextProps.msg,
      list: nextProps.list,
    });
  }

  newdrop = (e) => {
    this.setState({ clicked: true });
    for (var key in this.state.list2) {
      var value = this.state.list2[key];
      if (value.Value == this.state.label) {
        console.log("ok");
        var x = this.state.list2.splice(key, 1);
        console.log(x, "x");
        // var y = this.state.list3.unshift(x[0])
        console.log(this.state.list2);
        this.setState({ list3: this.state.list3.concat(x) });
        console.log(this.state.list2, this.state.list3);
      }
    }
  };
  hanonChange = (e, index) => {
    // var idx=this.state.list.indexOf(e.target.value)
    console.log(e.target.value, "eeee");
    this.setState({ label: e.target.value, list2: this.state.list });
  };

  delete = (index) => {
    let templist = this.state.list3;
    var z = templist.splice(index, 1);
    console.log(z);
    this.setState({ list: this.state.list.concat(z) });
    this.setState({ list3: templist });
  };
  onchange = (e) => {
    console.log(e.target.value);
    const item2 = e.target.value;
    this.setState({ nameofSegment: e.target.value });
    this.props.nameofSegment(item2);
  };
  handlesave = (e) => {
    const item = this.state.list3;
    console.log(item);
    this.props.schemas(item);
  };

  render() {
    console.log("welcome to modal", this.state.list2, this.state.list3);
    return (
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable ">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  &gt;Segments
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p></p>
                <p>
                  Enter the name of the segment
                  <br />
                  <input
                    placeholder="Name of the Segment"
                    onChange={this.onchange}
                  ></input>
                </p>
                <p>
                  To save your segment you need to add the schemas to build the
                  query
                </p>
                <p>
                  <div>
                    {this.state.clicked &&
                      this.state.list3.map((item, i) => (
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            class="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                          >
                            <Button
                              text={item}
                              placeholder={this.state.list3[i].Value}
                              data={this.state.list3}
                              style={{ color: "black" }}
                            >
                              {" "}
                            </Button>
                          </div>
                          <div
                            class="btn-group mr-2"
                            role="group"
                            aria-label="Second group"
                          >
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => this.delete(i)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </p>
                <p className="maindropdown" id="maindropdown">
                  <Button
                    data={this.state.list}
                    placeholder={this.state.placeholder}
                    name="maindropdown"
                    hanonChange={(e) => this.hanonChange(e)}
                  ></Button>

                  <a onClick={this.newdrop}>+ Add New Schema</a>
                </p>

                <div class="modal-footer" id="footer1">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.handlesave}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
