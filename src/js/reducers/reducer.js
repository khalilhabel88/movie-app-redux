import {
    SEARCH_MOVIE,
    SEARCH_RATING,
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    PATH_HANDLER,
    PATH_BACK
  } from "../actions/actionTypes";
  
  const initialState = {
    searchWords: "",
    star: 0,
    showmodal: true,
    pathindex: 0,
  
    MovieList: [
      {
        image: "https://miro.medium.com/max/674/1*wNNxHTqzCeIPYAsl1rbVpg.jpeg",
        title: "Joker",
        year: "2019",
        rating: "5",
        trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
      },
      {
        image:
          "http://fr.web.img4.acsta.net/medias/nmedia/18/36/31/71/18479867.jpg",
        title: "vendetta",
        year: "2017",
        rating: "4",
        trailer: "https://www.youtube.com/embed/lSA7mAHolAw"
      },
      {
        image:
          "https://www.artistikrezo.com/wp-content/uploads/2019/01/glass-shyamalan.png",
        title: "Glass",
        year: "2019",
        rating: "4",
        trailer: "https://www.youtube.com/watch?v=95ghQs5AmNk"
      },
      {
        image: "https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/79/b5/ba/79b5ba10-f239-edaa-6a89-7a4fe000334a/DIS_AV_ENDGAME_FINAL_GERMANY_WW_ARTWORK_EN_2000x3000_1OWPBJ00000FNE.lsr/268x0w.jpg",
        title: "Avengers",
        year: "2019",
        rating: "3",
        trailer: "https://www.youtube.com/watch?v=2CfHIxONy3c"
      },
  
 
      
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_MOVIE:
        return { ...state, searchWords: action.payload };
  
      case SEARCH_RATING:
        return { ...state, star: action.payload };
  
      case ADD_MOVIE:
        
        return {
          ...state,
          MovieList: state.MovieList.concat(action.payload)
        };
  
      case DELETE_MOVIE:
        return {
          ...state,
          MovieList: state.MovieList.filter(el => el.title !== action.payload)
        };
  
      case EDIT_MOVIE:
        
        return {
          ...state,
          MovieList: state.MovieList.map((el, i) =>
            i === action.payload.id ? { ...el, ...action.payload.newMovie } : el
          )
        };
      case PATH_HANDLER:
        return {
          ...state,
          pathindex: action.index
        };
  
      case PATH_BACK:
        return {
          ...state,
          pathindex: 0
        };
      default:
        return state;
    }
  };
  
  export default reducer;