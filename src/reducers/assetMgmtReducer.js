import {fromJS} from 'immutable'

export default function (state = fromJS({
    assets: [],
    fetching: false,
    fetched: false,
    stale: true,
    error: null,
}), action) {

    switch (action.type) {
        case "FETCH_ASSETS_PENDING":
            return state
                .set('fetching', true)
                .set('stale', false)

        case "FETCH_ASSETS_REJECTED":
            return state
                .set('fetching', false)
                .set('error', action.payload)

        case "FETCH_ASSETS_FULFILLED":
            return state
                .set('fetching', false)
                .set('fetched', true)
                .set('assets', action.payload)
                .set('asset', null)
                .set('asset_updated', false)
                .set('stale', false)

        case "FETCH_ASSET_FULFILLED":
            return state
                .set('asset', action.payload.data)
                .set('asset_updated', false)

        case "UPDATE_ASSET_FULFILLED":
            return state
                .set('asset', null)
                .set('asset_updated', true)
                .set('stale', true)

        case "CREATE_ASSET_FULFILLED":
            return state
                .set('asset', null)
                .set('asset_created', true)
                .set('stale', true)

        case "DELETE_ASSET_FULFILLED":
            return state
                .set('stale', true)

        default:
            return state
    }
}
