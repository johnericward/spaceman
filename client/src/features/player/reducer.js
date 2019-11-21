
const initialState = {
    position: [0, 40],
    spriteLocation: "0px 0px",
    direction: "east",
    walkIndex: 0,
    name: "josephCampbell",
    // hp: 300,
    // saber: {
    //     value: 15,
    //     uses: 200,
    // },
    // blaster: {
    //     value: 50,
    //     uses: 30,
    // },
    // attackSpell: {
    //     value: 100,
    //     uses: 5,
    // },
    // healingSpell: {
    //     value: 25,
    //     uses: 15,
    // },
    // canBattle: false,

};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVE_PLAYER":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};

export default playerReducer;