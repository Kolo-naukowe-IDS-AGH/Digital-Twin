import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../utils/queryClient";

const MainTemplate: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
};

export default MainTemplate;
