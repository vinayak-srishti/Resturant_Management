import React from 'react'
import '../User/Gallery.css'
import img1 from '../../Images/g-img1.jpg'
import img2 from '../../Images/g-img2.jpg'
import img3 from '../../Images/g-img3.jpg'
import img4 from '../../Images/g-img4.jpg'
import img5 from '../../Images/g-img5.jpg'
import img6 from '../../Images/g-img6.jpg'
import img7 from '../../Images/g-img7.jpg'

function Gallery() {
  return (
    <div>
      <div className='Gallery'>
    <div className='Gallery-page1'>
      <form>
        <h1>EL-DEMETER</h1>
        <p>-CHEFS SUGGESTION-</p>
      </form>
      </div>
      </div>
      <div className='Gallery-page2'>
        <p>Gallery-Collections</p>
       <div className='g-img1'>
       <img src={img1} />
       </div>
       <div className='g-img2'>
       <img src={img2} />
       </div>
       <div className='g-img3'>
       <img src={img3} />
       </div>
       <div className='g-img4'>
       <img src={img4} />
       </div>
       <div className='g-img5'>
        <img src={img5}/>
       </div>
       <div className='g-img6'>
        <img src={img6}/>
       </div>
       <div className='g-img7'>
       <img src={img7}/>
       </div>
      </div>
    </div>
    
  )
}

export default Gallery
