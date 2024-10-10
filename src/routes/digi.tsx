export default function Digi() {

   return (
   <div className="element-content">
      <h1>DigiArcade</h1>
      <h2>Case Study: Cross-Platform Mobile Gaming App</h2>
      <h3>Goal:</h3>
      <p>Our objective was to develop a cross-platform mobile application that enables users to play games at their own pace. To achieve this, we utilized React Native for building the mobile app and Google Firebase for backend services, ensuring a seamless experience across different devices.
      </p>
      <h3>Problem:</h3>
      <p>The project was led by myself and two classmates, each responsible for developing a unique game within the app. My task was to design and implement the Dots and Boxes game. A key challenge was creating a flexible and reusable codebase that would allow my teammates to integrate their games using a shared framework. The goal was to maintain a clean, concise code structure while supporting different game types and ensuring smooth functionality.</p>
      <h3>Solution:</h3>
      <p>To address the challenge, we implemented a modular architecture where the app's core logic managed game states through a shared state object. Here’s a breakdown of our approach:</p>
      <ul className="reg-list">
         <li><strong>Modular Code Design:</strong> We developed a skeleton codebase that could be easily extended for different games. This modular approach allowed us to centralize game logic and state management, minimizing redundant code and promoting reusability.</li>
         <li><strong>State Management with Firebase:</strong> We used Google Firebase to handle game state persistence. Each game's state, including turn-taking and scoring, was stored in Firebase, facilitating asynchronous gameplay. This setup allowed real-time updates and ensured that the state was consistent across devices.</li>
         <li><strong>Unified State Access:</strong> The app was designed to retrieve and update game states using a consistent set of functions. By leveraging Firebase’s read and write capabilities, we ensured that all games could access and modify their respective states using a standardized approach. Destructuring was employed to efficiently manage game state updates, streamlining the process and reducing code complexity.</li>
         <li><strong>Dynamic Game Loading:</strong> The app dynamically loads and manages games based on the user's activity. It fetches the current state of each game from Firebase and applies it accordingly, providing a seamless experience as users switch between games or return to previously played ones.</li>
      </ul>
      <h3>Outcome:</h3>
      <p>The implementation resulted in a robust, cross-platform mobile app where users could enjoy various games with minimal latency and consistent performance. The modular design and Firebase integration allowed for easy expansion and maintenance, while the unified state management ensured a smooth gaming experience across different platforms.</p>
   </div>
   )
}