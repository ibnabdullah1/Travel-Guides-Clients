"use client";

import { store } from "@/src/redux/features/store";

import { Provider } from "react-redux";

const StoreProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
