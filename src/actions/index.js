import { AT_APP_SKILL } from './actionTypes'

let nextTodoId = 0

export const addSkill = text => {
    return {
        type: AT_APP_SKILL.ADD,
        id: nextTodoId++,
        text
    }
}

export const toggleTodo = id => {
    return {
        type: AT_APP_SKILL.TOGGLE,
        id
    }
}