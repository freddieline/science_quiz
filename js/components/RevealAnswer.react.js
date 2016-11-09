import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';


class RevealAnswer extends React.Component {
    constructor(props) {
        super(props)

      }

    render(){

        var incorrectQuestion = this.props.question;
        var correctAnswer = this.props.answer;

        return(
        <li>The correct answer for {incorrectQuestion} is {correctAnswer}</li>
        
        );
    }

};


RevealAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired


};


export default RevealAnswer;