import React,{Component} from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {Modal,Button} from "react-bootstrap"

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import { Link } from "react-router-dom";

//update details
import {updateCustomerData} from "../../services/EditApidataadd"

class UpdateModal extends Component {
    state = {
        toggle:false,
        id:this.props.id,
        updatedDetails:{
            Name:this.props.Name,
            License:this.props.License,
            ChannelPartner:this.props.ChannelPartner,
            DidCount:this.props.DidCount,
            CpassInfo:this.props.CpassInfo,
            AccountManager:this.props.AccountManager
        }
       
    
    
    } 

     toggleModal=()=>{
        this.setState({toggle:!this.state.toggle})
    }


    handleChange=(e)=>{
        this.setState({updatedDetails:{[e.target.name]:e.target.value}});
      
      }

      handleSubmit = async (e)=>{
        e.preventDefault()
       await updateCustomerData(this.state.updatedDetails,this.state.id)
          // this.setState({data:response})
       window.location.href = "/CustomerDetails";
      }
    render() { 
       

        return (
            <div>
                    <p onClick={this.toggleModal} btn bg-transparent> <DriveFileRenameOutlineIcon
                 
                 style={{ color: "blueviolet", cursor : "pointer" }}
               /></p>
            <Modal show={this.state.toggle} size="lg" onHide={this.toggleModal}>
                <Modal.Header closeButton onClick={this.toggleModal}>
                    <Modal.Title>Update Details</Modal.Title>
                </Modal.Header>


                <Modal.Body>


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
                          value={this.state.updatedDetails.Name}
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
                        value={this.state.updatedDetails.License}
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
                        value={this.state.updatedDetails.ChannelPartner}
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
                        value={this.state.updatedDetails.CpassInfo}
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
                         value={this.state.updatedDetails.DidCount}
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
                        value={this.state.updatedDetails.AccountManager}
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
                {/* <Form onSubmit={this.handleSubmit}>
                    <div class="row">
                      <div class="col">
                        
                        <label for="exampleInputEmail1" class="form-label">
                          IP Addresses
                        </label>
                        <Form.Control
                        value={this.state.ipAddresses}
                        required
                        name="ipAddresses"
                          type="text"
                          class=""
                          onChange={this.handleChange}
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                      <label for="exampleInputEmail1" class="form-label">
                          Providers
                        </label>
                      <select
                        required
                        name="providers"
                          class="form-select  "
                          onChange={this.handleChange}
                        //  onChange={(e) => {this.setState({providers : e.target.value}) }}
                       >
                          <option disabled selected value="">Providers</option>
                          <option value="Airtel">Airtel</option>
                          <option value="Vodafone">Vodafone</option>
                        </select>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col">
                        <Form.label for="exampleInputEmail1" className="form-label">
                        </Form.label>
                        <input
                        // value={this.props.data.type}
                        name="type"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <label for="exampleInputEmail1" class="form-label">
                          Interfaces
                        </label>
                        <input
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
                        <label for="exampleInputEmail1" class="form-label">
                          RAM
                        </label>
                        <input
                         name="Ram"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <label for="exampleInputEmail1" class="form-label">
                          CORE
                        </label>
                        <input
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
                        <label for="exampleInputEmail1" class="form-label">
                          HDD
                        </label>
                        <input
                         name="Hdd"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <label for="exampleInputEmail1" class="form-label">
                          Server Type
                        </label>
                        <input
                        required
                        name="ServerType"
                        onChange={this.handleChange}
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                    <br></br>
                   
                  </Form> */}
                </Modal.Body>


                <Modal.Footer>
                <Button onClick={this.handleSubmit} type="submit" class="" 
                    style={{  background : "green", borderRadius : "18px", width :"75px"}}>
                      Save
                    </Button>
  
                    <Button
                    onClick={this.toggleModal}
                    type="button"
                    class=""
                    data-bs-dismiss="modal"
                    style={{  background : "red", borderRadius : "18px", margin: "10px",width :"75px"}}
                  >
                    Close
                  </Button>
                    {/* <Button variant="danger" >
                        Close
                    </Button>
                    <Button variant="dark">
                        Update
                    </Button> */}
                </Modal.Footer>
            </Modal>
            </div>
            
        );
    }
}
 
export default UpdateModal;