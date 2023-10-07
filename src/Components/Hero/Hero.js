import classes from './Hero.module.css';
import {BiLogoLinkedin} from "react-icons/bi"
import {AiFillGithub} from "react-icons/ai"

 
const HeroSection = () => {
 
  return (
    <section id='hero' className={classes["hero-section"]}>
        <div className={classes["hero-text-container"]}>
          <div className={classes["flex-center"]}>
          <span className="spaceX text-black"data-aos="fade-up"  data-aos-delay="500" data-aos-duration="500">HELLO </span>
          <h1 className={classes["title-user"]} data-aos="fade-up"  data-aos-delay="1000" data-aos-duration="1000">I'M <span className="title">Shantanu</span></h1>
          <span className="spaceX text-black" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000">Full-stack Developer</span>
          <span className="spaceX text-light" data-aos="fade-in"  data-aos-delay="1200" data-aos-duration="1000">Driven to revolutionize the world through technology.
</span>
          <div className={classes.links}>
             <span className={classes["links-hero"]}> <a target='blank' href='https://www.linkedin.com/in/shantanu-tiwari-982a78185/'><BiLogoLinkedin fontSize={"1.5rem"}/></a></span>
             <span className={classes["links-hero"]}> <a target='blank' href='https://github.com/shantanutewari12'><AiFillGithub fontSize={"1.5rem"}/></a></span>
             
            
          </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
