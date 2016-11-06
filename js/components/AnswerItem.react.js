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

        console.dir("A item"+answer)
        return (
            <li>
                {answer.text}
            </li>
        );
    }
};

AnswerItem.propTypes = {
    answer: PropTypes.object.isRequired
};

export default AnswerItem;
