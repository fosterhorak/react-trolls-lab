// import * as userService from '../../utilities/users-service';
import TrollList from '../../components/TrollList/TrollList';

export default function TrollIndexPage( props ) {
    
    // async function handleCheckToken() {
    //     const expDate = await userService.checkToken();
    //     console.log(new Date(expDate));
    // }
    
    return(
        <>
            <h1>Troll Index Page</h1>
            <TrollList trolls={props.trolls}/>
            {/*<button onClick={handleCheckToken}>Check When My Login Expires</button>*/}
        </>
    );
}