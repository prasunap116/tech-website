import React from 'react'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import pic5 from '../images/pic5.png'

const Services = () => {
  return (
    <section>
      <div class="row gy-2" style={{width:"70%", marginLeft: 'auto', marginRight: 'auto',paddingTop:'10px', }} >
          <div class="col-sm-6">
            <div class="card" style={{height:"100%"}}>
            <img src={pic4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Managed IT Services</h5>
                <div class="card-text">PointCare™ Complete: An Innovative Managed IT Services Solution.
                The people at TechSolutions work as your partner in IT.so you can put the focus on work</div>
                
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{height:"100%"}}>
            <img src={pic2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Co-Managed IT Services</h5>
                <div class="card-text">Co-Managed IT Services from TechSolutions 
                are specially designed to address this problem without breaking your budget.</div>
                
              </div>
            </div>
          </div>
      </div>

      <div class="row gy-2" style={{width:"70%", marginLeft: 'auto', marginRight: 'auto', paddingTop:"10px", paddingBottom:"10px"}}>
          <div class="col-sm-6">
            <div class="card" style={{height:"100%"}}>
            <img src={pic3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">IT Consulting</h5>
                <div class="card-text">TechSolutions provides consulting services to help owners and C-Level executives make better decisions</div>
                
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{height:"100%"}}>
            <img src={pic5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Cybersecurity</h5>
                <div class="card-text">cybersecurity integrates good business practices,
                 innovative technology, and employee training to protect clients from cyberattacks</div>
                
              </div>
            </div>
          </div>
      </div>
      
    </section>
    
  )
}

export default Services
