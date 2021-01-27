import React, {useState, useRef, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';


export default function EditTrollPage(props){
  const location = useLocation();

  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.troll)

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateTroll(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Edit Troll</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Troll's Name (required)</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Troll's Breed (required)</label>
          <input
            className="form-control"
            name="breed"
            value={ formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Trolls's Age (required)</label>
          <input
            className="form-control"
            name="age"
            value={ formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Trolls's Temperament (required)</label>
          <input
            className="form-control"
            name="temperament"
            value={ formData.temperament}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="form-btn"
          type="submit"
          disabled={invalidForm}
        >
          UPDATE TROLL
        </button>
      </form>
      <Link to='/'> <button className="form-btn-cancel"> CANCEL </button> </Link>

    </>
  );
  
}