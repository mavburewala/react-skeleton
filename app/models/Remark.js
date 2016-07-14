import BaseObject from "./BaseObject";

export default class Remark extends BaseObject {
  constructor(ioSource = {}) {
    this.sRemark = (ioSource.sRemark || "");

    this.oQuestion = (ioSource.oQuestion || null);
  }
}
