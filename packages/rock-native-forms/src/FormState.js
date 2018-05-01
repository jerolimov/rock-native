
export default class FormState {
  _touched = false;
  _dirty = false;
  _valid = false;

  get touched() {
    return _touched;
  }

  get untouched() {
    return !_touched;
  }

  get dirty() {
    return _dirty;
  }

  get pristine() {
    return !_dirty;
  }

  get valid() {
    return _valid;
  }

  get invalid() {
    return !_valid;
  }
}
