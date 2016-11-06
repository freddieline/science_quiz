import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';
import AnswerItem from './AnswerItem.react';

class QuestionAndAnswerItem extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        let aDisplay=[];

        console.dir(this.props);

        var answers  = this.props.qAndA.answers;
        console.dir(answers);
        

        for (let key in answers) {
            console.log("QAAI answer text"+answers[key].text );
            aDisplay.push(<AnswerItem key={ key } answer={ answers[key] } />);
        }

        return (
            <div>
                <li>
                    {this.props.qAndA.question}
                </li>
                <ul>
                    { aDisplay }
                </ul>
            </div>
        );
    }
};

QuestionAndAnswerItem.propTypes = {
    qAndA: PropTypes.object.isRequired
};

export default QuestionAndAnswerItem;
