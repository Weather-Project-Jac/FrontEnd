import { create } from "zustand";

interface User {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  lastSearchedCities: string[];
  setIsLogged: () => void;
  setEmail: () => void;
  setUsername: () => void;
  setAvatar: () => void;
  setLastSearchedCities: () => void;
}

export const UserStore = create<User>((set) => ({
  isLogged: false,
  email: "",
  username: "",
  avatar: "",
  lastSearchedCities: [],
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
  setLastSearchedCities: () => {
    set((state) => ({ lastSearchedCities: state.lastSearchedCities }));
  }
}));
