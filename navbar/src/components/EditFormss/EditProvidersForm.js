import React,{Component} from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {Modal,Button} from "react-bootstrap"

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import moment from "moment";

//update details
import {updateProviderData} from "../../services/EditApidataadd"

class UpdateModal extends Component {
    state = {
        toggle:false,
        id:this.props.id,
        updatedDetails:{
          Name:this.props.Name,
          Initial:this.props.Initial,
          Location:this.props.Location,
          CurrentDate:moment(this.props.CurrentDate).utc().format('yyyy-MM-DD'),
          UpdateDate:moment(this.props.UpdateDate).utc().format('yyyy-MM-DD'),
          AccountManager:this.props.AccountManager,
          TechnicalContactManager:this.props.TechnicalContactManager,
          
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
       await updateProviderData(this.state.updatedDetails,this.state.id)
          // this.setState({data:response})
       window.location.href = "/ProvidersDetails";
      }
    render() { 
       
        {console.log("DATE",)}
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
                        onChange={this.handleChange} value={this.state.updatedDetails.Name}
                        required
                        name="Name"
                          type="text"
                          placeholder='Ip Address'
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
                          value={this.state.updatedDetails.Initial}
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
                  value={this.state.updatedDetails.Location}
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
                        value={this.state.updatedDetails.CurrentDate}
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
                        value={this.state.updatedDetails.UpdateDate}
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
                        value={this.state.updatedDetails.AccountManager}
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
                        value={this.state.updatedDetails.TechnicalContactManager}
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