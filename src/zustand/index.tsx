import create, { GetState, SetState } from "zustand";

import { MyState } from "./types";

export default create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      users: [],
      userDetail: undefined,
      isLoading: false,
      userPost: [],

      getUsers: async () => {
        setState({ isLoading: true });
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await result.json();
        setState({
          users,
          isLoading: false
        });
      },

      getUserDetail: async (userId: string | number) => {
        setState({ isLoading: true });
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users/" + userId
        );
        const userDetail = await result.json();
        setState({ userDetail, isLoading: false });
      },

      getUserPost : async(userId: string | number) => {
        setState({isLoading: true});
        const result = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const userPost = await result.json();
        setState({ userPost, isLoading: false });
      },

    };
  }
);
