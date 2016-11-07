import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this._onSaveCorrectAnswer = this._onSaveCorrectAnswer.bind(this);
    }

    render() {

        const { answer } = this.props;

        return (
            <li className={ classNames({ 'complete': answer.correct }) }>
                <input
                    type="checkbox"
                    checked={ answer.correct } 
                    onChange={ this._onSaveCorrectAnswer }
                /> 
                { answer.text }
            </li>
        );
    }

    _onSaveCorrectAnswer() {
        TodoActions.saveCorrectAnswer(this.props.answer.id); 
    }
};

TodoItem.propTypes = {
    answer: PropTypes.object.isRequired
};

export default TodoItem;
