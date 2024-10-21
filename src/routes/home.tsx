import mirror from "../images/Mirror Match Info.png"
import mirrord from "../images/Mirror Match InfoDark.png"
import cchs from "../images/CCHSInfo.png"
import cchsd from "../images/CCHSInfoDark.png"
import digi from "../images/DigiArcadeInfo.png"
import digid from "../images/DigiArcadeInfoDark.png"
import vball from "../images/VBallInfo.png"
import vballd from "../images/VBallInfoDark.png"
import p2 from "../images/p2.jpg"
import { Link } from "react-router-dom"



export default function Home() {

   return (
      <div className='doc-content'>

         {/* <div className="element-content">
            <h2>Welcome!</h2>
            <p>Below is an overview of some of my projects. Visit the pages for more information.</p>
         </div> */}

         {/* <img className='prof-pic' src={p2}></img> */}
         
         <div className='element-content tile1'>
         <div className='prof-pic' id='prof' style={{height:'250px',width:'250px',borderRadius:'50%',backgroundImage:`url(${p2})`,backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <Link to='/about' className="link-header tooltip">
               <h2 id='aboutMe'>About Me <span className="tooltiptext">Learn More</span></h2>
            </Link>
            <p>Welcome! I'm a web developer that likes to focus on interaction design. I tackle problems head on with open arms. Solutions that last are found when you understand their context. I've learned the best way to make a good product is to talk to your users and empathize with them throughout the design and development process. I enjoy working on teams and have led a few myself.</p>
         </div>
         
         <div className='element-content tile2' id='mirrorMatch'>
            <Link to='/mirror' className="link-header tooltip"><h2 id='aboutMe'>Mirror Match <span className="tooltiptext">Learn More</span></h2></Link>
            <p>A design prototype for people who want a little more help getting ready.</p>
            {/* <Button href='https://matthha.github.io/gov-property-taxes/' target='blank'>Site</Button> */}
            <div><a type="button" className="btn" href='https://verdant-cell-8ec.notion.site/Mirror-Match-70a30d36bb254905935f71cfe1b112ac' target='blank'>Article</a></div>
            <img className="--light" src={mirror} alt="..." width="800" height="auto" />
            <img className="--dark" src={mirrord} alt="..." width="800" height="auto" />

         </div>

         <div className='element-content tile3'>
            <Link to='/cchs' className="link-header tooltip"><h2 id='aboutMe'>CCHS <span className="tooltiptext">Learn More</span></h2></Link>
            <p>A high school orientation app for staff to administer and track progress online.</p>
            <div>
               <a type="button" className="btn btn-outline-primary btn-sm" href='https://si-699-school.webflow.io/' target='blank'>Article</a>{'  '}
               <a type="button" className="btn btn-outline-primary btn-sm" href='https://github.com/matthha/react-amp' target='blank'>GitHub</a>
            </div>

            <img className="--light" src={cchs} alt="..." width="800" height="auto" />
            <img className="--dark" src={cchsd} alt="..." width="800" height="auto" />
         </div>

         <div className='element-content tile4'>
            <Link to='/digi' className="link-header tooltip"><h2 id='aboutMe'>DigiArcade <span className="tooltiptext">Learn More</span></h2></Link>
            <p>A cross platform gaming app for people who don't always have time to finish games.</p>
            <div><a type="button" className="btn btn-outline-primary btn-sm" href='https://github.com/SI669-classroom/si-669-final-project-teamarc' target='blank'>GitHub</a></div>
            <img className="--light" src={digi} alt="..." width="800" height="auto" />
            <img className="--dark" src={digid} alt="..." width="800" height="auto" />
         </div>

         <div className='element-content tile5'>
            <Link to='/league' className="link-header tooltip"><h2 id='aboutMe'>League Teams<span className="tooltiptext">Learn More</span></h2></Link>
            <p>An attendance and team making app for coaches to check-in and sort players.</p>
            <div>
               <a type="button" className="btn btn-outline-primary btn-sm" href='https://matthha.github.io/vball/' target='blank'>Site</a>{' '}
               <a type="button" className="btn btn-outline-primary btn-sm" href='https://github.com/matthha/vball' target='blank'>GitHub</a>
            </div>
            <img className="--light" src={vball} alt="..." width="800" height="auto" />
            <img className="--dark" src={vballd} alt="..." width="800" height="auto" />
         </div>
      </div>
   )



}