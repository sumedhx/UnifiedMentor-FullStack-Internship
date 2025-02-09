import './App.css'
import Navbar from './components/Navbar'
import pic from './assets/Img/profilePic.jpg'
import ProfileBox from './components/profileBox'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";
import ProjectCard from './components/ProjectCard';
import Title from './components/Title';

function App() {

  const downloadResume = () =>{
    const resumeURL = `https://drive.google.com/file/d/1a2CEs3t_79FQPiJNikujr3c9-TiZ5dw-/view?usp=drive_link`
    window.open(resumeURL,'_blank')
  }

  return (
    <div className="bodyContainer">
      
      <Navbar />

      <section className="hero">
        <div className="heroContainer">
          <div className="heroText">
            <h1>Hello, I'm <span className='name'>Sumedh</span></h1>
            <h1>Front-End Developer</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga rem laudantium sequi quo, minima, fugit velit autem necessitatibus aspernatur dolore doloribus ipsam accusantium. Porro voluptate voluptas doloremque natus architecto.
            Neque labore deserunt dol!</p>
            <button className="resumeBtn" onClick={downloadResume}>Download Resume →</button>
          </div>
          <div className="heroImg">
            <img src={pic} alt="" />
          </div>
        </div>
        <div className="profiles">
           <ProfileBox icon={<AiFillGithub size='40' />} link="https://github.com/sumedhx" title="Github"  />
           <ProfileBox icon={<AiFillLinkedin size='40'/>} link="https://www.linkedin.com/in/sumedhsuralkar/" title="LinkedIn"  />
           <ProfileBox icon={<AiFillInstagram size='40' />} link="https://www.instagram.com/sumedhs_/" title="Instagram" desc="Take a Look" />
           <ProfileBox icon={<AiFillTwitterCircle size='40' />} link="https://x.com/sumedhsuralkar" title="Twitter" desc="Take a Look" />
        </div>
      </section>

      <section className="projectSection">
        <Title title={" ✦ Projects ✦"} />
        <div className="projectContainer">
          <ProjectCard 
            title="Tiptap Url Shortner" 
            desc="A Custom extension for Tiptap editor to shorten url" 
            link='https://github.com/sumedhx/TiptapEditor-Custom-URL-Shortener'
          />
          <ProjectCard 
            title="Blog Website" 
            desc="Full Stack Blog website" 
            link='https://github.com/sumedhx/TiptapEditor-Custom-URL-Shortener'
          />
          <ProjectCard 
            title=" Todo-WebApp " 
            desc="A Todo WebApp created using React.js" 
            link='https://github.com/sumedhx/Todo-WebApp'
          />
          <ProjectCard 
            title=" Restaurant Website" 
            desc="" 
            link='https://github.com/sumedhx/Restaurant-Website'
          />
          <ProjectCard 
            title=" Bootstrap Landing Page" 
            desc="Landgin Page using Bootstrap 5" 
            link='https://github.com/sumedhx/Bootstrap-Landing-Page'
          />
        </div>
      </section>

      <section className="contact">
          <Title title='Contact' />
          <div className="contactContainer">
          <ProfileBox 
            icon={<AiFillLinkedin size='40'/>} 
            link="https://www.linkedin.com/in/sumedhsuralkar/" 
            title="LinkedIn"  
          />
          </div>
      </section>
      <footer>
         <p> -- 🦋 --</p>
      </footer>
    </div>
  )
}

export default App
