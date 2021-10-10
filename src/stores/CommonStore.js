import { makeAutoObservable } from "mobx";

class CommonStore {
  //observables
  selectedInc = {};

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  setSelectedInc(inc) {
    this.selectedInc = inc;
  }
}

export default new CommonStore();
