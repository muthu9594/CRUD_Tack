import React, { Component } from 'react'
import { Button , Form, Modal} from 'react-bootstrap'

import { AddServicesDetails} from "../../services/addApi"
import { getCustomerDetails } from "../../services/getApi";
import Select from "react-select"

import Multiselect from 'multiselect-react-dropdown';

 class ServerDetailsModel extends Component {

  constructor()
{
  super()
  this.state={
    Name: "",
    NodeVersion: "",
    Description: "",
    Port: "",
    ServiceType: "",
    firstCustomer: "",
    selectedOption: '',
    showDropdown: false,
    mytestdata : [],
    firstCustomer : []
     }

     this.handleChange2 = this.handleChange2.bind(this);

}



handleChange2(selectedItem) {
  this.setState({ firstCustomer: selectedItem });
}
// set value for default selection

// handle onChange event of the dropdown
  handleChange1 = (newValue) => {
  this.setState({ firstCustomer: newValue });
}




 
state={
  customerResult:[],
  my_customer:[]
}

componentDidMount(){
  const fetchData=async()=>{
    const customersResponse = await getCustomerDetails();
    this.setState({customerResult:customersResponse.data})
    this.mappingcustomerdata()
    console.log("customer",this.state.customerResult)
  }
  fetchData()
  
}

// componentDidUpdate(prevProps,prevState){
//   if(prevState.customerResult !== this.state.customerResult){
//    this.mappingcustomerdata()
//   }
// }

mappingcustomerdata=()=>{
  this.setState({my_customer:this.state.customerResult.map((val) =>(val.Name))})

}

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});
 

}





  
handleSubmit = async (e)=>{
    e.preventDefault()
  //   var myfc
  //  myfc =  this.state.firstCustomer.map((data) => data.value )
  //  console.log("first cutomer mapped data",myfc)
  for (let key in this.state.firstCustomer) {
    delete this.state.firstCustomer[key].label;
  }
   await AddServicesDetails(this.state)
  console.log(this.state)
  window.location.href = "/ServicesDetails";
  }

// handleSubmit = async (e)=>{
//   e.preventDefault()
// //  const response=await AddServerDetails(this.state)
//     // this.setState({data:response})
// //  window.location.href = "/ServerDetails";
// }
  render() {
    

    console.log('multi select',this.state.firstCustomer)

 
    // if(this.state.customerResult)
    // {
       
    //   this.state.my_customer=this.state.customerResult.map((val) =>(val.Name))
    //   //this.setState({my_customer:my_cust_data})
                                                                                                 
    // }

    console.log("mapping customer data in services form for listing",this.state.my_customer)



    // if(this.state.customerResult)
    // {
    //     var data
    //   this.state.customerResult.map((val) =>{ data =  { value : val.Name, label : val.Name } 
    //                                            return  my_customer.push(data)                                                        
    //  })
    // }
    // var options;
    // if(this.state.customerResult){
    //   {this.state.customerResult.map(CR=>(
    //     console.log("dataaaaaaaaa",CR.Name),
    //      options = [
    //       { value: {CR}, label: 'option 1' },
    //       { value: 'option 2', label: 'option 2' },
    //       { value: 'option 3', label: 'option 3' }
    //     ]
    //   ))}
    // }
   

    //sending data to services table
this.props.customerData(this.state.customerResult)
 

//sending data to service table of services
   
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
                        Node Version
                        </Form.Label>
                        <Form.Control
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
                            used : e.target.value,
                             })
                            //this.handleChange() 
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
                      <Form.Label htmlFor="">Media IP : </Form.Label><br></br>

                {/* <Select isMulti options={my_customer} onChange={this.handleChange} name="firstCustomer"></Select> */}
                {/* <Select
                 isMulti 
                //  options={options}
                options={my_customer}
                  Name="mytestdata"
                 onChange={this.handleChange1} > */}
                   {/* onChange={(a,b) => {b.name = a}}  */}

                   {/* </Select> */}

         <Multiselect
       isObject={false}
        options={this.state.my_customer}
        onSelect={this.handleChange2}
        //value={this.state.firstCustomer}
        />

                    </div>
                    )}
                </div>
                    </div>
                    </div>
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