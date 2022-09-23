const initState = {
  imgFile: [
    {
      id: '1',
      img: 'https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/307715259_2320801704774271_7770909758091763573_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=3XkHPnh7yFsAX8OaL7X&tn=3g0Y0W1nSey2in0N&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT9--R30lZG5QccL_l8oBjeSDtgMg-PMbDtfkIh9XTz9-Q&oe=632EF0A4',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'addImgFile':
      return {
        ...state,
        imgFile: [...state.imgFile, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
