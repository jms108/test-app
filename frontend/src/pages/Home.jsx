import SearchForm from '../components/SearchForm';
//import './Home.css';


const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="form-container">
            <h2>Welcome to ShuttleSync</h2>
            <p>Book your train tickets online with ease</p>
            <SearchForm />
          </div>
          <div className="image-container">
            <img
              src="shuttle.png"
              alt="Train illustration"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Easy Booking</h3>
          <p>Book your tickets in just a few clicks</p>
        </div>
        <div className="feature-card">
          <h3>Real-time Tracking</h3>
          <p>Track your train in real-time</p>
        </div>
        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Multiple secure payment options</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
