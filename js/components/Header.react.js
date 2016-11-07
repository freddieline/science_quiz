import React from 'react';

import TodoActions from '../actions/TodoActions';
import QuestionInput from './QuestionInput.react';
import AnswersInput from './AnswersInput.react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Question</h1>
                <QuestionInput
                    onSave={ this.onCreateQuestion } 
                />
                <h1>Answers</h1>
                <AnswersInput
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
