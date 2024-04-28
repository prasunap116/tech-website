import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import pic2 from '../images/pic2.png'
import pic4 from '../images/pic4.png'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <section>
        <div class="text">
          <div><h1>Award-Winning Managed IT Support</h1></div>
          <div><h3>TechSolutions is effective, reliable, and easy to work with. Schedule a free consultation and we’ll show you why we were named one of the top IT firms in North America</h3></div>
        </div>
      </section>
      <section>
        <div class='partner'>
          <div class='partnerText'>
          <p style={{width:"80%", display: 'block', marginLeft: 'auto', marginRight: 'auto', }}>We also partner with professional and nonprofit groups in 
            our community to give back and  help make Delaware and
            the surrounding communities a better place
          </p>
          </div>
          
          <section>
            <div class="row" style={{width:"60%", marginLeft: 'auto', marginRight: 'auto',paddingTop:'10px', }}>
                <div class="col-sm-6">
                  <div class="card" style={{height:"100%"}}>
                  <img src={pic4} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"><Link to='./it' style={{color:'red'}}>Managed IT Services</Link></h5>
                      <div class="card-text">PointCare™ Complete: An Innovative Managed IT Services Solution.
                      The people at TechSolutions work as your partner in IT.so you can put the focus on work</div>
                      
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card" style={{height:"100%"}}>
                  <img src={pic2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title"><Link to='./coit' style={{color:'red'}}>Co-Managed IT Services</Link></h5>
                      <div class="card-text">Co-Managed IT Services from TechSolutions 
                      are specially designed to address this problem without breaking your budget.</div>
                      
                    </div>
                  </div>
                </div>
            </div>
          </section>

              
        </div>
        </section>
        <section>
          <p style={{width:"80%", display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingTop:"20px"}}>
            If you’re dealing with IT support that doesn’t meet your needs the way you want it to, 
            or are operating without any support at all, your business can’t reach its full potential. Contact TechSolutions for a FREE IT consultation, and we’ll show you a better way to ensure your technology is providing your business with maximum value. Our technicians managing your IT, you can enjoy the benefits of advanced, productivity-boosting business technology without increasing your stress or resource requirements.
          </p>
        </section>
    </section>
  )
}

export default Home
