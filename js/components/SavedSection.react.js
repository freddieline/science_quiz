import React from 'react';
import { PropTypes } from 'react';

import QuestionAndAnswerItem from './QuestionAndAnswerItem.react';

class SavedSection extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            keys:[],
            index:0
        }
    }

    render() {

        const qAndAs = this.props.qAndAs;
        let display = [];
        var questionIndex = 0;
        this.state.index=0;
        for (let key in qAndAs) {
            this.state.keys[this.state.index] = key;
            console.log("Key"+this.state.index+": "+key);
            this.state.index=+1;
        }      
        
        console.log(Object.keys(qAndAs).length);

        for (let key in qAndAs) {
            
            console.log("this key"+key);
            console.log("next key"+this.state.keys[questionIndex+1]);
            

            display.push(
                <QuestionAndAnswerItem 
                    key={ key } 
                    qAndA={ qAndAs[key] }
                    previousKey={ this.state.keys[questionIndex-1] }
                    thisKey={this.state.keys[questionIndex]}

                    nextKey={ this.state.keys[questionIndex+1] }
                    questionIndex={questionIndex}
                    totalNumberQuestions = {Object.keys(qAndAs).length}
                     />);
            questionIndex += 1;

        }

        return (

            <div>
                <ul id="savedQuestion">
                   { display }

                </ul>
            </div>
      
        );
    } 
};

SavedSection.propTypes = {
    qAndAs: PropTypes.object.isRequired

};

export default SavedSection;
