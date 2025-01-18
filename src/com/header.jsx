
import { useState, useEffect } from "react";
const Header = () => {

    const [scrollY, setScrollY] = useState(0);

    // تحديث قيمة التمرير عند حدوثه
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY || document.documentElement.scrollTop);
      };
  

      window.addEventListener("scroll", handleScroll);
 
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
console.log(scrollY);
    return (
        <div className="dadheader ">
            <div>
                <h1>Profile <span>Online</span></h1>
            </div>
            <ul>
             <li ><a style={{
  color: scrollY <= 50 ? 'red' : ''
}} href="home">Home</a></li>
             <li ><a style={{
  color: (scrollY > 50) && (scrollY < 500) ? 'red' : ''
}} href="#home">About Me</a></li>
             <li ><a style={{
  color: (scrollY > 600) && (scrollY < 1200) ? 'red' : ''
}} href="#skills">Skills</a></li>
             <li ><a style={{
  color: scrollY > 1200 ? 'red' : ''
}} href="#project">project</a></li>
            </ul>
           
        </div>
  
    );
}

export default Header;
