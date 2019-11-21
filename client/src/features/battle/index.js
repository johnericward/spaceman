import React, { Component } from 'react';
import "./style.css"
import store from '../../config/store'
// import store from "../../config/store";

class Battle extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props.canBattle);
    }

    player = store.getState().battle;
    monster1 = store.getState().map;
    // saberSlash = () => { this.monster1.hp -= this.player.saber.value };



    // handleSaber = () => { console.log("Saber Btn Pressed") }
    // handleBlaster = () => { console.log("Blaster Btn Pressed") }
    handleAttackSpell = () => { console.log("AttackSpell Btn Pressed") }
    handleHealingSpell = () => { console.log("HealingSpell Btn Pressed") }


    // const initialState = {
    //     canBattle: false,
    //     hp: 300,
    //     saber: {
    //         value: 15,
    //         uses: 200,
    //     },
    //     blaster: {
    //         value: 50,
    //         uses: 30,
    //     },
    //     attackSpell: {
    //         value: 100,
    //         uses: 5,
    //     },
    //     healingSpell: {
    //         value: 25,
    //         uses: 15,
    //     },
    // };

    handleSaber = () => {
        if (this.monster1.hp > 0) {
            if (this.player.hp > 0) {
                store.dispatch({
                    type: "UPDATE_MONSTER_HEALTH",
                    payload: {
                        minus: this.player.saber.value
                    }
                })
                // this.monster1.hp = this.monster1.hp - this.player.saber.value;
            }
        }

        // console.log(this.monster1.hp);

    }
    handleBlaster = () => {
        if (this.monster1.hp > 0) {
            if (this.player.hp > 0) {
                store.dispatch({
                    type: "UPDATE_MONSTER_HEALTH",
                    payload: {
                        minus: this.player.blaster.value
                    }
                })
            }
        }
    }

    handleAttackSpell = () => {
        if (this.monster1.hp > 0) {
            if (this.player.hp > 0) {
                store.dispatch({
                    type: "UPDATE_MONSTER_HEALTH",
                    payload: {
                        minus: this.player.attackSpell.value
                    }
                })
            }
        }
    }




    render() {
        console.log(this.monster1.hp);
        return (
            <div className="row">
                <div id="battleScreen0">
                    <div id="topRowBS">
                        <span id="saberDiv" className="battleScreen">
                            <button id="saber" onClick={this.handleSaber} >Saber</button>
                            <h5 id="saberValueText">Saber Value: {this.player.saber.value}</h5>
                            <h5 id="saberUsesText">Saber Uses: {this.player.saber.uses}</h5>
                        </span>
                        <span id="blasterDiv" className="battleScreen">
                            <button id="blaster" onClick={this.handleBlaster} >Blaster</button>
                            <h5 id="blasterValueText">Blaster Value: {this.player.blaster.value}</h5>
                            <h5 id="blasterUsesText">Blaster Uses: {this.player.blaster.uses}</h5>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div id="bottomRowBS">
                        <span id="attackSpellDiv" className="battleScreen">
                            <button id="attackSpell" onClick={this.handleAttackSpell} >Attack Spell</button>
                            <h5 id="attackSpellValueText">Attack Spell Value: {this.player.attackSpell.value}</h5>
                            <h5 id="attackSpellUsesText">Attack Spell Uses: {this.player.attackSpell.uses}</h5>
                        </span>
                        <span id="healingSpellDiv" className="battleScreen">
                            <button id="healingSpell" onClick={this.handleHealingSpell} >Healing Spell</button>
                            <h5 id="healingSpellValueText">Healing Spell Value: {this.player.healingSpell.value}</h5>
                            <h5 id="healingSpellUsesText">Healing Spell Uses: {this.player.healingSpell.uses}</h5>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Battle;



// let canBattle = store.getState().player.canBattle;



// function handleSaber(e) {

//         console.log("Saber")


// }

// const handleGun= (e) => {
//     return ( console.log("gun") );
// }




// const Battle = () => {
//     return (
//         <div>
//             <div className="battleScreen">
//                 <button onClick={handleSaber()} >Saber</button>
//             </div>
//             <div className="battleScreen">
//                 <button onClick={handleGun()} >Gun</button>
//             </div>
//         </div>
//     );
// };

// export default Battle;


