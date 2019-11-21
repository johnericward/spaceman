import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
import initiateBattle from "../battle/logic";

export default function handleMovement(player) {

    function getNewPostion(oldPos, direction) {

        switch (direction) {
            case "west":
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case "east":
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case "north":
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case "south":
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
            case "action":
                return []
            default:
                console.log("Hi")
        }
    }

    function getSpriteLocation(direction, walkIndex) {
        switch (direction) {
            case "south":
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`
            case "east":
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`
            case "west":
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`
            case "north":
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`
            default:
                console.log("Hi")
        }
    }

    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex
        return walkIndex >= 7 ? 0 : walkIndex + 1
    }

    function observeBounderies(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)

    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        return nextTile < 5
    }

    function monsterInteraction(oldPos, newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        return nextTile === 7
    }
    function crystalInteraction(oldPos, newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        return nextTile === 6
    }

    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex()
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                position: newPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }
        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPostion(oldPos, direction)
        if (observeBounderies(oldPos, newPos) && observeImpassable(oldPos, newPos))
            dispatchMove(direction, newPos)
        if (monsterInteraction(oldPos, newPos))
            initiateBattle();
        // if (crystalInteraction(oldPos, newPos))
        //     crystalCollected();
    }

    // const crystalCollected = () => {
    //     return ( 
    //         console.log("crystal collecting"),
    //         store.dispatch({
    //             type: "CRYSTAL_COLLECT",
    //             payload: {
    //                 crystals: +1
    //             }
    //         })
    //      );
    // }

    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 37:
                return attemptMove("west")
            case 38:
                return attemptMove("north")
            case 39:
                return attemptMove("east")
            case 40:
                return attemptMove("south")
            case 65:
                return attemptMove("west")
            case 87:
                return attemptMove("north")
            case 68:
                return attemptMove("east")
            case 83:
                return attemptMove("south")
            case 32:
                return attemptMove("action")
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })

    return player
}