import { create } from "zustand";

export interface User {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  lastSearchedCities: string[];
  token: string;
  setIsLogged: () => void;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setAvatar: (url: string) => void;
  addLastSearchedCities: (city: string) => void;
  setToken: (token: string) => void;
}

export const UserStore = create<User>((set) => ({
  isLogged: true,
  email: "federico.balducci@gmail.com",
  username: "Federico",
  avatar: "https://placehold.co/600x400",
  token: "NOT IMPLEMENTED",
  lastSearchedCities: [
    "Bergamo",
    "Milano",
    "Roma",
    "Napoli",
    "Trento",
    "Parigi",
  ],
  setIsLogged: () => {
    set((state) => ({ isLogged: !state.isLogged }));
  },
  setEmail: (email: string) => {
    set((state) => ({ email: email }));
  },
  setUsername: (username: string) => {
    set((state) => ({ username: username }));
  },
  setAvatar: (url: string) => {
    set((state) => ({ avatar: url }));
  },
  addLastSearchedCities: (city: string) => {
    set((state) => {
      const updatedCities = [...state.lastSearchedCities];
      if (updatedCities.length == 6) {
        updatedCities.shift();
      }
      updatedCities.push(city);
      return { lastSearchedCities: updatedCities };
    });
  },
  setToken: (token: string) => {
    set((state) => ({ token: token }));
  },
}));
