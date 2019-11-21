import React from 'react';
// import { relative } from 'path';
import walkSprite from "./player_walk.png";
import { connect } from "react-redux";
import handleMovement from "./movement";

const Player = props => {
    return (
        <div className="player"
            style={{
                position: "absolute",
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url("${walkSprite}")`,
                backgroundPosition: props.spriteLocation,
                width: "40px",
                height: "40px",
                backgroundSize: "320px 160px"
            }}
        />
    );
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));