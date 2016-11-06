import alt from '../alt';
import merge from 'object-assign';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);

        this.answers = {};
        this.question = {};
        this.questionsAndAnswers = {};
    }

    update(id, update) {
        this.answers[id] = merge(this.answers[id], update);
    }

    onCreate(text) {

        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        this.answers[id] = {
            id: id,
            complete: false,
            text: text
        }
    }

    onToggleComplete(id) {
        const complete = !this.answers[id].complete;
        this.update(id, { complete });
    }

    onSaveComplete() {
        
        var ans={};

        for(let id in this.answers) {
            console.log("astore a "+this.answers[id].text);
            ans[id] = this.answers[id];    
        };

        this.answers ={};

        var currentQuestionAndAnswer = {
            question: this.question.text,
            answers:ans
        };
        var key = this.question.id;
        
        this.questionsAndAnswers[key] = currentQuestionAndAnswer;


        console.dir("astore q "+currentQuestionAndAnswer.question);
        console.dir("astore "+this.questionsAndAnswers[key]);
        this.question = {};

    }

    static areAnyComplete() {
        const { answers } = this.getState();

        for(let id in answers) {
            if (answers[id].complete === true) {
                return true;
            }
        };
        return false;
    }

    onCreateQuestion(text) {

        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        this.question ={
            text:text,
            id:id
        }
 
        console.log("question"+this.question.text);
    }

    onClearQuestion() {

        this.question = '';
    }

    onClearAnswers() {


        for(let id in this.answers) {
            delete this.answers[id];
        };
    }



}

export default alt.createStore(TodoStore);
