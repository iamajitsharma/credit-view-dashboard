"use client";
//import node modules libraries
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";

const ThemeProvider = dynamic(
  () => import("next-themes").then((m) => m.ThemeProvider),
  { ssr: false }
);

//import redux store
import store from "@/store/store";

type ClientWrapperProps = { children: React.ReactNode };

const queryClient = new QueryClient();

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default ClientWrapper;
