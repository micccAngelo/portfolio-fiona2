import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { styles } from "../../portfolioStyles";

const AppOutlet = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const page = pathname.startsWith("/project")
      ? "Projects"
      : pathname === "/contact"
        ? "Contact"
        : "About";
    document.title = `Natfio Gallery | ${page}`;
  }, [pathname]);
  return (
    <Box sx={styles.page}>
      <Navbar />
      <Box key={pathname}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppOutlet;
