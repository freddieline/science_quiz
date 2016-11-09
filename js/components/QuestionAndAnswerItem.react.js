import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
import AnswerItem from './AnswerItem.react';

class QuestionAndAnswerItem extends React.Component {
    constructor(props) {
        super(props)

         
            this._moveQuestionUp=this._moveQuestionUp.bind(this);
            this._moveQuestionDown=this._moveQuestionDown.bind(this);
            this._deleteQuestion=this._deleteQuestion.bind(this);
        
    }

    render() {


        let aDisplay=[];        
        var answers  = this.props.qAndA.answers;
        const qNum = this.props.qNum;
        const showE = this.props.showEditable;
        
        for (let key in answers) {
            aDisplay.push(<AnswerItem key={ key } 
                showEditable={showE}
                questionNumber= {qNum}
                answer={ answers[key] } />);
        }
   
        var moveUpButtonVisible = (qNum == 1) ? 'hide ' : '';
        var moveDownButtonVisible = (qNum == this.props.totalNumberQuestions  ) ? 'hide ' : '';


        var showEditableToggle = this.props.showEditable ?  "" : "hide"

        return (
            <div>
                <li>
                    {"Question "+this.props.qNum+": "+this.props.qAndA.question}
                </li>
                <ul>
                    { aDisplay }
                </ul>

                <a href="#"
                    className={"btn btn-primary "+showEditableToggle}
                    qNum={this.props.qNum}
                    onClick={ this._deleteQuestion }
                >Delete question</a>

                <a href="#"
                    className={"btn btn-primary "+moveUpButtonVisible+showEditableToggle}
                    qNum={this.props.qNum}
                    onClick={ this._moveQuestionUp }
                >Move question up</a>

                <a href="#"
                    className={"btn btn-primary "+moveDownButtonVisible+showEditableToggle}
                    qNum={this.props.qNum}
                    onClick={ this._moveQuestionDown }
                >Move question down</a>
            </div>
        );
    }

    _deleteQuestion(){

        TodoActions.deleteQuestion(this.props.qNum);
    }

    _moveQuestionUp(){
        console.log("key "+this.props.qNum);
        TodoActions.moveQuestionUp(this.props.qNum);
    }

    _moveQuestionDown(){

        console.log("key "+this.props.qNum);
        TodoActions.moveQuestionDown(this.props.qNum);
    }

};




QuestionAndAnswerItem.propTypes = {
    qAndA: PropTypes.object.isRequired
};

export default QuestionAndAnswerItem;
