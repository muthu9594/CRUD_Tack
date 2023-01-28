import React,{Component,useEffect} from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {Modal,Button} from "react-bootstrap"



import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";


//update details
import {updateDidData} from "../../services/EditApidataadd"

class UpdateModal extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  this.state = {
      toggle:false,
      yes:"Yes",
      No:"No",
      id:this.props.id,
      updatedDetails:{
          listing:this.props.listing,
          used:this.props.used
      }
     
  
  
  }
  }
     

     toggleModal=()=>{
        this.setState({toggle:!this.state.toggle})
    }

    // handleRadio=(e)=>{
    //   this.setState({selectedValue:this.state.updatedDetails.used})
    //  // this.setState({yes:!this.state.yes})
    //    //this.setState({selectedValue:this.state.updatedDetails.used})
    //    console.log("yes value",this.state.yes);
    // }

    handleChange=(e)=>{
     
        this.setState({updatedDetails:{[e.target.name]:e.target.value}});
       // this.setState({yes:!this.state.yes})
       // this.handleRadio()
       // console.log("yes after value",this.state.yes);
      }

      
      // handleTwoChange=(e)=>{
       
      //   this.handleChange(e)
      // }

      handleSubmit = async (e)=>{
        e.preventDefault()
       await updateDidData(this.state.updatedDetails,this.state.id)
          // this.setState({data:response})
      //  window.location.href = "/ServerDetails";
      }

  //   changingState=()=>{
  //       if(this.state.used === "Yes"){
  //         this.setState({yes:"checked"})
  //         this.setState({No:null})
  //   }
  //  if(this.state.used === "No"){
  //     this.setState({yes:null})
  //     this.setState({No:"checked"})
  //   }
    
  //     }





    //   componentDidMount(){
    // //     if(this.state.used === "Yes"){
    // //       this.setState({yes:"checked"})
    // //       this.setState({No:false})
    // //   }
    // //  else{
    // //     this.setState({yes:false})
    // //     this.setState({No:"checked"})
    // //   }
    // //this.handleTwoChange()
    // this.handleRadio()
    // console.log("selected value",this.state.selectedValue)
       
    //   }




      // componentDidUpdate(prevProps, prevState, snapshot){
      //   if(prevState !== this.state.updatedDetails.used){
      //     this.handleRadio()
      //   }
      // }


      // componentDidUpdate(prevProps,prevState){
      //   if(prevState !== this.state.yes){
      //     this.setState({selectedValue:this.state.updatedDetails.used})
      //   }
      // }
     
     
     
    render() {
      
      {console.log("selected value",this.state.selectedValue)}
     //const  {isPublished}=this.state

      // const onSelect=({target:{value}})=>{
      //     this.setState({used:value})
      // }


     const isChecked=(value)=>{
        return  value === this.state.updatedDetails.used
      }
      console.log("DSDFSADFSA",this.state.updatedDetails.used)
        return (  
          
          
           <div>
                {console.log(this.props.used)}
                    <p onClick={this.toggleModal} btn bg-transparent> <DriveFileRenameOutlineIcon
                 
                 style={{ color: "blueviolet", cursor : "pointer" }}
               /></p>
            <Modal show={this.state.toggle} size="lg" onHide={this.toggleModal}>
                <Modal.Header closeButton onClick={this.toggleModal}>
                    <Modal.Title>Update Details</Modal.Title>
                </Modal.Header>


                <Modal.Body>

                <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                  <Form.Label for="exampleInputEmail1" class="form-label">
                  Listing
                    </Form.Label>
                    <input
                    required
                      value={this.state.updatedDetails.listing}
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Listing"
                      name="listing"
                      onChange={this.handleChange}

                    />
                  </div>
                  Used :
                  <div class="form-group form-control">
                    
                    <input type="radio" id="yes" name="used" required
                    //checked={this.state.yes === this.state.updatedDetails.used}
                    value={this.state.yes}
                    checked={this.state.updatedDetails.used === "Yes"}
                    //checked={this.state.used == "Yes" ? "checked" : ""}
                    onChange={this.handleChange}
                   /// onSelect={this.state.yes}
                    
                    />
                    <label for="yes">Yes</label>
                    <br />
                    <input type="radio" id="no" name="used" 
                    //checked={this.state.No === this.state.updatedDetails.used}
                     value={this.state.No}
                   // checked={this.state.used == "No" ? "checked" : ""}
                    //checked={isPublished === false}
                    checked={this.state.updatedDetails.used === "No"}
                     onChange={this.handleChange}
                     
                     //onSelect={this.onSelect}
                    // checked={this.setState({yes})}
                   />
                    <label for="no">No</label>
                    <br />
                  </div>
                
                </form>
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