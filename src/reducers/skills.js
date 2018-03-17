import { AT_APP_SKILL } from '../actions/actionTypes'

const skill = (previousState = [], action) => {
    switch (action.type) {
        case AT_APP_SKILL.ADD:
            return [
                ...previousState,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case AT_APP_SKILL.TOGGLE:
            return previousState.map(skill =>
                (skill.id === action.id) ? { ...skill, completed: !skill.completed }
                    : skill
            )
        default:
            return previousState
    }
}

export default skill