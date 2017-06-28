import { extendObservable } from 'mobx';

export default new function  ()  {
extendObservable (this, {
  nums: []
});
};
