import { useState } from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { styles } from "../../portfolioStyles";
import Reveal from "../Layout/Reveal";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";

const categories = [
  { name: "Illustration", image: "MAFS6zGbSzY" },
  { name: "Social Media", image: "MAFS69cMOgg" },
  { name: "Promotional", image: "MAFS68x2PYE" },
  { name: "Packaging", image: "MAFS6y3tT58" },
];
const projects = [
  {
    title: "Mischievous Tiger",
    category: "Illustration",
    image: "tiger",
    secondary: "tiger-print",
    description:
      "A playful fusion of Japanese cultural elements and graphic aesthetics, featuring a mischievous tiger and quirky characters.",
  },
  {
    title: "Rocattoo",
    category: "Illustration",
    image: "rocattoo",
    secondary: "rocattoo-shirt",
    description:
      "Character illustration and an art print, brought to life on a T-shirt.",
  },
  {
    title: "Pop Ice Banner",
    category: "Promotional",
    image: "pop-ice",
    secondary: "",
    description:
      "A vibrant banner illustration created for Pop Ice, featuring young people immersed in their everyday activities. The diverse characters and playful visual elements capture the youthful, energetic spirit of the brand and reflect the everyday moments when Pop Ice becomes part of their experience.",
  },
  {
    title: "Character Illustration",
    category: "Illustration",
    image: "adventure",
    secondary: "",
    description: "Expressive characters and a colorful world of adventure.",
  },
  {
    title: "Moro Moko Pants",
    category: "Social Media",
    image: "moromoko",
    secondary: "",
    description:
      "A colorful promotional design with illustrated characters and product storytelling.",
  },
  {
    title: "Packaging Illustration",
    category: "Packaging",
    image: "packaging",
    secondary: "",
    description:
      "A family of illustrated packaging designs, with a distinct color palette for each size.",
  },
  {
    title: "BonCabe",
    category: "Packaging",
    image: "boncabe",
    secondary: "",
    description:
      "Bold colors and intricate illustrated details for BonCabe packaging.",
  },
];

export default function Projects() {
  const { category: categorySlug } = useParams();
  const category = categories.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === categorySlug,
  )?.name;
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const filtered = category
    ? projects.filter((project) => project.category === category)
    : [];
  if (categorySlug && !category) return <Navigate to="/project" replace />;
  return (
    <Box component="main" id="top">
      <Box
        component="section"
        sx={[
          styles.gallery,
          {
            pt: { xs: "32px", sm: "40px" },
            minHeight: category ? "auto" : "calc(100dvh - 68px)",
          },
        ]}
        id="gallery"
        aria-labelledby="gallery-title"
      >
        <Typography component="h1" sx={styles.galleryTitle} id="gallery-title">
          {category || <>The <Box component="em">gallery.</Box></>}
        </Typography>
        {!category && <Typography component="p" sx={{ fontSize: '15px', maxWidth: '440px', lineHeight: 1.7, mb: '35px !important' }}>Personal explorations &amp; agency collaborations.<br />Pick a collection. Take a closer look.</Typography>}
        {!category && (
          <Box sx={styles.categoryGrid}>
            {categories.map((item, index) => (
              <Reveal key={item.name} delay={index * 180}>
                <Button
                  disableRipple
                  fullWidth
                  component={RouterLink}
                  to={`/project/${item.name.toLowerCase().replaceAll(" ", "-")}`}
                  key={item.name}
                  sx={styles.category}
                >
                  <Box
                    className="category-cover"
                    sx={[
                      styles.categoryArt,
                      {
                        borderColor:
                          category === item.name ? "#111" : "transparent",
                      },
                    ]}
                  >
                    <Box component="span" sx={{ position: 'absolute', top: '12px', left: '15px', fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', fontSize: '27px' }}>0{index + 1}</Box>
                    <img src={`/images/${item.image}.png`} alt="" />
                  </Box>
                  <Box component="span" sx={styles.categoryLabel}>{item.name}</Box>
                  <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', pb: '10px', borderBottom: '1px solid #25271f35' }}><span>{projects.filter(project => project.category === item.name).length} {projects.filter(project => project.category === item.name).length === 1 ? 'project' : 'projects'}</span><span>View collection ↗</span></Box>
                </Button>
              </Reveal>
            ))}
          </Box>
        )}
        {category && (
          <Box sx={styles.galleryToolbar}>
            <p aria-live="polite">
              {category
                ? `${category} · ${filtered.length} projects`
                : "Personal & agency projects"}
            </p>
            {category && (
              <Button component={RouterLink} to="/project">
                Back to categories
              </Button>
            )}
          </Box>
        )}
      </Box>
      {category && (
        <Box
          component="section"
          aria-label="Selected projects"
          sx={{ overflowX: "clip" }}
        >
          {filtered.map((project) => (
            <Box
              component="article"
              sx={[
                styles.project,
                project.image === "tiger"
                  ? { bgcolor: "#f5ff4f", pb: { xs: 0, sm: 0, md: 0 } }
                  : {},
              ]}
              key={project.image}
            >
              <Box
                sx={[
                  styles.projectMain,
                  ["pop-ice", "packaging"].includes(project.image)
                    ? { gridTemplateColumns: "1fr", gap: "25px" }
                    : {},
                ]}
              >
                <Reveal direction="left">
                  <Button
                    disableRipple
                    sx={styles.artworkButton}
                    onClick={() => {
                      setSelected(project);
                    }}
                    aria-label={`View ${project.title} artwork`}
                  >
                    <img
                      src={`/images/${project.image}.png`}
                      alt={project.title}
                      loading="lazy"
                    />
                    <Box
                      component="span"
                      className="view-artwork"
                      sx={styles.viewArtwork}
                    >
                      View artwork
                    </Box>
                  </Button>
                </Reveal>
                <Reveal direction="right" delay={450} sx={styles.projectCopy}>
                  <Box component="span" sx={styles.projectNumber}>
                    {projects.indexOf(project) + 1}
                  </Box>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Box component="span" sx={styles.projectCategory}>
                    {project.category}
                  </Box>
                </Reveal>
              </Box>
              {project.secondary && (
                <Box sx={styles.projectSecondary}>
                  <Reveal direction="left" delay={450}>
                    <h3>
                      {project.image === "tiger" ? "Art Print" : "On fabric"}
                    </h3>
                    <p>
                      {project.image === "tiger"
                        ? "30 × 30 cm"
                        : "Illustration applied to a T-shirt"}
                    </p>
                  </Reveal>
                  <Reveal
                    direction="right"
                    component="img"
                    src={`/images/${project.secondary}.png`}
                    alt={`${project.title} mockup`}
                    loading="lazy"
                  />
                </Box>
              )}
              {project.image === "pop-ice" && (
                <Box component="aside" sx={styles.references}>
                  <Reveal direction="left" delay={450}>
                    <h3>References</h3>
                    <p>Browsing for illustration and color moods</p>
                  </Reveal>
                  <Reveal
                    direction="right"
                    component="img"
                    src="/images/references.png"
                    alt="Illustration references and colorful mood board for Pop Ice"
                    loading="lazy"
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
        aria-labelledby="artwork-title"
      >
        <DialogContent sx={styles.dialogContent}>
          <Button
            sx={styles.dialogClose}
            onClick={() => setSelected(null)}
            aria-label="Close artwork"
          >
            Close ×
          </Button>
          {selected && (
            <>
              <h2 id="artwork-title">{selected.title}</h2>
              <img src={`/images/${selected.image}.png`} alt={selected.title} />
              <p>{selected.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
