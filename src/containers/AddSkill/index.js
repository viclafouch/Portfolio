import { connect } from 'react-redux'
import { addSkill } from '../../actions'
import React, { Component } from 'react'
import SkillList from '../ShowSkill.js';

class AddSkill extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let input;

        return (
            <div>
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            if (!input.value.trim()) {
                                return
                            }
                            this.props.onSubmit(input.value)
                            input.value = ''
                        }}
                    >
                        <input
                            ref={node => {
                                input = node
                            }}
                        />
                        <button type="submit">
                            Add Todo
        </button>
                    </form>
                </div>
                <SkillList />
            </div>

        )
    }


}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: text => dispatch(addSkill(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSkill)