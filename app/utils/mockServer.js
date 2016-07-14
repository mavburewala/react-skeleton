export function GetQuestionnaireListFromServer() {
    return new Promise(resolve => setTimeout(() => resolve({questionnaireList: []}), 1000));
}
