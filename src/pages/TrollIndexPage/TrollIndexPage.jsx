// import * as userService from '../../utilities/users-service';
import TrollListItem from '../../components/TrollListItem/TrollListItem';

export default function TrollIndexPage( props ) {
    
    // async function handleCheckToken() {
    //     const expDate = await userService.checkToken();
    //     console.log(new Date(expDate));
    // }
    
    return(
        <>
            <h1>Troll Index Page </h1>
            <div className='TrollListPage-grid'>
                {props.trolls.map(troll => 
                    <TrollListItem 
                        troll={troll} 
                        handleDeleteTroll={props.handleDeleteTroll}
                        key={troll._id}
                    />
                )}
            </div>
        </>
    );
}