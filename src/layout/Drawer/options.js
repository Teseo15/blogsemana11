import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export const options = [
  {
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
  },
  {
    name: "Contacto",
    icon: <ContactPhoneIcon />,
    route: "/contact",
  },
  {
    name: "Login",
    icon: <VpnKeyIcon />,
    route: "/login",
  },
];