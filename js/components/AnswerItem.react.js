import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';


class AnswerItem extends React.Component {
    constructor(props) {
        super(props)
        this._chooseAnswer=this._chooseAnswer.bind(this);
    }

    _chooseAnswer(){

        var qA = {
            question:this.props.questionNumber,
            answer:this.props.answer.id
        }
        TodoActions.chooseAnswer(qA);
    }


    _changeCorrectAnswer(){

    }

    render() {

        const {answer} = this.props;


        var inputBox = !this.props.showEditable ? 
            (<input type="checkbox" onChange = {this._chooseAnswer} />): "";

        return (
            <li>
                {inputBox}
                {answer.text}
            </li>
        );
    }
};

AnswerItem.propTypes = {
    answer: PropTypes.object.isRequired
};

export default AnswerItem;
