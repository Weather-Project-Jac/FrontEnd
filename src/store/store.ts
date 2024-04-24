import { create } from "zustand";

interface User {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  setIsLogged: () => void;
  setEmail: () => void;
  setUsername: () => void;
  setAvatar: () => void;
}

export const UserStore = create<User>((set) => ({
  isLogged: false,
  email: "",
  username: "",
  avatar: "",
  setIsLogged: () => {
    set((state) => ({ isLogged: !state.isLogged }));
  },
  setEmail: () => {
    set((state) => ({ email: state.email }));
  },
  setUsername: () => {
    set((state) => ({ username: state.username }));
  },
  setAvatar: () => {
    set((state) => ({ avatar: state.avatar }));
  },
}));
