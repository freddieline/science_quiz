import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'createAnswer',
            'saveCorrectAnswer',
            'saveComplete',
            'correctAnswerProvided',
            'createQuestion',
            'clearQuestion',
            'clearAnswers',
            'deleteQuestion',
            'moveQuestionUp',
            'moveQuestionDown'
        )
    }
}

export default alt.createActions(TodoActions);
