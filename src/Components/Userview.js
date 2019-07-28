import React from "react";

const Userview = (props) => {
    return(
        <div>
            <div className="charInfo">
                <div>Name: {`${props.character.firstname} ${props.character.lastname}`}</div>
                <div>Class: {props.character.char_class.name}</div>
                <div>Eyes: {props.character.eyes}</div>
                <div>Skin: {props.character.skin}</div>
                <div>Hair: {props.character.hair}</div>
                <div>Age: {props.character.age}</div>
                <div>Height: {props.character.height}cm</div>
                <div>Weight: {props.character.weight}lbs</div>
            </div>
            <div className="subCont">
                <div className="charStats">
                    <div>
                        Strength:{props.character.strength}
                        <div>{props.getProficiencyMod(props.character.strength)}</div>
                    </div>
                    <div>
                        Dexterity:{props.character.dexterity}
                        <div>{props.getProficiencyMod(props.character.dexterity)}</div>
                    </div>
                    <div>
                        Constitution:{props.character.constitution}
                        <div>{props.getProficiencyMod(props.character.constitution)}</div>
                    </div>
                    <div>
                        Intelligence:{props.character.intelligence}
                        <div>{props.getProficiencyMod(props.character.intelligence)}</div>
                    </div>
                    <div>
                        Wisdom:{props.character.wisdom}
                        <div>{props.getProficiencyMod(props.character.wisdom)}</div>
                    </div>
                    <div>
                        Charisma:{props.character.charisma}
                        <div>{props.getProficiencyMod(props.character.charisma)}</div>
                    </div>
                </div>
                <div className="hpInfo">HP INFO</div>
            </div>
        </div>
    )
}

export default Userview