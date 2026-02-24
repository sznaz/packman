import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Box, CircularProgress } from "@mui/material";

const Login = lazy(() => import("../pages/login/LoginPage"));

const NotFound = lazy(() => import("../pages/notfound/NotFoundPage"));

const Home = lazy(() => import("../pages/home/HomePage"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
