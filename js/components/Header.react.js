import React from 'react';

import TodoActions from '../actions/TodoActions';
import QuestionInput from './QuestionInput.react';
import AnswersInput from './AnswersInput.react';

class Header extends React.Component {
    render() {

        var toggleShowEditable = this.props.showEditable ? "" : "hide";


        return (
            <div>
                <h1 className={toggleShowEditable} >Question</h1>
                <QuestionInput
                    showEditable={this.props.showEditable}
                    onSave={ this.onCreateQuestion } 
                />
                <h1 className={toggleShowEditable} >Answers</h1>
                <AnswersInput
                    showEditable={this.props.showEditable}
                    onSave={ this.onCreateAnswer } 
                />

            </div>
        );
    }

    onCreateAnswer(newTodo) {
        TodoActions.createAnswer(newTodo);
    }

    onCreateQuestion(newTodo) {
        TodoActions.createQuestion(newTodo);
    }


};

export default Header;
