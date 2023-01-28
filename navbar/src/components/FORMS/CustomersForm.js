import React, { Component } from 'react'
import { Button , Form, Modal} from 'react-bootstrap'

import { AddCustomerDetails} from "../../services/addApi"
import { Link } from 'react-router-dom'
 class ServerDetailsModel extends Component {

  constructor()
{
  super()
  this.state={
    Name: "",
    License: "",
    ChannelPartner: "",
    DidCount: "",
    CpassInfo: "",
    AccountManager:""
     }
}

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}



handleSubmit = async (e)=>{
    e.preventDefault()
   await AddCustomerDetails(this.state)
  console.log(this.state)
  window.location.href = "/CustomerDetails";
  }
  
// handleSubmit = async (e)=>{
//   e.preventDefault()
// //  const response=await AddServerDetails(this.state)
//     // this.setState({data:response})
// //  window.location.href = "/ServerDetails";
// }
  render() {
    return (
        <div className="App">
        <div class="container p-2">
        <Button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal" 
           style={{  background : "blueviolet", borderRadius : "18px"}}
           >
          AddDetails
         
           </Button>
  
           <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content" >
                <div class="modal-header">
                  <h5 class="modal-title " id="exampleModalLabel">
                    Add Details
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">

                  <Form onSubmit={this.handleSubmit}>
                    <div class="row">

                      <div class="col">
                        
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Name
                        </Form.Label>
                        <Form.Control
                        required
                        name="Name"
                          type="text"
                          placeholder='Name'
                          onChange={this.handleChange}
                          aria-label="First name"
                        />
                      </div>

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        License
                        </Form.Label>
                        <Form.Control
                        name="License"
                        placeholder='License'
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                    </div>
  
                    <div class="row">

                      
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Channel Partner
                        </Form.Label>
                        <Form.Control
                         placeholder='Channel Partner'
                        name="ChannelPartner"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        CPASS Info
                        </Form.Label>
                        <Form.Control
                        placeholder='CPASS Info'
                         name="CpassInfo"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                    </div>
  
                    <div class="row">
                     
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        DID Count
                        </Form.Label>
                        <Form.Control
                        placeholder='DID Count'
                         name="DidCount"
                         onChange={this.handleChange}
                        required
                          type="number"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Account Manager
                        </Form.Label>
                        <Form.Control
                        placeholder='Account Manager'
                         name="AccountManager"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                    </div>
  
                    <div class="row">
                      
                      <div class="col">
                      <Form.Label for="exampleInputEmail1" class="form-label">
                      Dialer link and domain
                        </Form.Label>
                      <Link class="form-control row"  style={{width:"50%"}} to="/dialerlink">
                          Dialer link and domain
                      </Link>
                      </div>
                    </div>
                    
                  </Form>
                  <br></br>
                      <Modal.Footer>            
                    <Button type="submit" class=""
                    onClick={this.handleSubmit} 
                    style={{  background : "green", borderRadius : "18px", width :"75px"}}>
                      Save
                    </Button>
  
                    <Button
                    type="button"
                    class=""
                    data-bs-dismiss="modal"
                    style={{  background : "red", borderRadius : "18px", margin: "10px",width :"75px"}}
                  >
                    Close
                  </Button>
                  </Modal.Footer>
                </div>
                {/* <div class=""> */}
                  
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerDetailsModel