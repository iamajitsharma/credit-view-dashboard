"use client";
//import node modules libraries
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";

//import redux store
import store from "@/store/store";

type ClientWrapperProps = { children: React.ReactNode };

const queryClient = new QueryClient();

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default ClientWrapper;
