import React from 'react';
import { PropTypes } from 'react';

import QuestionAndAnswerItem from './QuestionAndAnswerItem.react';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
import RevealAnswer from './RevealAnswer.react';
import classNames from 'classnames';

class SavedSection extends React.Component {

    constructor(props) {
        super(props)
        this._generateQuiz = this._generateQuiz.bind(this);
        this._findAnswers = this._findAnswers.bind(this);
    }

    _generateQuiz(){
        TodoActions.generateQuiz();
    }

    _findAnswers(){
        TodoActions.checkAnswers();
    }

    _takeAgain(){
        TodoActions.takeAgain();
    }

    render() {

        const qAndAs = this.props.qAndAs;
        let display = [];
        var questionIndex = 0;
        var showGenerateQuiz =  (Object.keys(qAndAs).length > 0 && this.props.showEditable) ?  "" : "hide"
        var hideEditableToggle = this.props.showEditable ?  "hide" : ""
        const showE = this.props.showEditable;
        var showResults = this.props.finished ? "" : "hide";

        var total = Object.keys(qAndAs).length;
        var percentage = (this.props.score / total) *100 ;
        var congratulate;
        if (percentage > 80){
            congratulate = "Excellent ";
        }
        else if (percentage > 49){
            congratulate = "Well done ";
        }
        else{
            congratulate = "Oh dear";
        }
        var revealAnswers = [];

        for (let key in qAndAs) {
            display.push(
                <QuestionAndAnswerItem 
                    key={ key } 
                    qNum = {key}
                    qAndA={ qAndAs[key] }
                    totalNumberQuestions = {Object.keys(qAndAs).length}
                    showEditable={ showE }
                     />);
        }
        console.log("number incorrect "+Object.keys(this.props.incorrectAnswers).length);
        if (Object.keys(this.props.incorrectAnswers).length >0){
            

            for (let key in this.props.incorrectAnswers){
                console.log("incorrect value"+this.props.incorrectAnswers[key]);
                revealAnswers.push(<RevealAnswer 
                    answer={this.props.incorrectAnswers[key]}
                    question = {key}
                     />);
            }
        }

        return (

            <div>
                <ul id="savedQuestion">
                   { display }

                </ul>
                 <a href="#"
                    className={"btn btn-primary "+showGenerateQuiz}
                    onClick={ this._generateQuiz }
                >Generate quiz</a>
                <a href="#"
                    className={"btn btn-primary "+hideEditableToggle}
                    onClick={ this._findAnswers }
                >Submit results</a>
                <a href="#"
                    className={"btn btn-primary "+hideEditableToggle}
                    onClick={ this._findAnswers }
                >Take again</a>
                <h4 className={showResults}>{congratulate} you got {this.props.score} out of {Object.keys(qAndAs).length} or {percentage}%</h4>

                <ul id ="">
                    {revealAnswers}
                </ul>
            </div>
      
        );
    } 
};

SavedSection.propTypes = {
    qAndAs: PropTypes.object.isRequired

};

export default SavedSection;
