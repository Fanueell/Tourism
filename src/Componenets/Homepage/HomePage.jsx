import { Link } from 'react-router-dom';
import './Home.css';



const HomePage = () => {
  return (
    <div className='home'>
      <div id='content'> 
        <h1 className="title">Explore Ethiopia</h1>
        <p className='lead' >
          <b>Welcome to Ethiopia, a land of ancient history, 
          breathtaking landscapes, and diverse cultures.
          Ethiopia has something extraordinary for every traveler.</b>
        </p>
      </div>
      <div className='button'>
      <Link to="/about">
        <button className="btn1">Learn More</button>
      </Link>
      </div>
    
    </div>
  );
};

export default HomePage;
