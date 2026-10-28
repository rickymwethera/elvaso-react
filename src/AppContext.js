import { createContext, useContext } from "react";

// Shares the app-wide state and actions from App (current path, navigation,
// cart and favourites) with any component, without passing props down.
export const AppContext = createContext(null);

// Use inside a component to get e.g. `const { go, shop } = useApp();`.
export const useApp = () => useContext(AppContext);
