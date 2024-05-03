import { create } from "zustand";
import userPng from '../assets/userx512.png';
import { persist } from 'zustand/middleware'


type State = {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  lastSearchedCities: string[];
  token: string;
  loginTime: number;
}

type Actions = {
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
  reset: () => void;
}

const initialState: State = {
  isLogged: false,
  email: "",
  username: "",
  avatar: userPng,
  lastSearchedCities: [],
  token: "",
  loginTime: 0,
}

export const UserStore = create(
  persist<State & Actions>(
    (set) => ({
      ...initialState,
      setIsLogged: () => {
        set((state) => ({ isLogged: !state.isLogged, loginTime: Date.now() }));
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
      reset: () => {
        set(initialState);
      }
    }), {
    name: 'user-storage', // Name for the persisted store
    onRehydrateStorage: (state) => {
      console.log('hydration starts');
      // Check if user has logged in before
      if (state && state.loginTime) {
        // Calculate the time difference since login
        const timeDifference = Date.now() - state.loginTime;
        const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
        // If 3 days have passed since login, reset the store
        if (timeDifference > threeDaysInMillis) {
          state.reset() // Reset the store
        }
      }

      return (state, error) => {
        if (error) {
          console.log('an error happened during hydration', error)
        } else {
          console.log('hydration finished')
        }
      }
    }
  })
)
