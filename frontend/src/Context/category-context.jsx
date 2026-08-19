import { createContext, useState } from "react";

const initialValue = "";

const CategoryContext = createContext(initialValue);

export const CategoryProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState(initialValue);

  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export {CategoryContext};