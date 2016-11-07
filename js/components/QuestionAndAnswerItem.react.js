import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
import AnswerItem from './AnswerItem.react';

class QuestionAndAnswerItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            thisKey:this.props.thisKey,
            nextKey:this.props.nextKey,
            previousKey:this.props.previousKey
        }
        
    }

    render() {


        console.log("QA This"+this.state.thisKey);
        console.log("QA previous"+this.state.previousKey);
        console.log("QA next"+this.state.nextKey);
        let aDisplay=[];        
        var answers  = this.props.qAndA.answers;
        var questionNumber = this.props.questionIndex+1;
        
        for (let key in answers) {
            aDisplay.push(<AnswerItem key={ key } answer={ answers[key] } />);
        }

        var moveUpButtonVisible = (this.props.questionIndex == 0) ? 'hide' : '';
        var moveDownButtonVisible = (this.props.questionIndex == (this.props.totalNumberQuestions-1)  ) ? 'hide' : '';

        return (
            <div>
                <li>
                    {"Question "+questionNumber+": "+this.props.qAndA.question}
                </li>
                <ul>
                    { aDisplay }
                </ul>
                <a href="#"
                    className="btn btn-primary"
                    onClick={ this._deleteQuestion }
                >Delete question</a>

                <a href="#"
                    className={"btn btn-primary "+moveUpButtonVisible}
                    onClick={ this._moveQuestionUp }
                >Move question up</a>

                <a href="#"
                    className={"btn btn-primary "+moveDownButtonVisible}
                    onClick={ this._moveQuestionDown }
                >Move question down</a>
            </div>
        );
    }

    _deleteQuestion(){
        TodoActions.deleteQuestion(this.state.thisKey);
    }

    _moveQuestionUp(){

        var keyPair={
            thisKey:this.state.thisKey,
            previousKey:this.state.previousKey
        }
        TodoActions.moveQuestionUp(keyPair);
    }

    _moveQuestionDown(){

        var keyPair={
            thisKey:this.state.thisKey,
            nextKey:this.state.nextKey
        }
        TodoActions.moveQuestionDown(keyPair);
    }

};




QuestionAndAnswerItem.propTypes = {
    qAndA: PropTypes.object.isRequired
};

export default QuestionAndAnswerItem;
