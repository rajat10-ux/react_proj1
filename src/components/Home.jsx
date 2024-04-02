import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
 <>
          <div className='home' id='home'>
<main>
        <h1>Techystar</h1>
        <p>solution to all problems</p>
</main>
  </div>
  <div className='home2'>
  <img src={vg} alt='graphics'/>
  <div>
        <p>
             we are your one and only solution to tech problem
             you face everyday.we are leading tech company whose aim 
             is to increase the problem ability in children.  
        </p>
  </div>
  </div>
  <div className='home3' id='about'>
<div>
        <h1>who we are</h1>
        <p>At our core, we are a company driven by innovation, integrity, and a relentless pursuit of excellence. We believe in fostering a culture of collaboration, where every individual's unique talents and perspectives are valued and embraced. Our commitment to quality and customer satisfaction is unwavering, guiding every decision and action we take. We strive to make a positive impact on the world, not only through our products and services but also through our responsible business practices and community engagement initiatives. Together, we embody a spirit of resilience, adaptability, and forward-thinking, propelling us towards success while staying true to our values.
</p>
</div>
  </div>
  <div className='home4' id='brands'>
<div>
        <h1>brands</h1>
        <article>
               <div style={{animationDelay:"0.3s"}}>
               <AiFillGoogleCircle/>
               <p>Google</p>
               </div> 
               <div style={{animationDelay:"0.5s"}}>
               <AiFillAmazonCircle/>
               <p>Google</p>
               </div> 
               <div style={{animationDelay:"0.7s"}}>
               <AiFillYoutube/>
               <p>Google</p>
               </div> 
               <div style={{animationDelay:"1s"}}>
               <AiFillInstagram/>
               <p>Instagram</p>
               </div> 
        </article>
</div>
  </div>
 </>
  );
}

export default Home
