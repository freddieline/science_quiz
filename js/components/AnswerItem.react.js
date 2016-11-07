import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';

class AnswerItem extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        const {answer} = this.props

        return (
            <li>
                <input type="checkbox" 
                checked={ answer.correct } 
                />
                {answer.text}
            </li>
        );
    }
};

AnswerItem.propTypes = {
    answer: PropTypes.object.isRequired
};

export default AnswerItem;
