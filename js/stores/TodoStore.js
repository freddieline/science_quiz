import alt from '../alt';
import merge from 'object-assign';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);
        this.answers = {};
        this.question = {};
        this.questionsAndAnswers = {};
        this.numberOfQuestions=0;
        this.showEditable=true;
        this.finished=false;
        this.score=0;
        this.incorrectAnswers = {};
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
            text: text,
            chosen:false
        }
    }

    onSaveCorrectAnswer(id) {
        const correct = !this.answers[id].correct;
        this.update(id, { correct });
    }

    onSaveComplete() {
        this.numberOfQuestions+=1;
        
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
        
        console.log("type del"+typeof this.numberOfQuestions);
        this.questionsAndAnswers[this.numberOfQuestions] = currentQuestionAndAnswer;

        var qAArray = this.questionsAndAnswers;
        this.questionsAndAnswers[this.numberOfQuestions] = merge(this.questionsAndAnswers[this.numberOfQuestions], currentQuestionAndAnswer);
        
        console.dir(this.questionsAndAnswers);
        console.log('question number'+this.numberOfQuestions);
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

        var keyNum = parseInt(key);
        var numRedundant = this.numberOfQuestions - keyNum;
        this.numberOfQuestions-=1;
        delete this.questionsAndAnswers[key];
        if(!numRedundant==0){

            for (var i = 0; i < numRedundant; i++){
                this.questionsAndAnswers[i + keyNum]=this.questionsAndAnswers[i + keyNum + 1];
                delete this.questionsAndAnswers[i + keyNum + 1];   
            }
        }
    }

    onMoveQuestionUp(qNum){
        var thisKey = parseInt(qNum);
        var thisObj = this.questionsAndAnswers[thisKey];

        this.questionsAndAnswers[thisKey] = this.questionsAndAnswers[thisKey  - 1]
        this.questionsAndAnswers[thisKey  - 1] = thisObj;
    }

    onMoveQuestionDown(qNum){
        var thisKey = parseInt(qNum);
        var thisObj = this.questionsAndAnswers[thisKey];
        this.questionsAndAnswers[thisKey] = this.questionsAndAnswers[thisKey + 1];
        this.questionsAndAnswers[thisKey  + 1] = thisObj;

    }

    onGenerateQuiz(){
        this.showEditable = false;
    }

    onChooseAnswer(qA){

        this.questionsAndAnswers[qA.question].answers[qA.answer].chosen = true;
        console.log("chosen?"+this.questionsAndAnswers[qA.question].answers[qA.answer].chosen);
    }

    onCheckAnswers(){
        var totalCorrect=0;
        for (let key in this.questionsAndAnswers){
            var previousCorrect = totalCorrect;
            var correctAnswer = ""
            var ans = this.questionsAndAnswers[key].answers;
            for (let key in ans){
                console.log("answer"+ans[key].correct);
                if (ans[key].chosen==ans[key].correct && ans[key].chosen)
                    totalCorrect+=1;
                else if (ans[key].correct!=ans[key].chosen && ans[key].correct)
                    console.log("correct is actually "+ans[key].text);
                    correctAnswer = ans[key].text;
            }
            if (previousCorrect==totalCorrect){
                console.log("bing");
                this.incorrectAnswers[key] = correctAnswer;
            }
        }
    this.score = totalCorrect;

    console.log("You got "+totalCorrect+" out of "+this.numberOfQuestions);
    console.log("num incorrect"+Object.keys(this.incorrectAnswers).length);
    this.finished=true;
    }

    onTakeQuizAgain(){

    }
    
    


}

export default alt.createStore(TodoStore);
