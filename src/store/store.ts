import { create } from "zustand";

export interface User {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  lastSearchedCities: string[];
  //favouriteCities: string[];
  setIsLogged: () => void;
  setEmail: () => void;
  setUsername: () => void;
  setAvatar: () => void;
  addLastSearchedCities: (city: string) => void;
  /*   addFavouriteCities: (newCity: string) => void|boolean;
  removeFavouriteCities: (removedCity: string) => void|boolean; */
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
  //favouriteCities: [],
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
      if (updatedCities.length == 6) {
        updatedCities.shift();
      }
      updatedCities.push(city);
      return { lastSearchedCities: updatedCities };
    });
  },
  /* addFavouriteCities: (newCity: string) => {
    let status=false;
    set((state) => {
        const updatedFavouriteCities = [...state.favouriteCities];
        console.log('Before',updatedFavouriteCities);
        console.log(!updatedFavouriteCities.includes(newCity) && updatedFavouriteCities.length != 6)
        if(!updatedFavouriteCities.includes(newCity) && updatedFavouriteCities.length != 6) {
          updatedFavouriteCities.push(newCity);
          console.log('After',updatedFavouriteCities);
          status=true;
        }
        return { favouriteCities: updatedFavouriteCities };
    });
    return status
  },
  removeFavouriteCities: (removedCity: string) => {
    let status=false;
    set((state) => {
        const updatedFavouriteCities = [...state.favouriteCities];
        console.log(`Removing ${removedCity} from `,updatedFavouriteCities);
        const removedIndex = updatedFavouriteCities.indexOf(removedCity);
        if (removedIndex !== -1) {
          updatedFavouriteCities.splice(removedIndex, 1);
          console.log("Removed", updatedFavouriteCities);
          status=true;
        }

        return { favouriteCities: updatedFavouriteCities };
    });
    return status
  } */
}));
