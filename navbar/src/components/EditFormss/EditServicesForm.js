import React,{Component} from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Select from "react-select"
import {Modal,Button} from "react-bootstrap"

import Multiselect from 'multiselect-react-dropdown';


import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import { Link } from "react-router-dom";

//update details
import {updateServiceData} from "../../services/EditApidataadd"
import { typographyVariant } from "@mui/system";

class UpdateModal extends Component {
    state = {
        toggle:false,
        id:this.props.id,
        isChecked:null,
        arr:[],
        customerRes:this.props.customerRes,
        customerName:[],
        updatedDetails:{
            Name:this.props.Name,
            NodeVersion:this.props.NodeVersion,
            Description:this.props.Description,
            Port:this.props.Port,
            ServiceType:this.props.ServiceType,
            firstCustomer:this.props.firstCustomer,
            selectedOption:this.props.selectedOption,
            showDropdown:this.props.showDropdown
        }
       
    
    
    } 


    

    handleChange1 = (e) => {
        this.setState({mytestdata :  Array.isArray(e) ? e.map(x => x.value) : []});
      }
      
      

     toggleModal=()=>{
        this.setState({toggle:!this.state.toggle})
    }


    handleChange=(e)=>{
        this.setState({updatedDetails:{[e.target.name]:e.target.value}});
      
      }


      handleCustomerName=(selectedList, selectedItem)=>{
        var updatedDetails={...this.state.updatedDetails}
        updatedDetails.firstCustomer=selectedList
          // this.setState({updatedDetails:{...this.state.updatedDetails,firstCustomer:selectedItem}})
          this.setState({updatedDetails})
        console.log("selectedList",selectedList);
        console.log("SelectedItem",selectedItem)
      }

      handleRemove=(selectedList,removedItem)=>{
        var updatedDetails={...this.state.updatedDetails}
        updatedDetails.firstCustomer=selectedList
          // this.setState({updatedDetails:{...this.state.updatedDetails,firstCustomer:selectedItem}})
          this.setState({updatedDetails})

        console.log("removed item",removedItem)
        console.log("removed item",selectedList)
      }
      

    
       
handleSubmit = async (e)=>{
    e.preventDefault()
   await updateServiceData(this.state.updatedDetails,this.state.id,this.state.arr)
  console.log(this.state)
  window.location.href = "/ServicesDetails";
  }
  gettingdata=()=>{

    this.setState({arr:this.state.updatedDetails.firstCustomer.map((data) => data)})
   // this.state.arr  =  this.state.updatedDetails.firstCustomer.map((data) => data)

    console.log("testinggggggggggggggggggggg",this.state.updatedDetails.firstCustomer)
  }

  mappingcustomername=()=>{
    this.setState({customerName:this.state.customerRes.map(data=>data.Name)})
    
    //this.state.customerName = this.state.customerRes.map(data=>data.Name)

}


  componentDidMount(){
    this.gettingdata()
    this.mappingcustomername()
  }

  
  

    render() { 


console.log("Array data",this.state.firstCustomer)
console.log("Data from servicesTable",this.state.customerName)



      // var updatedFirstCustomer = []
      // var data

      // this.state.updatedDetails.firstCustomer.map((val)=>{
        
      //   data = {
      //     value:val,
      //     label:val
      //   }

      //   updatedFirstCustomer.push(data)

        
      // } )

     // console.log('update first customer data', this.state.updatedDetails.firstCustomer)

        // var collection=[];
        // var datas;
        // this.state.updatedDetails.firstCustomer.map(val=>{
        //  return (
        //   datas={
        //     value:val,
        //     label:val
        //   },

        //   collection.push(datas)
        // )
             
        // })
      
        ///{console.log("valueeeeeeee",collection[0].label.value)}

    //     var my_customer =  []
    // if(this.state.customerResult)
    // {
    //     var data
    //   this.state.customerResult.map((val) =>{ data =  { value : val.Name, label : val.Name } 
    //                                            return  my_customer.push(data)                                                        
    //  })
    // }

  
      var list=["pr"];
      var li;
  //   this.state.updatedDetails.firstCustomer.map((val)=>{li={  value:val, label:val }
  //      return list.push(li)
        
  // })

  
    
//console.log("yes or no",this.state.selectedOption)

 console.log('selvam array collcetion....',this.state.arr)

    console.log("checkinggggggggggggg", this.state.updatedDetails.firstCustomer)
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
                        value={this.state.updatedDetails.Name}
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
                        Node Version
                        </Form.Label>
                        <Form.Control
                        value={this.state.updatedDetails.NodeVersion}
                        name="NodeVersion"
                        placeholder='Node Version'
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
                        Description
                        </Form.Label>
                        <Form.Control
                          value={this.state.updatedDetails.Description}
                         placeholder='Description'
                        name="Description"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          PORT
                        </Form.Label>
                        <Form.Control
                        value={this.state.updatedDetails.Port}

                        placeholder='Port'
                         name="Port"
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
                        Service Type
                        </Form.Label>
                        <Form.Control
                        value={this.state.updatedDetails.ServiceType}
                        placeholder='Service Type'
                         name="ServiceType"
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                   <div class="col">  
                  <label for="exampleInputEmail1" class="form-label">First Customer</label>
                    <div class="form-group form-control col">
                  {/* First Customer : <br></br> */}

                  
                    <input
                      required
                      type="radio"
                      Name="firstCustomer"
                     
                      value="NO"
                      checked={this.state.selectedOption === "NO"}
                     
                         
                      onChange={ (e)=>{this.setState({
                            selectedOption: e.target.value,
                            showDropdown: e.target.value === "YES",
                            // used : e.target.value,
                             })
                            this.handleChange() 
                            }}
                    />
                    <label for="exampleInputEmail1" class="form-label">NO</label>
                    <input
                      type="radio"
                      Name="firstCustomer"
                      value="YES"
                      checked={this.state.selectedOption === "YES"}
                      onChange={(e) => this.setState({
                        selectedOption: e.target.value,
                        showDropdown: e.target.value === "YES",
                      })
                      
                    }
                      
                    />
                    <label for="exampleInputEmail1" class="form-label">YES</label>
                    {this.state.showDropdown && (
                      // <select Name="firstCustomer"  required
                     
                      // onChange={this.handleChange} 
                      // >
                      //   {
                      //     this.state.customerResult.map((res,index)=>(
                            
                      //       <option value={res.Name}>{res.Name}</option>
                            
                            
                      //     ))
                      //   }
                        
                      // </select>
                      <div class="form-group form-control ">
                      

                {/* <Select isMulti options={my_customer} onChange={this.handleChange} name="firstCustomer"></Select> */}
                {/* <Select
                 isMulti 
                 options={my_customer}
                  Name="mytestdata"
                  c 
                   onChange={(a,b) => {b.name = a}} >

                   </Select> */}

                  <Multiselect
                 
                  isObject={false}
                  selectedValues={this.state.arr}
                   options={ this.state.customerName}
                   onSelect={this.handleCustomerName}
                   onRemove={this.handleRemove}
                  />
                       {/* <Select
                      isMulti
                      object={false}
                      value={this.state.arr}
                      options={my_customer}
                      onChange={this.handleChange2}
                      
                      /> */}


                    </div>
                    )}
                </div>
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