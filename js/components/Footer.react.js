import React from 'react';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let allButtons;

            allButtons =
            (<div>
                <a href="#"
                    className="btn btn-primary"
                    onClick={ this._saveComplete }
                >Save question and answers</a>
     
                <a href="#"
                    className="btn btn-primary"
                    onClick={ this._clearQuestion }
                >Clear Question</a>

                <a href="#"
                    className="btn btn-primary"
                    onClick={ this._clearAnswers }
                >Clear answers</a>
            </div>);
        

        return (
            <div id="footer">
                { allButtons }
            </div>
        );
    }

    _saveComplete() {
        TodoActions.saveComplete();
    }

    _clearQuestion(){
    
        TodoActions.clearQuestion();
    }

    _clearAnswers(){
        TodoActions.clearAnswers();
    }
};

export default Footer;
