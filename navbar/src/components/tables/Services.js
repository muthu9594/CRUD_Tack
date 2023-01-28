import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Models from './Models';

import { getCustomerDetails, getServicesDetails } from '../../services/getApi';
import { deleteServicesDetails } from '../../services/deleteApi';


import Servicesform from "../FORMS/ServicesForm"

import EditServicesForm from "../EditFormss/EditServicesForm"

class Services extends Component {

    
  state={
    result:[],
    customerResult:[],
    selectedOption:'',
    showDropdown:''
}






  componentDidMount(){
    const fetchData=async()=>{
      const response=await getServicesDetails();
       const customersResponse = await getCustomerDetails();
       this.setState({customerResult:customersResponse.data})
    
      this.setState({result:response.data})
      console.log("customer res",customersResponse)
       console.log("services",this.state.result)
       console.log("customer",this.state.customerResult)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getServicesDetails();
      
      }
      fetchData()
      
    }
  }



   //delete api
 delete = async(id)=>{
  await deleteServicesDetails(id);
    const response=await getServicesDetails();
  
    this.setState({result:response.data})
    console.log("All daaaaataa",this.state.result)
    
  
}


yesNodata=(selectedOptions)=>{
  
}
  

  render() {
    console.log("customer data",this.state.result)

    const customerData=async(customerdata)=>{
     // this.setState({customerResult:customerData})
      this.state.customerResult=await customerdata;

      console.log("Data coming from servicesForm",this.state.customerResult)
    }


  //  const serviceData=async(selectedOption,showDropdown)=>{
  //     this.setState({selectedOption:selectedOption,showDropdown:showDropdown})
  //   }
    
    
    return (
      
      <div className="main">
        <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <Servicesform customerData={customerData} />
          {/* {console.log("data from services for toggle", this.state.selectedOption,this.state.showDropdown)} */}
          {/* <Models></Models> */}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>NODE VERSION</th>
              <th>DESCRIPTION</th>
              <th>PORT</th>
              <th>SERVICE TYPE</th>
              <th>FIRST CUSTOMER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>

          {
              this.state.result.map((res,i)=>(
                console.log("map",res),
              
                <tr>
                  <td>{res.Name}</td>   
                  <td>{res.NodeVersion}</td>
                  <td>{res.Description}</td>
                  <td>{res.Port}</td>
                  <td>{res.ServiceType}</td>
                  <td>
                  {res.firstCustomer.map((val,i)=>(
                    //  <td>{val.label},</td> 
                    // <td>{res.firstCustomer.length === i+1   ?  val.value :  `${val.value},`}</td>
                    <td>{res.firstCustomer.length === i+1   ?  val:  `${val},`}</td>  
                  ))}
                  </td>
                 
                  <td>
                  <tr>
                <td>
                  <DeleteOutlineIcon onClick={()=>this.delete(res._id)} tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
               <EditServicesForm
                Name={res.Name}
                NodeVersion={res.NodeVersion}
                Description={res.Description}
                Port={res.Port}
                ServiceType={res.ServiceType} 
                firstCustomer={res.firstCustomer}
                id={res._id}
                customerRes={this.state.customerResult}
               
                />
                  
                </td>
              </tr>
                {/* <Button variant="danger" style={{ float: "right" , background : "red"}} onClick={()=>this.delete(res._id)}
>
                  Delete Details
                  </Button>{" "} */}
                </td>
                </tr>

             
              ))}
            {/* <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <tr  className=''>
                <td>
                  <DeleteOutlineIcon tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                <DriveFileRenameOutlineIcon
                    onClick={this.editHandler}
                    style={{ color: "blueviolet", cursor : "pointer" }}
                  />
                  
                </td>
              </tr>
            </tr>
            
            */}
           
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Services;
