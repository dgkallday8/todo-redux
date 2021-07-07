import {ADD_ITEM, REMOVE_ITEM} from './types'

export function addItemToList(value) {
  return {
    type: ADD_ITEM,
    payload: value
  }
}

export function removeItemFromList(payload) {
  return {
    type: REMOVE_ITEM,
    payload
  }
}
