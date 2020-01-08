
const defaultState = {
  artists: [],
  albums: [],
  songs: []
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "":
      return {...prevState, likes: prevState.likes + 1}
    default: 
      return prevState
  }
}


export default reducer