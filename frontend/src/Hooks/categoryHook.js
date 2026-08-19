import { useContext } from "react";
import { CategoryContext } from "../Context/category-context";

export const useCategory = () => useContext(CategoryContext);

