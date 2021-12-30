import { QueryClient } from "react-query";

// todo: consider use custom client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
    },
  },
});
