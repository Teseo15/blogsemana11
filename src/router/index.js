import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Drawer, MainBar } from "../layout";

const Home = lazy(() => import("../views/Home"));
const Contact = lazy(() => import("../views/Contact"));
const Login = lazy(() => import("../views/Login"));
const Book = lazy(() => import("../views/Book"));
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Drawer />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<>Cargando...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<>Cargando...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/form"
            element={
            <Suspense fallback={<>Cargando...</>}>
              <Book/>
            </Suspense>
            }  
          />
        </Route>
      </Routes>

      <Routes>
        <Route element={<MainBar />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<>Cargando...</>}>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;