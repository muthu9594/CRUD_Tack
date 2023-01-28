import React, { Component } from 'react'
import { Button , Form, Modal} from 'react-bootstrap'

import { AddProvidersDetails} from "../../services/addApi"

 class ServerDetailsModel extends Component {

  constructor()
{
  super()
  this.state={
    Name : '',
      Initial : '',
      Location: '',
      CurrentDate : '',
      UpdateDate : '',
      AccountManager : '',
      TechnicalContactManager : '',

     }
}


  
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  
  }
  
  
  
  handleSubmit = async (e)=>{
    e.preventDefault()
   await AddProvidersDetails(this.state)
  console.log(this.state)
  window.location.href = "/ProvidersDetails";
  }


  render() {
    return (
        <div className="App">
        <div class="container p-2">
        <Button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal" 
           style={{  background : "blueviolet", borderRadius : "18px"}}
           >
          Add Details
         
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
                          placeholder='Ip Address'
                          onChange={this.handleChange}
                          aria-label="First name"
                        />
                      </div>

                      <div class="col">
                      <Form.Label for="exampleInputEmail1" class="form-label">
                      Initial
                        </Form.Label>
                      <Form.Select
                        required
                        name="Initial"
                          class="form-select  "
                          onChange={this.handleChange}
                        //  onChange={(e) => {this.setState({providers : e.target.value}) }}
                       >
                          <option disabled selected value="">Initials</option>
                          <option value="Mr." required>Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Ms.">Ms.</option>
                        </Form.Select>
                      </div>
                    </div>
  
                    <div class="row">

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Location
                        </Form.Label>
                        <Form.Control
                        name="Location"
                        placeholder='Location'
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Current Date
                        </Form.Label>
                        <input
                         placeholder=' Current Date'
                        name="CurrentDate"
                         onChange={this.handleChange}
                        required
                          type="date"
                          class="form-control"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Update Date
                        </Form.Label>
                        <Form.Control
                        placeholder='Update Date'
                         name="UpdateDate"
                         onChange={this.handleChange}
                        required
                          type="date"
                          class=" "
                          aria-label="First name"
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
                          aria-label="Last name"
                        />
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Technical Contact Manager
                        </Form.Label>
                        <Form.Control
                        style={{width:"49%"}}
                    
                        placeholder='Technical Contact Manager'
                         name="TechnicalContactManager"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
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