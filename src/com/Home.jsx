import { motion } from "framer-motion";
import Img from "./img";
const Home = () => {

  return (
    <div className="dadhome"  id='home'>
      <div className="babyhome">
        <div className="about">
          <h4 className="text">Hollo, my name is</h4>
          <h1 className="text">
            Omar <span>Ahmed</span>
          </h1>
          <h3 className="text">
            I`m a <span>Front end</span> developer.
          </h3>
          <p className="textp">
            I am a passionate Front End Developer focused on designing and
            developing attractive, user-friendly interfaces. I have experience
            in HTML, CSS, and JavaScript, and I always strive to deliver
            exceptional user experiences. I work on turning ideas into
            integrated web applications, with a focus on performance and
            responsiveness across all devices. I am constantly seeking new
            opportunities to learn and grow in this dynamic field.
          </p>
       <div className="btndad">
           <a href="cv.docx" download className="btn">
             Download CV
           </a>
           <div className="flex">
              <div className="social">
           <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        position:'relative',



      }}
    >

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: "105px", 
          height: "105px",
          borderRadius: "50%", 
          position: "relative",
          overflow: "hidden", 
  

        }}
      >
   
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: "20px", 
            height: "20px",
            background: "radial-gradient(circle,rgb(248, 5, 5) 0%, rgba(76, 175, 80, 0) 70%)", // نقطة مضيئة مع تدرج
            borderRadius: "50%",
            top: "10px",
            left: "calc(50% - 10px)",
          }}
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
        }}
      >
     
        <a href="https://www.facebook.com/profile.php?id=100078418495714&locale=ar_AR" target="_blank">
            <img
          src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1735551884/3_meew2n.png"
          alt="icon"
          style={{
            width: "50px", 
            height: "50px",
            position: "absolute",
        top:"-5px",
        left:'45px'
            
          }}
        />
             </a>
       
      </div>
    </div>

           </div>
           <div className="social">
           <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        position:'relative',



      }}
    >

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: "105px", 
          height: "105px",
          borderRadius: "50%", 
          position: "relative",
          overflow: "hidden", 
  

        }}
      >
   
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: "20px", 
            height: "20px",
            background: "radial-gradient(circle,cyan 0%, rgba(16, 17, 16, 0) 70%)", // نقطة مضيئة مع تدرج
            borderRadius: "50%",
            top: "10px",
            left: "calc(50% - 10px)",
          }}
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
        }}
      >
        <a href="https://github.com/" target="_blank">
            <img
          src="https://res.cloudinary.com/djqqkgwwr/image/upload/v1737161327/Github_icon-icons.com_66788_ytw579.png"
          alt="icon"
          style={{
            width: "50px", 
            height: "50px",
            position: "absolute",
        top:"-5px",
        left:'45px'
            
          }}
        />
             </a>
       
      </div>
    </div>

           </div>
           <div className="social">
           <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        position:'relative',



      }}
    >

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: "105px", 
          height: "105px",
          borderRadius: "50%", 
          position: "relative",
          overflow: "hidden", 
  

        }}
      >
   
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: "20px", 
            height: "20px",
            background: "radial-gradient(circle,rgb(8, 115, 134) 0%, rgba(76, 175, 80, 0) 70%)", // نقطة مضيئة مع تدرج
            borderRadius: "50%",
            top: "10px",
            left: "calc(50% - 10px)",
          }}
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
        }}
      >
        <a href="https://www.linkedin.com/feed/" target="_blank">
            <img
          src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1735551883/1_oxznhe.png"
          alt="icon"
          style={{
            width: "50px", 
            height: "50px",
            position: "absolute",
        top:"-5px",
        left:'45px'
            
          }}
        />
             </a>
       
      </div>
    </div>

           </div>
           </div>
         
           
       </div>



      











      
















        </div>
        <Img/>
              </div>
      </div>
    
  );
};

export default Home;
