import formVisibleReducer from "../../reducers/form-visible-reducer";

describe('formVisibleReducer', () => {
  test('Should return default stat if no action type is passed into reducer', () => {
    expect(formVisibleReducer(false, {type: null})).toEqual(false);
  });
  test('Should toggle state visiblity to true if action type is TOGGLE_FORM', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
})