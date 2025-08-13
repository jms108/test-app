import { useLocation } from 'react-router-dom';
import TrainCard from '../components/TrainCard';
//import './TrainInfo.css';

const TrainInfo = () => {
  const location = useLocation();
  const searchParams = location.state?.searchParams || {};

  // Mock train data - in a real app, this would come from an API
  const trains = [
    {
      id: 1,
      name: "Train-7:15",
      number: "701",
      from: "Dhaka",
      to: "Chittagong",
      departureTime: "07:15 AM",
      arrivalTime: "8:30 AM",
      duration: " 1hour 15m",
      classes: [
        { type: "First Class", price: 1200 },
        { type: "Second Class", price: 800 },
        { type: "Third Class", price: 500 }
      ]
    },
    {
      id: 2,
      name: "Train: 7:40",
      number: "703",
      from: "Dhaka",
      to: "Chittagong",
      departureTime: "07:40 AM",
      arrivalTime: "09:15 AM",
      duration: "1h 30m",
      classes: [
        { type: "First Class", price: 1100 },
        { type: "Second Class", price: 750 },
        { type: "Third Class", price: 450 }
      ]
    }
  ];

  return (
    <div className="train-info-page">
      <h2>Available Trains</h2>
      <div className="search-summary">
        <p>From: <strong>{searchParams.from || 'Not specified'}</strong></p>
        <p>To: <strong>{searchParams.to || 'Not specified'}</strong></p>
        <p>Date: <strong>{searchParams.date || 'Not specified'}</strong></p>
        <p>Class: <strong>{searchParams.class || 'Not specified'}</strong></p>
      </div>
      <div className="trains-list">
        {trains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default TrainInfo;