export default function Mirror() {

   return (
   <div className="element-content">
      <h1>Mirror Match</h1>
      <div><a type="button" className="btn" href='https://verdant-cell-8ec.notion.site/Mirror-Match-70a30d36bb254905935f71cfe1b112ac' target='blank'>Article</a></div>
      <h2>Case Study: IoT System for Enhancing Morning Routines</h2>
      
      <h3>Goal:</h3>
      <p>Design and prototype an Internet of Things (IoT) system tailored for 20-30-year-olds to enhance their home environment. Our focus was on creating a system that could be implemented in the near future and would appeal to tech-savvy young adults who are more likely to embrace new technology.
      </p>
      <h3>User Research: </h3>
      <p>To ensure our solution addressed real user needs, we conducted comprehensive research, including:</p>
      <ul>
         <li><strong>Survey:</strong> We gathered insights from over 60 respondents.</li>
         <li><strong>Diary Study:</strong> Users documented their daily routines and interactions with technology.</li>
         <li><strong>User Enactments:</strong> Participants demonstrated their morning routines to identify pain points and technology interactions.</li>
      </ul>
      <p>The analysis revealed that users disliked technology making decisions for them. Instead, they preferred receiving information and relevant suggestions that they could choose to act upon.
      </p>
      <h3>Solution:</h3>
      <p>Our solution, named Mirror Match, was designed to enhance users' morning routines with the following components:</p>
      <p>
         <ul className="reg-list">Prototyping and Design:
               <li><strong>Figma:</strong> We created detailed screens and interactive prototypes using Figma to visualize the user interface and functionality.</li>
               <li><strong>Wizard of Oz Testing:</strong> We simulated the functionality of the system to gather user feedback and refine the prototype before full development.</li>
         </ul>
      </p>
      <p>
         <ul className="reg-list">Technical Implementation:
               <li><strong>NeoPixel Lights:</strong> We integrated NeoPixel lights controlled via an Arduino/Photon setup to provide visual feedback and recommendations.</li>
               <li><strong>Mirror Match:</strong> This system helps users get ready by offering outfit recommendations based on the day's weather and personal preferences, displayed through a smart mirror interface.</li>
         </ul>
      </p>
      <h3>Outcome:</h3>
      <p>Mirror Match successfully addressed users' desire for information and choice without making autonomous decisions. The prototype effectively demonstrated the potential of our IoT system to streamline morning routines and provide personalized outfit suggestions. Feedback from our testing phase informed further refinements, ensuring the system is both user-friendly and practical for future implementation.</p>
   </div>
   )
}