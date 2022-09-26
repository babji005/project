import React , {Component} from "react";
import Modal from "./Modal";
import "./Main.css"
import Button from "./Button";
// import * from "./mock/Mock"

export default class Main extends React.Component{

    constructor(props){
        super(props);
        this.state={
            msg:"hello",
            requiredItem:0,
            isopen:false,
            requiredsegment:0,
            nameofSegment:"hii",
            list: [],
              label:"todo"
           
        }
    }

    clicked=()=>{
         console.log(this.state.isopen)
          this.setState({isopen:true})
    }
    editItem =(index)=>{
        
        this.setState({requiredItem: index, isopen:true})
        console.log("changed", this.state.list[this.state.requiredItem],index)
    }
    schemas=(item)=>{
      console.log(item)
      this.setState({list:item})
         const list=this.state.list
        //  list[this.state.requiredsegment] = item
        //  console.log(list[0].Value)
    }
    nameofSegment=(name)=>{
      console.log(name)
          this.setState({nameofSegment:name})
    }
render(){
  console.log(this.props.content)
    const brochure = this.state.list.map((item, index) => {
        return (
          <div style={{ textAlign: "left" }}>
            <div class="list-group">
              <a
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <p class="mb-1">segment-Name::{this.state.nameofSegment}</p>
                <p class="mb-1">Schema_name::{item.Value}   </p>
                <div style={{ textAlign: "end" }}>
                  <button
                    className="btn btn-success"
                    // data-toggle="modal"
                    // data-target="#exampleModal"
                    // onClick={() => this.editItem(index)}
                  >
                    edit
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    // onClick={() => this.deleteItem(index)}
                  >
                    remove
                  </button>
                </div>
              </a>
            </div>
          </div>
        );
      });
      // const requiredItem=this.state.requiredItem
      // let modalData = this.state.list[requiredItem]
    // console.log(modalData)
    return(
        
        <div id="butt">
          <div>
            <button className="btn btn-primary" data-toggle="modal" 
                    data-target="#exampleModal" onClick={()=>this.clicked()}>SAVE SEGMENT</button>
             </div>
        <div class="col-sm-3 container" style={{ textAlign: "center" }}>
          <div class="card">
            <div class="card-body">
              <p class="card-text">{brochure}</p>
            </div>
          </div>
        </div>
            
          <Modal msg={this.state.list[this.state.requiredItem]} list={this.props.content.segments} schemas={this.schemas} nameofSegment={this.nameofSegment}/>
        
            
        </div>
    )
}
}