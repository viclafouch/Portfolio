import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import Skill from '../../components/Skill';

class SkillList extends Component {

    constructor(props) {
        super(props)
        console.log(this.props);

    }

  render() {
    return (
      <div>
            {this.props.skills.map((skill, index) => (
                <Skill onClick={ () => this.props.onClick(skill.id) } key={index} {...skill} />
            ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        skills: state.skill
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillList)
