import React from 'react';
import Map from "../map";
import Player from "../player";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";
import Battle from "../battle/index";
import { connect } from "react-redux"; 
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

// import Battle from "../battle";

// let canBattle = store.getState().battle.canBattle;


const World = props => {
    // console.log(canBattle);
    
    store.dispatch({
        type: "ADD_TILES",
        payload: {
            tiles,
        }
    })
    return (
        <div
            style={{
                position: "relative",
                width: "800px",
                height: "400px",
                margin: "20px auto",
            }}>

            <Map />
            <Player />
            {/* <Battle canBattle={store.getState().battle.canBattle} /> */}
            {store.getState().battle.canBattle ? <Battle/> : <h1>{""}</h1>}

            
        </div>
    );

}

// Login.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    canBattle: state.battle.canBattle,

});

export default connect(mapStateToProps)(World);