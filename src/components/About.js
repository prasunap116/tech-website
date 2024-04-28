import React from 'react'
import "../styles/About.css"
import person1 from "../images/person1.png"
import person2 from "../images/person2.png"
import person3 from "../images/person3.png"

const About = () => {
  return (
    <section style={{width:'70%' ,display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
      <section class="subSection">
        <div class="heading">History</div>
        
        <div class="title"> TechSolutions, Inc. by the Numbers </div>
        <div class="desc"> 
        TechSolutions, Inc. (TSI) is a team of professionals with over 150 years of combined experience
         who have expertise in seven key IT disciplines: hardware, software, cybersecurity, business continuity,
          systems integration, cloud services, and networking. We have over 2,500 workstations and servers 
          under management for over 100 clients, including leading Delaware companies in the Legal, Real Estate,
         Construction, Healthcare, Accounting Services, and Retail industries. We’ve been in operation for over 20 years,
         and in that time, we have enjoyed a retention rate of 98%, a testament to our expertise and dedication to our clients’ success.
        </div>
      </section>
      <section class="subSection">
        <div class="heading">Goals &  Mission</div>
        <div class="title">Tech Mission, Vision & Values</div>
        <div class="desc"> 
         Tech Solutions' mission, vision & values motivate 60% of Tech Solutions employees. 
        Besides getting paid, the “company mission” is the most important thing about their work for 4% of employees at 
        Tech Solutions. 10% of employees say that the main reason they stay at Tech Solutions is 
        because of the Tech Solutions company mission. When asked to whom they feel the most loyal at work, 23% of 
        employees said Tech Solutions' mission and vision. Comparably data 
        clearly shows that a focused mission statement and cohesive core company values are vital to maintaining employee alignment.
        </div>
      </section>
      <section class="subSection">
        <div class="heading"> Our Core Values</div>
        
        <div class="title">Our purpose, vision and values guide us</div>
        <div class="desc"> 
        Our diverse community of 300,000+ people are working together to help transform the companies the world relies on. 
        And when we’re not developing game-changing digital solutions for clients, we’re improving lives elsewhere by volunteering
         in local communities, fostering inclusion through our employee affinity groups and so much more.
        We apply the same intuition-driven approach we bring our clients to our own organization. We support our high-performing 
        team with the tools they need to gain insight and speed—so they can respond in real time to everyday challenges, while
         growing their skills and advancing their careers.
        Wherever they are, our people engineer intuition―with their clients, communities, colleagues and in their own lives.
        </div>
      </section>
      <section class="subSection">
        <div class="heading"> Our Leadership Team</div>
        <div class="title"></div>
        <section>
        
          
          <div>
          <div class="row">
          
              <div class="col-md-4">
                <div class="">
                  <img style={{width:"200px", display: 'block', marginLeft: 'auto', marginRight: 'auto', }} src={person1} alt='image'/>
                  <div class="card-body">
                    <h5 class="card-title">CEO</h5>
                    <span>Ravi Kumar</span><br/>
                    <span>25 years Experience</span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="">
                <img style={{width:"200px", display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={person2} alt='image'/>
                  <div class="card-body">
                    
                    <h5 class="card-title">EVP and President</h5>
                    <span>Surya</span><br/>
                    <span>20 years Experience</span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
              
                <div>
                <img style={{width:"200px",display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={person3} alt='image' />
                  <div class="card-body">
                  <h5 class="card-title">CFO</h5>
                    <span>Jatin Dalal</span><br/>
                    <span>18 years Experience</span>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
              
              
            </div>
            </div>
          </div>
        
        </section>
            
          
        
      </section>
      
    </section>
  )
}

export default About
