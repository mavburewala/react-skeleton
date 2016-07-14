export default class BaseObject {
  constructor(ioSource = {}) {
    this.sId = (ioSource.sId || this.GetUniqueId());
  }

  GetUniqueId () {
    return guid();
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
