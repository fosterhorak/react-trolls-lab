//import './TrollListItem.css';

export default function TrollListItem({ troll }) {

  return (
    <div className='TrollListItem panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title name'>{troll.name}</h3>
        <h3 className='panel-title breed'>{troll.breed}</h3>
        <h3 className='panel-title age'>{troll.age}</h3>
        <h3 className='panel-title temperament'>{troll.temperament}</h3>
      </div>
      <div className='panel-footer PuppyListItem-action-panel'>
      </div>
    </div>
  );


}