import { Box, Link } from "@mui/material";
import { styles } from "../../portfolioStyles";
import { Link as RouterLink, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box component="header" sx={styles.header}>
      <Link
        component={RouterLink}
        sx={styles.monogram}
        to="/"
        aria-label="Natfio Gallery home"
      >
        <span>NAT</span>
        <span>FIO</span>
      </Link>
      <Box
        component="nav"
        sx={[
          styles.nav,
          {
            '& a[aria-current="page"]': {
              color: "#111",
              textDecoration: "underline",
              textUnderlineOffset: "5px",
            },
          },
        ]}
        aria-label="Main navigation"
      >
        <Link component={NavLink} to="/about">
          About
        </Link>
        <Link component={NavLink} to="/project">
          Project
        </Link>
        <Link component={NavLink} to="/contact">
          Contact
        </Link>
      </Box>
    </Box>
  );
}
