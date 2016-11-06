import React from 'react';
import { PropTypes } from 'react';

import TempAnswerItem from './TempAnswerItem.react';

class MainSection extends React.Component {
    render() {
        
        const allAnswers = this.props.answers;
        let answers = [];

        for (let key in allAnswers) {
            console.log("MM"+allAnswers[key].text );
            answers.push(<TempAnswerItem key={ key } answer={ allAnswers[key] } />);
        }

        return (
            <div>
                <ul id="question">
                   { this.props.question.text }
                                        
                </ul>
                <ul id="todos">
                    { answers}              
                </ul>
                
            </div>
      
        );
    } 
};

MainSection.propTypes = {
    answers: PropTypes.object.isRequired

};

export default MainSection;
