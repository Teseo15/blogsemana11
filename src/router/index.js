import RouterWithLayout from "./RouterLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Drawer, MainBar } from "../components";
import { LoginView, ContactView, HomeView } from "../views";

const Router = () => {
  return (
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Drawer>

      {/* <MainBar>
        <Routes>
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </MainBar> */}
    </BrowserRouter>
  );
};

export default Router;
