import React from 'react';

import TodoStore from '../stores/TodoStore';

import Header from './Header.react';
import MainSection from './MainSection.react';
import SavedSection from './SavedSection.react';
import NewQuestionOptions from './NewQuestionOptions.react';

function getTodoState() {
    return {
        allAnswers: TodoStore.getState().answers,
        correctAnswerProvided: TodoStore.correctAnswerProvided(),
        question: TodoStore.getState().question,
        savedQuestionsAndAnswers:TodoStore.getState().questionsAndAnswers,
        showEditable:TodoStore.getState().showEditable,
        finished:TodoStore.getState().finished,
        score:TodoStore.getState().score,
        incorrectAnswers:TodoStore.getState().incorrectAnswers

    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.listen(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.unlisten(this._onChange);
    }

    render() {

        console.log("num incorrect"+Object.keys(this.state.incorrectAnswers).length);

        return (
            <div className="container">
                <Header showEditable = {this.state.showEditable} />
                <MainSection answers={this.state.allAnswers } 
                              question={this.state.question }
                />
                <NewQuestionOptions 
                    correctAnswerProvided={this.state.correctAnswerProvided } 
                    showEditable = {this.state.showEditable}
                    />
                <SavedSection qAndAs={this.state.savedQuestionsAndAnswers} 
                            showEditable={this.state.showEditable}
                            finished={this.state.finished}
                            score={this.state.score}
                            incorrectAnswers={this.state.incorrectAnswers}
                />

                 
            </div>
        );
    }

    _onChange() {
        this.setState(getTodoState());
    }
};

export default TodoApp;
