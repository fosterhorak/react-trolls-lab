import React from 'react';
import {Link} from 'react-router-dom';

function TrollCard({troll}) { 
  return (
    <div className='panel panel-default troll-card'>
      <div className="panel-heading">
        <h3 className='panel-title'>{troll.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Breed: <strong>{troll.breed}</strong></dt>
          <dt>Age: <strong> {troll.age} </strong></dt>
          <dt>Temperament: <strong> {troll.temperament} </strong></dt>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'> <button>RETURN TO LIST</button> </Link>
      </div>
    </div>
  );
}

export default TrollCard;