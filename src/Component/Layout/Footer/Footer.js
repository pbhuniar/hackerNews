import React from 'react'
import './Footer.css';
import {Form,Button,FormControl} from 'react-bootstrap'
export default function Footer() {
    return (
        <div class="footer">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-sm-12">
                  
          <ul class="box">
              <li><a href="#"> 
Applications are open for YC Winter 2022
</a></li>
               <li><a href="#">+1-1234-567-987</a></li>
               <li><a href="#">
Applications are open for YC Winter 2022
</a></li>
            
              
  
          </ul>
          <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
          </div>

           {/* <div class="col-md-4 col-lg-4 col-sm-12">
     <ul class="box"> 
            
     <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
               <li><a href="#">Services</a></li>
            
  
          </ul>
     </div>  


    <div class="col-md-4 col-lg-4 col-sm-12">    
     
          <ul class="box"> 
             
   
     <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
               <li><a href="#">Pricing</a></li> 
  
          </ul>
      
  
  </div>   */}

 
                </div>
           
            
        </div>





    )

}
