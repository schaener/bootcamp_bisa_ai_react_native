import {call, put} from 'redux-saga/effects';
import DeathCasesActions from '../Redux/DeathCasesRedux';
import {BASE_URL} from './../Services/Api';
export function* getDeathCases(api) {
  // Untuk mendapatkan summary yang digunakan di Home Screen / Screen Intro
  // Meliputi Jumlah Farmer, field dan cultivation masing2 status
  // get current data from Store
  // const currentData = yield select(SummarySelectors.getData)
  // make the call to the api
  try {
    const response = yield call(api.getDeathData);

    if (response.ok) {
      let filterData = response.data.filter(
        (x) => x.provinceState != null && x.provinceState != 'Unknown',
      );
      let dataTransform = filterData.map((obj) => {
        return {
          countryName: obj.provinceState,
          deathTotal: obj.deaths,

          activeTotal: obj.active,
          recoveredTotal: obj.recovered,
        };
      });

      yield put(DeathCasesActions.deathCasesSuccess(dataTransform.slice(0, 5)));
    } else {
      yield put(DeathCasesActions.deathCasesFailure());
    }
  } catch (error) {
    yield put(DeathCasesActions.deathCasesFailure());
  }
}
