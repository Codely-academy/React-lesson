import './App.css';
import Friend from './components/Friend';
const App = () => {
  console.log("HELLOO APP.JS");
  const friends = [
    {
      name: 'Баясаа',
      gender: 'Эр',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'
    },
    {
      name: 'Дэлгэрцэцэг',
      gender: 'Эм',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'
    },

  ]
  return (
    <div>
      <h1>HELLOO</h1>
      <div className='container'>
        {
          friends.map((friend) => {
            return <Friend data={friend} />
          })
        }
      </div>
    </div>
  );
}

export default App;
