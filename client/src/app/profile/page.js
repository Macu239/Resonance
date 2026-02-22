import ProfileHeader from '../../components/profile/ProfileHeader';
import Tweet from '../../components/profile/Tweet'; 

function App() {
  return (
    // Set the whole screen to black
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '600px', 
        borderLeft: '1px solid #2f3336', 
        borderRight: '1px solid #2f3336' 
      }}>
        <ProfileHeader />
        // Inside your main page.js
        <Tweet 
          name="Pablo" 
          handle="@Pablo" 
          content="TEST" 
          timestamp="11:00" 
        />
        <Tweet 
          name="Pablo" 
          handle="@Pablo" 
          content="TEST" 
          timestamp="11:00" 
        />
      </div>
    </div>
  );
}

export default App;