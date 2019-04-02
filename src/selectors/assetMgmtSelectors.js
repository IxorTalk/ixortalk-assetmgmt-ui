const reducerState = (store) => store.assets
export const isFetching = (store) => reducerState(store).get('fetching')
export const isFetched = (store) => reducerState(store).get('fetched')
export const stale = (store) => reducerState(store).get('stale')
export const error = (store) => reducerState(store).get('error')
export const assets = (store) => reducerState(store).get('assets')