export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
    // token:
    //   "BQBLjDF39OpOe-6QFUyzqSDwx_eoYSLaaxry-cG4RocQjxGTeuZHHEvKroL83fNuVPG0zUMEUhd7fMsxLO0p6083oGy2Ii50SoieicQcC9n5U20oELD6E-bAqvSpenc7AsvihY2HAjhRDrS5b-DzUI6Me8tXbv6mtkEhR6fD5xJjfFe9",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
