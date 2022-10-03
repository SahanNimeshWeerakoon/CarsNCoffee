import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { projectFirestore } from "../Firebase/Firebase";
import NavigationBar from './NavigationBar';
import AOS from "aos";
import "aos/dist/aos.css";
function EventID() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const ref = projectFirestore.collection("event");
    useEffect(() => {
      ref.doc(id).get().then((doc) => {
        if(doc.exists) {
            setData({id: doc.id, ...doc.data()})
        }
        else {
            console.error("ERROR")
        }
      })

    }, [id])
    
 useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
        <NavigationBar/>
      <div  data-aos="fade-up" className='container mt-5'>
      <h2 className='text-center  text-uppercase'>{data.name}</h2>
      <div className='mt-4'>
     <div className='row'>
         <div  data-aos="fade-up" className='col-lg-6'>
         <img className='img-fluid' src={data.image}/>
         </div>
      <div  data-aos="fade-up" className='col-lg-6 '>
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>
     </div>
      </div>
      </div>
    </div>
  )
}

export default EventID