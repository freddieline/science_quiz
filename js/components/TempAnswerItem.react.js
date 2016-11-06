import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this._onToggleComplete = this._onToggleComplete.bind(this);
    }

    render() {


        console.dir("todo props"+this.props);
        const { answer } = this.props;

        return (
            <li className={ classNames({ 'complete': answer.complete }) }>
                <input
                    type="checkbox"
                    checked={ answer.complete } 
                    onChange={ this._onToggleComplete }
                /> 
                { answer.text }
            </li>
        );
    }

    _onToggleComplete() {
        TodoActions.toggleComplete(this.props.answer.id); 
    }
};

TodoItem.propTypes = {
    answer: PropTypes.object.isRequired
};

export default TodoItem;
