import { create } from "zustand";
import userPng from '../assets/userx512.png';
import { persist } from 'zustand/middleware'


// type State = {
//   isLogged: boolean;
//   email: string;
//   username: string;
//   avatar: string;
//   lastSearchedCities: string[];
// }

// type Actions = {
//   setIsLogged: () => void;
//   setEmail: () => void;
//   setUsername: () => void;
//   setAvatar: () => void;
//   addLastSearchedCities: (city: string) => void;
//   reset: () => void;
// }

// const initialState: State = {
//   isLogged: false,
//   email: "",
//   username: "",
//   avatar: userPng,
//   lastSearchedCities: [],
// }

// export const UserStore = create(
//   persist<State & Actions>(
//     (set, get) => ({
//       ...initialState,
//       setIsLogged: () => {
//         set((state) => ({ isLogged: !state.isLogged }));
//       },
//       setEmail: () => {
//         set((state) => ({ email: state.email }));
//       },
//       setUsername: () => {
//         set((state) => ({ username: state.username }));
//       },
//       setAvatar: () => {
//         set((state) => ({ avatar: state.avatar }));
//       },
//       addLastSearchedCities: (city: string) => {
//         set((state) => {
//           const updatedCities = [...state.lastSearchedCities];
//           if (updatedCities.length == 6) {
//             updatedCities.shift();
//           }
//           updatedCities.push(city);
//           return { lastSearchedCities: updatedCities };
//         });
//       },
//       reset: () => {
//         UserStore.persist.clearStorage();
//         set(initialState);
//       }
//     }), {
//     name: 'user-storage', // Name for the persisted store
//   }) 
// )

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

export const UserStore = create(
  persist<User>(
    (set) => ({
      isLogged: false,
      email: "",
      username: "",
      avatar: userPng,
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
    }),
    {
      name: 'user-storage', // Name for the persisted store
    }
  )
)