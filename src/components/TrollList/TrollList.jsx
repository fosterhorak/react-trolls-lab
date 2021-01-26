//import './TrollList.css';
import TrollListItem from '../../components/TrollListItem/TrollListItem';

export default function TrollList({ props }) {
    return(
        <>
            <h1>Troll List </h1>
            <div className='TrollListPage-grid'>
                {(!props.trolls.length) ? 
                    <h3>No Trolls :() </h3>
                : 
                    <>
                        {props.trolls.map(troll => 
                            <TrollListItem 
                                troll={troll} 
                                key={troll._id}
                            />
                        )}
                    </>
                }
            </div>
        </>
    );
}