import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    class: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/train-info', { state: { searchParams: formData } });
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>From Station</label>
          <input 
            type="text" 
            name="from" 
            value={formData.from}
            onChange={handleChange}
            placeholder="From Station" 
            required
          />
        </div>
        
        <div className="form-group">
          <label>To Station</label>
          <input 
            type="text" 
            name="to" 
            value={formData.to}
            onChange={handleChange}
            placeholder="To Station" 
            required
          />
        </div>
        
        <div className="form-group">
          <label>Date of Journey</label>
          <input 
            type="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Choose Class</label>
          <select 
            name="class" 
            value={formData.class}
            onChange={handleChange}
            required
          >
            <option value="">Choose a Class</option>
            <option value="first">First Class</option>
            <option value="second">Second Class</option>
            <option value="third">Third Class</option>
          </select>
        </div>
        
        <button type="submit" className="search-button">SEARCH TRAINS</button>
      </form>
      
      <p className="info-text">Easy purchase of tickets using online payment method</p>
    </div>
  );
};

export default SearchForm;