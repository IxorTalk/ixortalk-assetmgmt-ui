import { fromJS } from 'immutable'

export default function (state = fromJS({
  assetToDelete: null,
  pending: false
}), action) {
  switch (action.type) {

    case "DELETE_MODAL_FOR":
      return state
        .set('assetToDelete', action.payload.assetId)
        .set('pending', false)

    case "CLOSE_DELETE_MODAL":
      return state
        .set('assetToDelete', null)
        .set('pending', false)

    case "DELETE_ASSET_FULFILLED":
      return state
        .set('assetToDelete', null)
        .set('pending', false)

    default: return state
  }
}