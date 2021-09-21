function createStore(reducer) {
  // This feature is called a closure since a function encloses or draws a protective bubble around the variables in its scope and carries those with it when invoked later.
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state;
  }

  return { dispatch, getState };
  // returning the function makes it accessible to the rest of the application
  // the returned JS object is called a 'store', hence createStore
  // adding in a function to get the state
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  // container.textContent = state.count; 
  // now updated for store
  container.textContent = store.getState().count
};

// dispatch({ type: '@@INIT' })
let store = createStore(reducer);
// createStore now takes an argument of a function that manipulates the state in whatever way we want
store.dispatch({ type: '@@INIT' })
// this replaces the initial dispatch call

let button = document.getElementById('button');

button.addEventListener('click', function() {
    // now updated for store
    store.dispatch({ type: 'INCREASE_COUNT' });
})
