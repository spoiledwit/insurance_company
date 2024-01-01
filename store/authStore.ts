import { create } from "zustand";
import { User } from "@/types";

type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
