import { fromJS } from 'immutable'

export default function (state = fromJS({
    schema: null,
    fetching: false,
    fetched: false,     // TODO: instead of boolean, rely on existance of schema
    error: null,
  }), action) {
    switch (action.type) {

      case "FETCH_SCHEMA_PENDING":
        return state
            .set('fetched', false)
            .set('fetching', true)

      case "FETCH_SCHEMA_FULFILLED":
        return state
          .set('fetching', false)
          .set('fetched', true)
          .set('schema', action.payload.data)

      default: return state
    }
}
