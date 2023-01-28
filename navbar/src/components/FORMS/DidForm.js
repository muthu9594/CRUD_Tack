import React, { Component } from 'react'
import { Button , Form, Modal} from 'react-bootstrap'

import { AdddidDetails} from "../../services/addApi"

 class ServerDetailsModel extends Component {

  constructor()
{
  super()
  this.state={
    listing: "",
      used: "",
   
     }
}

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}


handleSubmit = async (e)=>{
  e.preventDefault()
 await AdddidDetails(this.state)
console.log(this.state)
window.location.href = "/didDetails";
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

                  <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                  <Form.Label for="exampleInputEmail1" class="form-label">
                  Listing
                    </Form.Label>
                    <input
                    required
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
                    <input type="radio" id="yes" name="used" value="Yes"  required
                    onChange={this.handleChange}
                    />
                    <label for="yes">Yes</label>
                    <br />
                    <input type="radio" id="no" name="used" value="No"
                     onChange={this.handleChange}
                   />
                    <label for="no">No</label>
                    <br />
                  </div>
                </form>
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