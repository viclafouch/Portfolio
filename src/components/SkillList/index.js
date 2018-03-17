import React from 'react'
import Skill from '../Skill'

const SkillList = ({ skill, onSkillClick }) => (
    <ul>
        {skills.map((skill, index) => (
            <Skill key={index} {...skill} onClick={() => onSkillClick(index)} />
        ))}
    </ul>
)

export default SkillList