import React,{Component} from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {Modal,Button} from "react-bootstrap"

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";


//update details
import {updateServerData} from "../../services/EditApidataadd"

class UpdateModal extends Component {
    state = {
        toggle:false,
        id:this.props.id,
        updatedDetails:{
          ipAddresses:this.props.ipAddresses,
          providers:this.props.providers,
          type:this.props.type,
          Interfaces:this.props.Interfaces,
          Ram:this.props.Ram,
          Core:this.props.Core,
          Hdd:this.props.Hdd,
          ServerType:this.props.ServerType
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
       await updateServerData(this.state.updatedDetails,this.state.id)
          // this.setState({data:response})
       window.location.href = "/ServerDetails";
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


                <Form>
      <Row>
        <Col>
        <Form.Label>IP Addresses</Form.Label>
          <Form.Control placeholder="IP Addresses" name="ipAddresses" onChange={this.handleChange} value={this.state.updatedDetails.ipAddresses}/>
        </Col>
        <Col>
        <Form.Label>providers</Form.Label>
        <Form.Select aria-label="Default select example" name="providers" onChange={this.handleChange} value={this.state.updatedDetails.providers}>
      <option  disabled selected value="">Select Provider</option>
      <option value="vodafone">vodafone</option>
      <option value="Airtel">Airtel</option>
    </Form.Select>

        {/* <div class="form-group">
                      <select
                      required
                      name="providers"
                        class="form-select form-control"
                        onChange={this.handleChange}
                      //  onChange={(e) => {this.setState({providers : e.target.value}) }}
                     >
                        <option disabled selected value="">Providers</option>
                        <option value="Airtel" >Airtel</option>
                        <option value="Vodafone">Vodafone</option>
                      </select>
                    </div> */}
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Label>type</Form.Label>

          <Form.Control placeholder="type" name="type" onChange={this.handleChange}  value={this.state.updatedDetails.type} />
        </Col>
        <Col>
        <Form.Label>Interfaces</Form.Label>

          <Form.Control placeholder="Interfaces" name="Interfaces" onChange={this.handleChange} value={this.state.updatedDetails.Interfaces} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Label>Ram</Form.Label>

          <Form.Control placeholder="Ram" name="Ram" onChange={this.handleChange} value={this.state.updatedDetails.Ram} />
        </Col>
        <Col>
        <Form.Label>Core</Form.Label>

          <Form.Control placeholder="Core" name="Core" onChange={this.handleChange} value={this.state.updatedDetails.Core}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Label>Hdd</Form.Label>

          <Form.Control placeholder="Hdd" name="Hdd" onChange={this.handleChange} value={this.state.updatedDetails.Hdd} />
        </Col>
        <Col>
        <Form.Label>ServerType</Form.Label>

          <Form.Control placeholder="ServerType" name="ServerType" onChange={this.handleChange} value={this.state.updatedDetails.ServerType} />
        </Col>
      </Row>
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