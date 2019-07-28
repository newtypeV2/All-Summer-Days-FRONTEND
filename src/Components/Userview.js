import React from "react";

const Userview = (props) => {
    const characterProf = props.character.proficiencies.map(prof => prof.name)
    const modSTR = props.getProficiencyMod(props.character.strength)
    const modDEX = props.getProficiencyMod(props.character.dexterity)
    const modCON = props.getProficiencyMod(props.character.constitution)
    const modINT = props.getProficiencyMod(props.character.intelligence)
    const modWIS = props.getProficiencyMod(props.character.wisdom)
    const modCHA = props.getProficiencyMod(props.character.charisma)
    return(
        <div>
            <div className="charInfo">
                <div className="mainInfo">
                    <div>Name: {`${props.character.firstname} ${props.character.lastname}`}</div>
                    <div>Class: {props.character.char_class.name}</div>
                    <div>Level: {props.character.level}</div>
                </div>
                <div className="definingInfo">
                    <div>Eyes: {props.character.eyes}</div>
                    <div>Skin: {props.character.skin}</div>
                    <div>Hair: {props.character.hair}</div>
                    <div>Age: {props.character.age}</div>
                    <div>Height: {props.character.height}cm</div>
                    <div>Weight: {props.character.weight}lbs</div>
                </div>
            </div>
            <div className="subCont">
                <div className="charStats">
                        <div className="mainStats">
                            Strength: {props.character.strength}
                            <div className="mod"> {modSTR}</div>
                        </div>
                        <div className="mainStats">
                            Dexterity: {props.character.dexterity}
                            <div className="mod"> {modDEX}</div>
                        </div>
                        <div className="mainStats">
                            Constitution: {props.character.constitution}
                            <div className="mod"> {modCON}</div>
                        </div>
                        <div className="mainStats">
                            Intelligence: {props.character.intelligence}
                            <div className="mod"> {modINT}</div>
                        </div>
                        <div className="mainStats">
                            Wisdom: {props.character.wisdom}
                            <div className="mod"> {modWIS}</div>
                        </div>
                        <div className="mainStats">
                            Charisma: {props.character.charisma}
                            <div className="mod"> {modCHA}</div>
                    </div>
                </div>
                <div className="proficiencyInfo">
                    <div>___ Inspiration</div>
                    <div>+{props.character.level} Proficiency Bonus</div>
                    <div className="profStats">
                        <table className="tableProf">
                            <tr>
                                <td>{characterProf.includes("Saving Throw: STR") ? `● ${modSTR+props.character.level}` : "○" }</td> 
                                <td>Strength</td>
                            </tr>
                            <tr>
                            <td>{characterProf.includes("Saving Throw: DEX") ? `● ${modDEX+props.character.level}` : "○" } </td>
                            <td>Dexterity</td>
                            </tr>
                            <tr>
                            <td>{characterProf.includes("Saving Throw: CON") ? `● ${modCON+props.character.level}` : "○" } </td>
                            <td>Constitution</td>
                            </tr>
                            <tr>
                            <td>{characterProf.includes("Saving Throw: INT") ? `● ${modINT+props.character.level}` : "○" } </td>
                            <td>Intelligence</td>
                            </tr>
                            <tr>
                            <td>{characterProf.includes("Saving Throw: WIS") ? `● ${modWIS+props.character.level}` : "○" }</td>
                            <td> Wisdom</td>
                             </tr>
                            <tr>
                            <td>{characterProf.includes("Saving Throw: CHA") ? `● ${modCHA+props.character.level}` : "○" } </td>
                            <td>Charisma</td>
                            </tr>
                        </table>
                        <div>SAVING THROWS</div>
                    </div>
                    <div className="profSkills">
                        <div>SKILLS</div>
                    </div>
                </div>
                <div className="hpInfo">HP INFO</div>
            </div>
        </div>
    )
}

export default Userview