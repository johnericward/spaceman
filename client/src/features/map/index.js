import React from 'react';
import { connect } from "react-redux"; 
import { SPRITE_SIZE } from "../../config/constants";
import "./style.css";

function getTileSprite(type) {
  // eslint-disable-next-line default-case
  switch (type) {
    case 0:
      return "empty"
    case 1:
      return "grass"
    case 2:
      return "chest"
    case 3:
      return ""
    case 5:
      return "crate"
    case 6:
      return "crystal"
    case 7:
      return "monster"
  }

}

const MapTile = (props) => {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}
  />
}

const MapRow = (props) => {
  return <div className="mapRow"
  >
    {
      props.tiles.map(tile =>
        <MapTile tile={tile}
        />)
    }
  </div>
}

const Map = props => {
  return (
    <div className="map" style={{
      position: "relative",
      top: "0px",
      left: "0px",
      width: "800px",
      height: "560px",
      // border: "4px solid white",

    }} >
      {
        props.tiles.map(row => <MapRow tiles={row} />)
        // (row => row.map(tile => <MapTile value={tile} />))
        // props.tiles.map(tile => <MapTile value={tile} />)

      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(mapStateToProps)(Map);