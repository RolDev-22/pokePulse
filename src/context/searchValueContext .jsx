import { createContext, useState } from "react";

export const SearchValueContext = createContext();

export function SearchValueProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
}
