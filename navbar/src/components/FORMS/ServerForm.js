import React, { Component } from 'react'
import { Button , Form, Modal} from 'react-bootstrap'

import { AddServerDetails} from "../../services/addApi"

 class ServerDetailsModel extends Component {

  constructor()
{
  super()
  this.state={
    ipAddresses : '',
    providers : '',
    type : '',
    Interfaces : '',
    Ram : '',
    Core : '',
    Hdd : '',
    ServerType : '',
    data:{}
     }
}

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}



handleSubmit = async (e)=>{
  e.preventDefault()
 const response=await AddServerDetails(this.state)
    this.setState({data:response})
 window.location.href = "/ServerDetails";
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
                          IP Addresses
                        </Form.Label>
                        <Form.Control
                        required
                        name="ipAddresses"
                          type="text"
                          placeholder='Ip Address'
                          onChange={this.handleChange}
                          aria-label="First name"
                        />
                      </div>

                      <div class="col">
                      <Form.Label for="exampleInputEmail1" class="form-label">
                          Providers
                        </Form.Label>
                      <Form.Select
                        required
                        name="providers"
                          class="form-select  "
                          onChange={this.handleChange}
                        //  onChange={(e) => {this.setState({providers : e.target.value}) }}
                       >
                          <option disabled selected value="">Providers</option>
                          <option value="vodafone">vodafone</option>
                          <option value="Airtel">Airtel</option>
                        </Form.Select>
                      </div>
                    </div>
  
                    <div class="row">

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Type
                        </Form.Label>
                        <Form.Control
                        name="type"
                        placeholder='Type'
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Interfaces
                        </Form.Label>
                        <Form.Control
                         placeholder='Interfaces'
                        name="Interfaces"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          RAM
                        </Form.Label>
                        <Form.Control
                        placeholder='Ram'
                         name="Ram"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          CORE
                        </Form.Label>
                        <Form.Control
                        placeholder='Core'
                         name="Core"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          HDD
                        </Form.Label>
                        <Form.Control
                        placeholder='Hdd'
                         name="Hdd"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Server Type
                        </Form.Label>
                        <Form.Control
                        placeholder='Server Type'
                        required
                        name="ServerType"
                        onChange={this.handleChange}
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
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