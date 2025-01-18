
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import GitHubIcon from '@mui/icons-material/GitHub';
const Project = () => {
 
 const arr =[
    {
      img:'https://res.cloudinary.com/dbf32cjv8/image/upload/v1736380609/das_ebhuo3.png',
      title:'Dashboard',
      description:'User Panel This panel was created to display the use of the User with a diagram and explain its use for the site     ',
      tools:[
        'react','material-ui','nivo.js'
      ]
     ,github:'https://github.com/Shadow-Zero-0/dashboard',
     live:'https://dashboard1-ochre.vercel.app/'
    },
    {
      img:'https://res.cloudinary.com/dbf32cjv8/image/upload/v1736553810/sdfds_bfvypy.png',
      title:'E-commerce',
      description:'A complete online store that contains a range of products and you can buy from it. It contains products for women and men',
      tools:[
        'react','material-ui','Strapi','Swiper.js'
      ]
     ,github:'https://github.com/Shadow-Zero-0/front-end-E-commerce',
     live:'https://front-end-e-commerce-rose.vercel.app/'
    },
    {
      img:'https://res.cloudinary.com/dtomtlfcs/image/upload/v1725139919/Captureasdwd_hm9n5o.png',
      title:'E-commerce',
      description:'A complete online store that contains a range of products and you can purchase from it. It specializes in selling ready-made clothing for men',
      tools:[
        'react','material-ui','Node.js API'
      ]
     ,github:'https://github.com/Shadow-Zero-0/front-end',
     live:'https://front-end-flax-eta.vercel.app/'
    },
    {
      img:'https://res.cloudinary.com/dtomtlfcs/image/upload/v1725139921/asdwdd_fhr2wz.png',
      title:'Social networking site',
      description:'Front facing social networking site with dark mode feature',
      tools:[
        'react','material-ui'
      ]
     ,github:'https://github.com/Shadow-Zero-0/Material-UI-',
     live:'https://material-ui-eta-indol.vercel.app/'
    },
    {
      img:'https://res.cloudinary.com/dtomtlfcs/image/upload/v1725139907/adqwdqa_cpxzbp.png',
      title:'Log in and log out',
      description:'Login and logout system using Firebase with a way to recover the password',
      tools:[
        'react','firebase-Authentication'
      ]
     ,github:'https://github.com/Shadow-Zero-0/firebase-Authentication',
     live:'https://firebase-authentication-six-chi.vercel.app/'
    },
    {
      img:'https://res.cloudinary.com/dtomtlfcs/image/upload/v1725139907/asdcsa_lpimoi.png',
      title:'Sending data',
      description:'Sending data to the database For Firebase, modifying it and displaying it on the site, and adding multiple languages, Arabic and English',
      tools:[
        'react','Firebase_FireStore'
      ]
     ,github:'https://github.com/Shadow-Zero-0/Firebase_FireStore',
     live:'https://firebase-fire-store.vercel.app/'
    },
 ]


 
    return (
        <div className='dadskills project' id='project'>
          <h1 className="titleskills">My Projects</h1>
  <div className='dadcard'>
 {arr.map((item) => {
  return(
    <div key={item.description} className='cardproject'>
    <img src={item.img} alt="" />
   <div className="tools">
     
      {item.tools.map((item) => {
        return(
           <p key={item} className='p'>{item}</p>
        )
      })}

    </div>
      <div className="des">
    <h2>
    {item.title}
    </h2>
    <p>{item.description}</p>
    </div>
 <div className="link">
    <a className='linknev' target="_blank" href={item.github}><GitHubIcon/></a>
    <a className='linknev' target="_blank" href={item.live}><LogoutIcon/></a>
    </div> 

    </div>
   
  )
 })}
  </div>
          </div>
    );
}

export default Project;
