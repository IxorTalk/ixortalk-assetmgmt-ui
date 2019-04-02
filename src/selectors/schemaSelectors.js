const arr = []

for (var key in window.config.assetmgmt.columns) {
    if (window.config.assetmgmt.columns.hasOwnProperty(key)) {
        arr.push(key);
    }
}

const schemaPropertyNames = arr

const reducerState = (store) => store.schema
export const isFetching = (store) => reducerState(store).get('fetching')
export const isFetched = (store) => reducerState(store).get('fetched')
export const stale = (store) => reducerState(store).get('stale')
export const schema = (store) => reducerState(store).get('schema')
export const possibleColumnNames = (store) => schemaPropertyNames
export const columNames = (store) => {
    const schemaObject = schema(store)
    if (!schemaObject)
        return null
    const schemaProperties = schemaObject.definitions.properties.properties
    return schemaPropertyNames.filter(
        schemaPropertyName => schemaProperties.hasOwnProperty(schemaPropertyName)
    )
}