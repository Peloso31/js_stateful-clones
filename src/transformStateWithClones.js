'use strict';

//const { act } = require("react");

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const stateHistory = [];
  let currentState = {...state};

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData };
        stateHistory.push(currentState);
        break;
      case 'removeProperties':
      const nextState = { ...currentState };

      for (const key of action.keysToRemove) {
        delete nextState[key];
      }
      currentState = nextState;
      stateHistory.push(currentState);
      break;
      case 'clear':
        currentState = {};
        stateHistory.push(currentState);
        break;
      default:
        break;
    }
  }
  return stateHistory;
}

module.exports = transformStateWithClones;