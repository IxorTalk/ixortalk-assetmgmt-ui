import {tablecolumns} from '../config/config'

const reducerState = (store) => store.schema
export const isFetching = (store) => reducerState(store).get('fetching')
export const isFetched = (store) => reducerState(store).get('fetched')
export const stale = (store) => reducerState(store).get('stale')
export const schema = (store) => reducerState(store).get('schema')

export const columns = (store) => {
    const schemaObject = schema(store)
    if (!schemaObject) return
    const schemaProperties = schemaObject.definitions.properties.properties
    return tablecolumns.filter(column => !!schemaProperties[column.key]) //true if schema contains column key
}