export default function League() {

   return (
   <div className="element-content">
      <h1>League Teams</h1>
      <h2>Team Management App for Coaches</h2>
      <h3>Goal:</h3>
      <p>Develop an application that is easy to use on mobile devices to add and edit players and teams.</p>
      <h3>Problem:</h3>
      <p>Coaches were using an outdated app to check-in players. The previous app would not let them edit players after they were created resulting in duplicate entries when their skill level changed. The app also did not have a search feature leaving them to scroll down a long list of contacts.</p>
      <h3>Solution:</h3>
      <ul>
         <li><strong>Mobile App - </strong>Made with Expo to allow the same functionality across different devices.</li>
         <li><strong>CRUD Operations - </strong>Coaches are able to Add and Edit contacts. They can also <strong>Search</strong> for players by first and last name.</li>
         <li><strong>UI Themes - </strong>Allowed the app to change between Light and Dark modes based on the devices settings.</li>
         <li><strong>Shuffle Feature - </strong>Coach can shuffle players automatically to make evenly ranked teams.</li>
      </ul>
      <h3>Outcome:</h3>
      <p>The features added allowed the coach to check in players much more quickly. 'Shuffle' gave them a good starting line up from which they could easily move players and see how the teams' ratings change. With better control over the teams, coaches could make the games more fair and evenly matched allowing for better player experiences.</p>
   </div>
   )
}