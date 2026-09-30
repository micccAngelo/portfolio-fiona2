import { Box, Link, Typography } from "@mui/material";
import { styles } from "../../portfolioStyles";
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box component="footer" id="contact" sx={styles.footer}>
      <Box sx={styles.contactRow}>
        <div>
          <Typography component="h1" sx={{ fontSize: '42px' }}>Contact</Typography>
          <p>Illustration &amp; graphic design</p>
        </div>
        <div>
          <Typography component="h3">Main branch</Typography>
          <p>
            123 Anywhere St. Any City, State
            <br />
            Any Country
            <br />
            (123) 456 7890
          </p>
        </div>
        <div>
          <Typography component="h3">Email us</Typography>
          <Link href="mailto:Harvest@reallygreatsite.com">
            Harvest@reallygreatsite.com
          </Link>
          <Typography component="p" sx={styles.contactNote}>
            Contact details from the Canva template.
          </Typography>
        </div>
      </Box>
      <Box sx={styles.footerArt}>
        <Link component={RouterLink} sx={styles.footerWordmark} to="/">
          NATFIO GALLERY
        </Link>
        <Box
          component="img"
          sx={styles.footerCup}
          src="/images/MAFS62pyIGU.png"
          alt=""
        />
        <Box
          component="img"
          sx={styles.footerBeans}
          src="/images/MAFS6xmuDc8.png"
          alt=""
        />
        <Box
          component="img"
          sx={styles.footerPastry}
          src="/images/MAFS64r1L74.png"
          alt=""
        />
      </Box>
      <Box sx={styles.footerBottom}>
        <span>Natfio Gallery · Since 2020</span>
        <Link href="#top">Back to top ↑</Link>
      </Box>
    </Box>
  );
}
