//import './TrollListItem.css';
import {Link} from 'react-router-dom';
export default function TrollListItem({ troll }) {

  return (
    <div className='TrollListItem panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title name'>{troll.name}</h3>
        <h5 className='panel-title other-info'>
            Breed: {troll.breed}<br/>
            Age: {troll.age} <br/> 
            Temperament: {troll.temperament} 
        </h5>
      </div>
      <div className='panel-footer TrollListItem-action-panel'>
          <Link to={{
            pathname: '/details',
            state: {troll}
          }} >
           <button>detail</button> 
          </Link>
          
          
          <button>edit</button>
          <button>delete</button>
      </div>
    </div>
  );


}