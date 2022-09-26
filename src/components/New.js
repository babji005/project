import { Component, useState } from "react";
import Modal from "./Modal";

// export default function New() {

//     const [show, setShow] = useState(false);

//     if (show) {
//       return (
//         // <alert variant="danger" onClose={() => setShow(false)} dismissible>
//         //   <p>Oh snap! You got an error!</p>
//         //   <p>
//         //     Change this and that and try again. Duis mollis, est non commodo
//         //     luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//         //     Cras mattis consectetur purus sit amet fermentum.
//         //   </p>
//         // </alert>
//         <Modal />
//       );
//     }
//     return( <div><button onClick={() => setShow(true)} data-toggle="modal" >Show Alert</button>
//     <Modal/>
//     </div>
//     )
//   }

// //   render(<New />);

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popout: false,
    };
  }

  clicked = () => {
    this.setState({ popout: true });
  };

  render() {
    return (<div>
        <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>SIS App</li>
              <li>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.clicked}>
  Launch demo modal
</button>
               </li>
            </ul>
        </div>
        
        {<Modal />}
      </div>
      </div>
    );
  }
}
