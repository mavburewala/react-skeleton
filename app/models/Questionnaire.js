import BaseObject from "./BaseObject";

export default class Questionnaire extends BaseObject {
  constructor(ioSource = {}) {
    super();
    this.oQuestionList = (ioSource.oQuestionList || []);
    this.oCustomer = (ioSource.oCustomer || Math.random().toString(36).substring(5));
  }

  AddQuestion (question) {
    this.oQuestionList.push(question);
  }
}
