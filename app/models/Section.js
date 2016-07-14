import BaseObject from "./BaseObject";

export default class Section extends BaseObject {
  constructor(ioSource = {}) {
    this.sMainSection = (ioSource.sMainSection || "");
    this.sSubSection = (ioSource.sSubSection || "");
    this.iSequence = (ioSource.iSequence || "");
  }
}
