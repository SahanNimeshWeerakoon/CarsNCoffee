import React, {useEffect} from 'react'
import NavigationBar from './NavigationBar'
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"
import { Button } from 'react-bootstrap';
function Dashboard() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div><NavigationBar/>
    <div className='container'>
        <div  className='text-center' >
           <div style={{marginTop: '250px'}}> 
           <p style={{fontSize: '150px'}} data-aos="fade-right" className='title-text'>WELCOME</p>
            <p style={{fontSize: '100px'}} data-aos="fade-left" className='title-text-2'>CARS AND COFFEE</p>

            <Button variant='dark'>Explore More</Button>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard