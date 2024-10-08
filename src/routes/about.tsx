import mirror from "../images/Mirror Match Info.png"
import cchs from "../images/CCHSInfo.png"
import digi from "../images/DigiArcadeInfo.png"
import vball from "../images/VBallInfo.png"



export default function About() {

   return (
      <div>
         <div className='element-content tile1'>
          <h2 id='aboutMe'>About Me</h2>
          <p style={{maxWidth:'600px', alignSelf:'center', display:'inline-block'}}>Welcome! I'm a web developer that likes to focus on interaction design. I enjoy working on teams and have led a few myself. I've learned the best way to make a good product is to talk to your users and empathize with them throughout the design and development process.</p>
        </div>

        <div className='element-content tile2' id='mirrorMatch'>
          <h2>Mirror Match</h2>
          <p>A design prototype for people who want a little more help getting ready.</p>
          {/* <Button href='https://matthha.github.io/gov-property-taxes/' target='blank'>Site</Button> */}
          <div><a type="button" className="btn btn-outline-primary btn-sm" href='https://verdant-cell-8ec.notion.site/Mirror-Match-70a30d36bb254905935f71cfe1b112ac' target='blank'>Article</a></div>
          <img src={mirror} alt="..." width="800" height="auto"/>
        </div>

        <div className='element-content tile3'>
          <h2>CCHS</h2>
          <p>A high school orientation app for staff to administer and track progress online.</p>
          <div>
            <a type="button" className="btn btn-outline-primary btn-sm" href='https://si-699-school.webflow.io/' target='blank'>Article</a>{'  '}
            <a type="button" className="btn btn-outline-primary btn-sm" href='https://github.com/matthha/react-amp' target='blank'>GitHub</a>
          </div>
          
          <img src={cchs} alt="..." width="800" height="auto"/>
        </div>

        <div className='element-content tile4'>
          <h2>DigiArcade</h2>
          <p>A cross platform gaming app for people who don't always have time to finish games.</p>
          <div><a type="button" className="btn btn-outline-primary btn-sm" href='https://github.com/SI669-classroom/si-669-final-project-teamarc' target='blank'>GitHub</a></div>
          <img src={digi} alt="..." width="800" height="auto"/>
        </div>

        <div className='element-content tile5'>
          <h2>League Teams</h2>
          <p>An attendance and team making app for coaches to check-in and sort players.</p>
          <div>
            <a type="button" className="btn btn-outline-primary btn-sm" href='https://matthha.github.io/vball/' target='blank'>Site</a>{' '}
            <a type="button" className="btn btn-outline-primary btn-sm" href='https://github.com/matthha/vball' target='blank'>GitHub</a>
          </div>
          <img src={vball} alt="..." width="800" height="auto"/>
        </div>
      </div>
   )



}