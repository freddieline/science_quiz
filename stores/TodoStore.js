import alt from '../alt';
import merge from 'object-assign';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);

        this.todos = {};
        this.question = '';
        this.questionAndAnswers = {
            question:'',
            answers:[]
        };
    }

    update(id, update) {
        this.todos[id] = merge(this.todos[id], update);
        this.questions[id] = merge(this.questions[id], update);
    }

    onCreate(text) {
        console.log('store');
        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
        this.todos[id] = {
            id: id,
            complete: false,
            text: text
        }
    }

    onToggleComplete(id) {
        const complete = !this.todos[id].complete;
        this.update(id, { complete });
    }

    onSaveComplete() {
        
        console.log("save quetion"+this.question);
   
        this.questionAndAnswers.question = this.question;
        delete this.question;


        for(let id in this.todos) {
            this.questionAndAnswers.answers[id] = this.todos[id];
            delete this.todos[id];
        };
    }

    static areAnyComplete() {
        const { todos } = this.getState();

        for(let id in todos) {
            if (todos[id].complete === true) {
                return true;
            }
        };
        return false;
    }

    onCreateQuestion(text) {

        console.log('question text'+text);
        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.

        this.question = text;
    }

    onClearQuestion() {

        this.question = '';
    }

    onClearAnswers() {

        console.log('clear answers');
        for(let id in this.todos) {
            delete this.todos[id];
        };
    }



}

export default alt.createStore(TodoStore);
