import { combineReducers } from "redux";
import rewardReducer from './reward_reducer';

const rootReducer = combineReducers({
  reward: rewardReducer,
});

export default rootReducer;