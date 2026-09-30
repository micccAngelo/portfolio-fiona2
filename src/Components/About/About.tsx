import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../../portfolioStyles";

export default function About() {
  return (
    <Box component="main" id="top">
      <Box component="section" sx={styles.hero} aria-labelledby="hero-title">
        <Box sx={styles.heroCopy}>
          <Typography component="p" sx={styles.since}>SINCE 2020</Typography>
          <Box>
            <Typography component="h1" sx={styles.heroTitle} id="hero-title">Natfio Gallery</Typography>
            <Typography component="p" sx={styles.heroSubtitle}>Personal &amp; Agency Project</Typography>
          </Box>
          <Button component={RouterLink} to="/project" variant="outlined" sx={styles.explore}>Explore the gallery</Button>
        </Box>
        <Box sx={styles.heroArt} aria-hidden="true">
          <Box component="img" sx={styles.americano} src="/images/MAFS6-fZzRc.png" alt="" />
          <Box component="img" sx={styles.beans} src="/images/MAFS6xmuDc8.png" alt="" />
          <Box component="img" sx={styles.toast} src="/images/MAFS685cmW8.png" alt="" />
          <Box component="img" sx={styles.cappuccino} src="/images/MAFS62pyIGU.png" alt="" />
          <Box component="img" sx={styles.pastry} src="/images/MAFS64r1L74.png" alt="" />
        </Box>
      </Box>
      <Box component="section" sx={styles.about} aria-labelledby="about-title">
        <Box sx={styles.aboutCopy}>
          <Box
            component="img"
            src="/images/MAFS64VDRSs.png"
            sx={styles.kettle}
            alt=""
          />
          <Typography component="h2" sx={styles.aboutTitle} id="about-title">
            Hi!
          </Typography>
          <Typography component="p">
            I’m an Illustrator &amp; Graphic Designer with 5+ years of
            experience turning ideas into visuals that connect.
          </Typography>
          <Typography component="p">
            With illustration as my core expertise, I love creating expressive
            &amp; engaging visuals that bring ideas, characters, and stories to
            life.
            <br />
            My work also spans{" "}
            <strong>
              social media content, packaging, &amp; promotional design
            </strong>
            , allowing me to translate concepts into purposeful media.
          </Typography>
          <Typography component="p" sx={styles.aboutEnding}>
            Let’s turn your ideas into something people remember.
          </Typography>
        </Box>
        <Box
          component="img"
          sx={styles.portrait}
          src="/images/portrait.png"
          alt="Natfio, illustrator and graphic designer, in a city square"
        />
      </Box>
    </Box>
  );
}
