import Tweet from './Tweet';

function Feed() {
  return (
    <div className="feed">
      <Tweet text="Hello world! This is my first React tweet." />
      <Tweet text="Building a MERN stack project is actually kind of fun." />
      <Tweet text="Wait, why is my CSS not working?" />
    </div>
  );
}

export default Feed;