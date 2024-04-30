import { create } from "zustand";

export interface User {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  lastSearchedCities: string[];
  setIsLogged: () => void;
  setEmail: () => void;
  setUsername: () => void;
  setAvatar: () => void;
  addLastSearchedCities: (city: string) => void;
}

export const UserStore = create<User>((set) => ({
  isLogged: true,
  email: "federico.balducci@gmail.com",
  username: "Federico",
  avatar: "https://placehold.co/600x400",
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
  setEmail: () => {
    set((state) => ({ email: state.email }));
  },
  setUsername: () => {
    set((state) => ({ username: state.username }));
  },
  setAvatar: () => {
    set((state) => ({ avatar: state.avatar }));
  },
  addLastSearchedCities: (city: string) => {
    set((state) => {
      const updatedCities = [...state.lastSearchedCities];
      console.log("Before", updatedCities);
      if (updatedCities.length == 6) {
        console.log("shifted");
        updatedCities.shift();
      }
      updatedCities.push(city);

      console.log("After", updatedCities);

      return { lastSearchedCities: updatedCities };
    });
  },
}));

// Code for insert a new City
// const addCity = UserStore((state) => state.addLastSearchedCities);
//         Call addCity to add a new city to the store
//         addCity("New York");
