import React from 'react';

import TodoStore from '../stores/TodoStore';

import Header from './Header.react';
import MainSection from './MainSection.react';
import SavedSection from './SavedSection.react';
import Footer from './Footer.react';

function getTodoState() {
    return {
        allAnswers: TodoStore.getState().answers,
        areAnyComplete: TodoStore.areAnyComplete(),
        question: TodoStore.getState().question,
        savedQuestionsAndAnswers:TodoStore.getState().questionsAndAnswers
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

        for (let key in this.state.savedQuestionsAndAnswers) {
            console.dir("App key"+key);
            console.dir("App"+this.state.savedQuestionsAndAnswers[key].answers );
        }


        return (
            <div className="container">
                <Header />
                <MainSection answers={this.state.allAnswers } 
                              question={this.state.question } 
                />
                <Footer areAnyComplete={this.state.areAnyComplete } />
                <SavedSection qAndAs={this.state.savedQuestionsAndAnswers}

                 />
            </div>
        );
    }

    _onChange() {
        this.setState(getTodoState());
    }
};

export default TodoApp;
