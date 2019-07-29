import React from "react";
import {Row,Col} from "react-bootstrap"

const Userview = (props) => {
    if (props.character.id){
    const characterProf = props.character.proficiencies.map(prof => prof.name)
    const modSTR = props.getProficiencyMod(props.character.strength)
    const modDEX = props.getProficiencyMod(props.character.dexterity)
    const modCON = props.getProficiencyMod(props.character.constitution)
    const modINT = props.getProficiencyMod(props.character.intelligence)
    const modWIS = props.getProficiencyMod(props.character.wisdom)
    const modCHA = props.getProficiencyMod(props.character.charisma)
    return(
            <Row className="justify-content-lg-center" id="userviewdiv">
                <Col sm={12}>
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
                    <img src={props.character.image_url} alt={`${props.character.image_url}`} className="avatar"/>
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
                            <tbody>
                            <tr>
                                <td className="profData">{characterProf.includes("Saving Throw: STR") ? `● ${modSTR+props.character.level}` : `○ ${modSTR}` }</td> 
                                <td>Strength</td>
                            </tr>
                            <tr>
                                <td className="profData">{characterProf.includes("Saving Throw: DEX") ? `● ${modDEX+props.character.level}` : `○ ${modDEX}` } </td>
                                <td>Dexterity</td>
                            </tr>
                            <tr>
                                <td className="profData">{characterProf.includes("Saving Throw: CON") ? `● ${modCON+props.character.level}` : `○ ${modCON}` } </td>
                                <td>Constitution</td>
                            </tr>
                            <tr>
                                <td className="profData">{characterProf.includes("Saving Throw: INT") ? `● ${modINT+props.character.level}` : `○ ${modINT}` } </td>
                                <td>Intelligence</td>
                            </tr>
                            <tr>
                                <td className="profData">{characterProf.includes("Saving Throw: WIS") ? `● ${modWIS+props.character.level}` : `○ ${modWIS}` }</td>
                                <td> Wisdom</td>
                             </tr>
                            <tr>
                                <td className="profData">{characterProf.includes("Saving Throw: CHA") ? `● ${modCHA+props.character.level}` : `○ ${modCHA}` } </td>
                                <td>Charisma</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>SAVING THROWS</div>
                    </div>
                    <div className="profSkills">
                    <table className="tableSkills">
                    <tbody>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Acrobatics<") ? `● ${modDEX+props.character.level}` : `○ ${modDEX}` }</td> 
                                <td>Acrobatics(Dex)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Animal Handling") ? `● ${modWIS+props.character.level}` : `○ ${modWIS}` } </td>
                                <td>Animal Handling(Wis)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Arcana") ? `● ${modINT+props.character.level}` : `○ ${modINT}` } </td>
                                <td>Arcana(Int)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Athletics") ? `● ${modSTR+props.character.level}` : `○ ${modSTR}` } </td>
                                <td>Athletics(Str)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Deception") ? `● ${modCHA+props.character.level}` : `○ ${modCHA}` }</td>
                                <td>Deception(Cha)</td>
                             </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: History") ? `● ${modINT+props.character.level}` : `○ ${modINT}` } </td>
                                <td>History(Int)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Insight") ? `● ${modWIS+props.character.level}` : `○ ${modWIS}` }</td> 
                                <td>Insight(Wis)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Intimidation") ? `● ${modSTR+props.character.level}` : `○ ${modSTR}` } </td>
                                <td>Intimidation(Str)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Investigation") ? `● ${modINT+props.character.level}` : `○ ${modINT}` } </td>
                                <td>Investigation(Int)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Medicine") ? `● ${modWIS+props.character.level}` : `○ ${modWIS}` } </td>
                                <td>Medicine(Wis)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Nature") ? `● ${modINT+props.character.level}` : `○ ${modINT}` } </td>
                                <td>Nature(Int)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Perception") ? `● ${modWIS+props.character.level}` : `○ ${modWIS}` }</td> 
                                <td>Perception(Wis)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Persuation") ? `● ${modCHA+props.character.level}` : `○ ${modCHA}` } </td>
                                <td>Persuation(Cha)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Religion") ? `● ${modINT+props.character.level}` : `○ ${modINT}` } </td>
                                <td>Religion(Int)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Sleight of Hand") ? `● ${modDEX+props.character.level}` : `○ ${modDEX}` } </td>
                                <td>Sleight of Hand(Dex)</td>
                            </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Stealth") ? `● ${modDEX+props.character.level}` : `○ ${modDEX}` }</td>
                                <td>Stealth(Dex)</td>
                             </tr>
                            <tr>
                                <td className="skillData">{characterProf.includes("Skill: Survival") ? `● ${modWIS+props.character.level}` : `○ ${modWIS}` } </td>
                                <td>Survival(Wis)</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>SKILLS</div>
                    </div>
                </div>
                <div className="hpInfo">
                    <div className="hpData">
                        <table>
                            <tbody>
                                <tr>
                                    <td>AC: {10+modDEX}</td>
                                </tr>
                                <tr>
                                    <td>MAX HP: {props.character.max_hp}</td>
                                </tr>
                                <tr>
                                    <td>CURRENT HP: {props.character.hitpoints}</td>
                                </tr>
                                <tr>
                                    <td>HIT DIE: {props.character.char_class.hit_die}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </Col>
            </Row> 
    )
    }else{
        return null
    }
}

export default Userview
