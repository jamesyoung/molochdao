const INITIAL_STATE = {
    items: [],
    isFetching: false,
    error: undefined
  };
  
  function GetAssetData(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'GET_ASSET_DATA_REQUEST':
        // This time, you may want to display loader in the UI.
        return Object.assign({}, state, {
          isFetching: true
        });
      case 'GET_ASSET_DATA_SUCCESS':
        // Adding derived members to state
        return Object.assign({}, state, {
          isFetching: false,
          items: action.items
        });
      case 'GET_ASSET_DATA_FAILURE':
        // Providing error message to state, to be able display it in UI.
        return Object.assign({}, state, {
          isFetching: false,
          error: action.error
        });
      default:
        return state;
    }
  }
  
  export default GetAssetData;