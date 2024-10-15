import './Aboutpage.css'
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='Aboutpage'>
    <div className='container'>
      <h1 className="title">About Us</h1>
      <b><p className='p'>We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.</p></b>
      
      <Link to="/">
        <button className='btn1'>Back to Home</button>
      </Link>
    </div>
    </div>
  );
};

export default AboutPage;
