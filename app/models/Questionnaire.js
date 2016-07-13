import BaseObject from "./BaseObject";

class Questionnaire extends BaseObject {
  constructor(ioSource = {}) {
    this.oQuestionList = (ioSource.oQuestionList || []);
    this.oCustomer = (ioSource.oCustomer || "");
  }

  AddQuestion () {
    // ToDo: Add question to the question list.
  }
}
