const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <div className="train-header">
        <h3>{train.name}</h3>
        <span className="train-number">{train.number}</span>
      </div>
      <div className="train-details">
        <div>
          <p>Departure: {train.departureTime}</p>
          <p>{train.from}</p>
        </div>
        <div className="duration">
          <p>{train.duration}</p>
        </div>
        <div>
          <p>Arrival: {train.arrivalTime}</p>
          <p>{train.to}</p>
        </div>
      </div>
      <div className="train-classes">
        {train.classes.map(cls => (
          <div key={cls.type} className="class-info">
            <span>{cls.type}</span>
            <span>৳{cls.price}</span>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainCard;