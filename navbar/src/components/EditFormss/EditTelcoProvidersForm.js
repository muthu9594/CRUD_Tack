import React,{Component} from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {Modal,Button} from "react-bootstrap"

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import Select from "react-select"

//update details
import {updateTelcoProviderData} from "../../services/EditApidataadd"
import reactSelect from "react-select";

class UpdateModal extends Component {
    state = {
        toggle:false,
        id:this.props.id,
        updatedDetails:{
            Name:this.props.Name,
            IP:this.props.IP,
            Port:this.props.Port,
            User:this.props.User,
            Password:this.props.Password,
            MediaIP:this.props.MediaIP,
            SBCIPAndPort:this.props.SBCIPAndPort,
            GatewayIP:this.props.GatewayIP,
            Domain:this.props.Domain,
            AccountManager:this.props.AccountManager,
            TechnicalManager:this.props.TechnicalManager,
            escalation_matrix_name:this.props.escalation_matrix_name,
            escalation_matrix_email:this.props.escalation_matrix_email,
            escalation_matrix_phoneno:this.props.escalation_matrix_phoneno

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
       await updateTelcoProviderData(this.state.updatedDetails,this.state.id)
          // this.setState({data:response})
       //window.location.href = "/ServerDetails";
      }
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


               
                <Form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <div class="row">
                        <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Name
                        </Form.Label>
                    <input
                    required
                    value={this.state.updatedDetails.Name}
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
                     value={this.state.updatedDetails.IP}
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
                         value={this.state.updatedDetails.Port}
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
                    value={this.state.updatedDetails.User}
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
                     value={this.state.updatedDetails.Password}
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
                    value={this.state.updatedDetails.SBCIPAndPort}
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
                    value={this.state.updatedDetails.GatewayIP}
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
                     value={this.state.updatedDetails.Domain}
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
                     value={this.state.updatedDetails.AccountManager}
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
                     value={this.state.updatedDetails.TechnicalManager}
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
                     value={this.state.updatedDetails.escalation_matrix_name}
                    required
                    style={{paddingTop:"0px",marginBottom:"0px"}}
                      type="text"
                      class=""
                      placeholder="Name"
                      name="escalation_matrix_name"
                      onChange={this.handleChange}
                    />
                    <Form.Control
                     value={this.state.updatedDetails.escalation_matrix_email}
                    style={{paddingTop:"0px",marginBottom:"0px"}}
                    required
                      type="text"
                      class=""
                      placeholder="Email"
                      name="escalation_matrix_email"
                      onChange={this.handleChange}
                    />
                     <Form.Control
                      value={this.state.updatedDetails.escalation_matrix_phoneno}
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