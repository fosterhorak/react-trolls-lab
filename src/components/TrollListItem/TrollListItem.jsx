//import './TrollListItem.css';
import {Link} from 'react-router-dom';
export default function TrollListItem({ troll }) {

  return (
    <div className='TrollListItem panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title name'>{troll.name}</h3>
        <span className='panel-title other-info'>
            Breed: <strong>{troll.breed}</strong><br/>
            Age: <strong>{troll.age} </strong> <br/> 
        </span>
      </div>
      <div className='panel-footer TrollListItem-action-panel'>
          <Link to={{
            pathname: '/details',
            state: {troll}
          }} >
           <button>detail</button> 
          </Link>
          <Link to={{
            pathname: '/edit',
            state: {troll}
          }} >
           <button>edit</button> 
          </Link>

          <button>delete</button>
      </div>
    </div>
  );


}