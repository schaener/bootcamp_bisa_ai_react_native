import {takeLatest, all} from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */
import {DeathCasesTypes} from '../Redux/DeathCasesRedux';
/* ------------- Sagas ------------- */
import {getDeathCases} from './DeathCasesSagas';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(DeathCasesTypes.DEATH_CASES_REQUEST, getDeathCases, api),
    // takeLatest(StartupTypes.STARTUP, startup),
    // takeLatest(BannerTypes.BANNER_REQUEST, getDataBanner, api),
    // takeLatest(NewsTypes.NEWS_REQUEST, getDataNews, api),
    // // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ]);
}
