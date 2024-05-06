import { create } from "zustand";
import { persist } from "zustand/middleware";
import  secureLocalStorage  from  "react-secure-storage";

type State = {
  isLogged: boolean;
  email: string;
  username: string;
  avatar: string;
  lastSearchedCities: string[];
  token: string;
  loginTime: number;
};

type Actions = {
  setIsLogged: () => void;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setAvatar: (url: string) => void;
  addLastSearchedCities: (city: string) => void;
  setToken: (token: string) => void;
  reset: () => void;
};

const initialState: State = {
  isLogged: false,
  email: "",
  username: "",
  avatar: "",
  lastSearchedCities: [],
  token: "",
  loginTime: 0,
};

export const UserStore = create(
  persist<State & Actions>(
    (set) => ({
      ...initialState,
      setIsLogged: () => {
        set((state) => ({ ...state, isLogged: !state.isLogged, loginTime: Date.now() }));
      },
      setEmail: (email) => {
        set((state) => ({ ...state, email }));
      },
      setUsername: (username) => {
        set((state) => ({ ...state, username }));
      },
      setAvatar: (avatar) => {
        set((state) => ({ ...state, avatar }));
      },
      addLastSearchedCities: (city) => {
        set((state) => {
          const updatedCities = [...state.lastSearchedCities];
          if (updatedCities.length === 6) {
            updatedCities.shift();
          }
          updatedCities.push(city);
          return { ...state, lastSearchedCities: updatedCities };
        });
      },
      setToken: (token) => {
        set((state) => ({ ...state, token }));
      },
      reset: () => {
        set(initialState);
      },
    }), {
    name: 'user-storage', // Name for the persisted store
    storage: {
      getItem: (name) => {
        try {
          return secureLocalStorage.getItem(name) || null;
        } catch (error) {
          console.error("Error decrypting data:", error);
        }
      },
      setItem: (name, value) => {
        try {
          secureLocalStorage.setItem(name, value);
        } catch (error) {
          console.error("Error encrypting data:", error);
        }
      },
      removeItem: (name) => {
        try {
          secureLocalStorage.removeItem(name);
        } catch (error) {
          console.error("Error removing data:", error);
        }
      }
    },
    onRehydrateStorage: (state) => {
      console.log('hydration starts');
      // Check if user has logged in before
      if (state && state.loginTime) {
        // Calculate the time difference since login
        const timeDifference = Date.now() - state.loginTime;
        const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
        // If 3 days have passed since login, reset the store
        if (timeDifference > threeDaysInMillis) {
          state.reset(); // Reset the store
        }
      }

      return (state, error) => {
        if (error) {
          console.log('an error happened during hydration', error);
        } else {
          console.log('hydration finished');
        }
      };
    }
  })
);
