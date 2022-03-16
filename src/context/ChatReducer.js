export default (state, action) => {
  switch (action.type) {
    case "ADD_USER_RESPONSE":
      return {
        ...state,
        chat: [
          ...state.chat,
          {
            message: action.payload,
            isUserResponse: true,
          },
        ],
      };

    case "ADD_BOT_RESPONSE":
      return {
        ...state,
        chat: [
          ...state.chat,
          {
            message: action.payload,
            isUserResponse: false,
          },
        ],
      };

    default:
      return state;
  }
};