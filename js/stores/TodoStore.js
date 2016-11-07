import alt from '../alt';
import merge from 'object-assign';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);
        this.answers = {};
        this.question = {};
        this.questionsAndAnswers = {};
        this.questionNumber=1;
    }

    update(id, update) {
        this.answers[id] = merge(this.answers[id], update);
    }

    onCreateAnswer(text) {

        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        this.answers[id] = {
            id: id,
            correct: false,
            text: text
        }
    }

    onSaveCorrectAnswer(id) {
        const correct = !this.answers[id].correct;
        this.update(id, { correct });
    }

    onSaveComplete() {
        
        console.log('save');
        var ans={};        
        for(let id in this.answers) {
            ans[id] = this.answers[id];    
        };
        this.answers ={};

        var currentQuestionAndAnswer = {
            question: this.question.text,
            answers:ans
        };
        
        var qNum = this.questionNumber;
        this.questionsAndAnswers[qNum] = currentQuestionAndAnswer;

        var qAArray = this.questionsAndAnswers;
        var index = Object.keys(qAArray).length;
   
        currentQuestionAndAnswer["order"]= index;

        this.questionsAndAnswers[qNum] = merge(this.questionsAndAnswers[qNum], currentQuestionAndAnswer);
        this.questionNumber+=1;
        this.question = {};

    }

    static correctAnswerProvided() {
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
            text:text
        }
    }

    onClearQuestion() {
        this.question = '';
    }

    onClearAnswers() {
        for(let id in this.answers) {
            delete this.answers[id];
        };
    }

    onDeleteQuestion(key){
        delete this.questionsAndAnswers[key];
    }

    onMoveQuestionUp(keyPair){
        console.log('up');
        this.questionsAndAnswers[keyPair.thisKey].order = this.questionsAndAnswers[keyPair.thisKey].order -1;
        this.questionsAndAnswers[keyPair.previousKey].order = this.questionsAndAnswers[keyPair.previousKey].order +1;
    }

    onMoveQuestionDown(keyPair){
        console.log('down');
        this.questionsAndAnswers[keyPair.thisKey].order = this.questionsAndAnswers[keyPair.thisKey].order +1;
        this.questionsAndAnswers[keyPair.nextKey].order = this.questionsAndAnswers[keyPair.nextKey].order -1;
    }



}

export default alt.createStore(TodoStore);
