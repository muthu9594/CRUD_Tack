import React, { Component } from 'react'
import { Button , Form, Modal} from 'react-bootstrap'

import { AddtelcoProviderDetails} from "../../services/addApi"
import { getCustomerDetails } from "../../services/getApi";

import Select from "react-select"

 class ServerDetailsModel extends Component {

  constructor()
{
  super()
  this.state={
    Name: "",
    IP: "",
    Port: "",
    User: "",
    Password: "",
    MediaIP :'',
    SBCIPAndPort: "",
    GatewayIP: "",
    Domain: "",
    AccountManager: "",
    TechnicalManager: "",
    escalation_matrix_name: "",
    escalation_matrix_email: "",
    escalation_matrix_phoneno: "",
     }
}
// set value for default selection

// handle onChange event of the dropdown
 handleChange1 = (e) => {
  this.setState({mytestdata :  Array.isArray(e) ? e.map(x => x.value) : []});
}


handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}


  
  
handleSubmit = async (e)=>{
    e.preventDefault()
   await  AddtelcoProviderDetails(this.state)
  console.log(this.state)
  window.location.href = "/telcoProviderDetails";
  }

// handleSubmit = async (e)=>{
//   e.preventDefault()
// //  const response=await AddServerDetails(this.state)
//     // this.setState({data:response})
// //  window.location.href = "/ServerDetails";
// }
  render() {
    var media_ip = [
        {
            value : "Media 1",
            label : "Media 1"
        },
        {
          value : "Media 2",
            label : "Media 2"
  
        },
        {
          value : "Media 3",
            label : "Media 3"
  
        }
      ]

    console.log(this.state.customerResult)
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

                  <Form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <div class="row">
                        <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Name
                        </Form.Label>
                    <input
                    required
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      name="Name"
                      onChange={this.handleChange}
                    />
                        </div>
                    
                    <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          IP 
                        </Form.Label>
                     <input
                    required
                      type="type"
                      class="form-control"
                      placeholder="IP"
                      name="IP"
                      
                      onChange={this.handleChange}
                    />
                    </div>

                    </div>
                   
                  </div>

                  <div class="form-group">
                    <div class="row">

                        <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Port
                        </Form.Label>
                        <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="Port"
                      name="Port"
                      onChange={this.handleChange}
                    />
                        </div>

                        <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        User
                        </Form.Label>
                        <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="User"
                      name="User"
                      onChange={this.handleChange}
                    />
                        </div>
                    </div>
                   
                  </div>
                  <div class="row">
                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                    password
                        </Form.Label>
                    <input
                    required
                      type="password"
                      class="form-control"
                      placeholder="password"
                      name="Password"
                      onChange={this.handleChange}
                    />
                    </div>
                   
                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                    SBC IP and port
                        </Form.Label>
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="SBC IP and port"
                      name="SBCIPAndPort"
                      onChange={this.handleChange}
                    />
                    </div>
                  </div>
                  {/* <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Enter multiple ip seperated by comma"
                      name="MediaIP"
                      multiple
                      onChange={this.handleChange}
                    />
                  </div> */}
                  <div class="row">

                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                          IP Addresses
                        </Form.Label>

                <Select isMulti options={media_ip}></Select>
                    
                    </div>
                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                    Gateway IP and port
                        </Form.Label>
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Gateway IP and port"
                      name="GatewayIP"
                      onChange={this.handleChange}
                    />
                    </div>
                  </div>
                     
                  <div class="row">
                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                    Domain
                        </Form.Label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Domain"
                      name="Domain"
                      onChange={this.handleChange}
                    />
                    </div>
                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                    Account Manager
                        </Form.Label>
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Account Manager"
                      name="AccountManager"
                      onChange={this.handleChange}
                    />
                    </div>
                   
                  </div>
                  
                  <div class="row">
                    <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                    Technical Manager
                        </Form.Label>
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Technical Manager"
                      name="TechnicalManager"
                      onChange={this.handleChange}
                    />
                    </div>
                    <div class="col">
                    <label>Escalation Matrix</label><br></br>
                    <Form.Control
                    required
                    style={{paddingTop:"0px",marginBottom:"0px"}}
                      type="text"
                      class=""
                      placeholder="Name"
                      name="escalation_matrix_name"
                      onChange={this.handleChange}
                    />
                    <Form.Control
                    style={{paddingTop:"0px",marginBottom:"0px"}}
                    required
                      type="text"
                      class=""
                      placeholder="Email"
                      name="escalation_matrix_email"
                      onChange={this.handleChange}
                    />
                     <Form.Control
                     style={{paddingTop:"0px"}}
                    required
                      type="text"
                      class=""
                      placeholder="Phone no"
                      name="escalation_matrix_phoneno"
                      onChange={this.handleChange}
                    />
                    </div>
                    
                  </div>
                  {/* <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Escalation matrix name"
                      name="escalation_matrix_name"
                      onChange={(e) => {
                        this.setState({
                          escalation_matrix_name:
                            e.target.escalation_matrix_name,
                        });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Escalation matric email"
                      name="escalation_matrix_email"
                      onChange={(e) => {
                        this.setState({
                          escalation_matrix_email:
                            e.target.escalation_matrix_email,
                        });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Escalation matrix phone no"
                      name="escalation_matrix_phoneno"
                      onChange={(e) => {
                        this.setState({
                          escalation_matrix_phoneno:
                            e.target.escalation_matrix_phoneno,
                        });
                      }}
                    />
                  </div> */}
                 
                </Form>
                  <br></br>
                      <Modal.Footer>            
                    <Button type="submit" onClick={this.handleSubmit} class="" 
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