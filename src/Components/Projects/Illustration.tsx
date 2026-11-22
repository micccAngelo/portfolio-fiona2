import { useState } from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Reveal from "../Layout/Reveal";

const asset = (name: string) => `/images/illustration/${name}`;
const content = {
  width: "min(100% - 48px, 1540px)",
  mx: "auto",
  "@media (min-width: 601px)": { width: "min(82%, 1540px)" },
} satisfies SxProps<Theme>;
const title = {
  fontFamily: '"DM Sans", Arial, sans-serif',
  fontSize: { xs: "30px", sm: "46px", md: "64px" },
  fontWeight: 700,
  lineHeight: 1.12,
  letterSpacing: "-.045em",
} satisfies SxProps<Theme>;
const paragraph = {
  fontSize: { xs: "16px", sm: "19px", md: "23px" },
  lineHeight: 1.55,
  maxWidth: "920px",
} satisfies SxProps<Theme>;

function Divider({ color }: { color: "yellow" | "blue" | "green" }) {
  return (
    <Box aria-hidden="true" sx={{ overflow: "hidden", lineHeight: 0 }}>
      <Box component="img" src={asset(`divider-${color}.png`)} alt="" sx={{ display: "block", width: "100%", minWidth: "650px", height: "auto" }} />
    </Box>
  );
}

function ProjectTitle({ number, children }: { number: number; children: string }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 3, mb: { xs: 3, md: 6 } }}>
      <Typography component="h2" sx={title}>{children}</Typography>
      <Box component="span" aria-label={`Project ${number}`} sx={{ bgcolor: "#363735", color: "white", borderRadius: "50%", width: { xs: 38, md: 62 }, height: { xs: 38, md: 62 }, flexShrink: 0, display: "grid", placeItems: "center", fontFamily: '"Instrument Serif", Georgia, serif', fontSize: { xs: 29, md: 44 }, lineHeight: 1 }}>{number}</Box>
    </Box>
  );
}

export default function Illustration() {
  const [selected, setSelected] = useState<{ file: string; alt: string } | null>(null);
  const artwork = (file: string, alt: string, options?: { eager?: boolean }) => (
    <Button
      disableRipple
      aria-label={`Enlarge ${alt}`}
      onClick={() => setSelected({ file, alt })}
      sx={{ display: "block", p: 0, minWidth: 0, width: "100%", borderRadius: 0, lineHeight: 0, "&:hover": { bgcolor: "transparent" }, "&:focus-visible": { outline: "3px solid #25271f", outlineOffset: 5 }, "& img": { display: "block", width: "100%", height: "auto" } }}
    >
      <Box component="img" src={asset(file)} alt={alt} loading={options?.eager ? "eager" : "lazy"} decoding="async" />
    </Button>
  );

  return (
    <Box component="main" id="top" sx={{ bgcolor: "#fff", color: "#363735", overflowX: "clip", pb: { xs: 6, md: 12 } }}>
      <Box sx={[content, { py: { xs: 4, md: 7 }, display: "flex", justifyContent: "space-between", gap: 2, alignItems: "center" }]}>
        <Typography component="h1" sx={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: { xs: 40, md: 64 }, lineHeight: 1 }}>Illustration</Typography>
        <Button component={RouterLink} to="/project" sx={{ flexShrink: 0, fontSize: { xs: 12, sm: 15 }, minHeight: 44 }}>Back to categories</Button>
      </Box>
      <Divider color="yellow" />

      <Box component="article" aria-labelledby="pop-ice-title" sx={{ pt: { xs: 3, md: 6 } }}>
        <Reveal direction="left">{artwork("pop-ice.jpg", "Pop Ice banner with colorful characters and a pink drink", { eager: true })}</Reveal>
        <Box sx={[content, { pt: { xs: 4, md: 8 }, pb: { xs: 5, md: 9 } }]}>
          <Reveal direction="right" delay={450}>
            <Box id="pop-ice-title"><ProjectTitle number={1}>POPICE Banner</ProjectTitle></Box>
            <Typography component="h3" sx={{ fontSize: { xs: 20, md: 28 }, fontWeight: 700, mb: 1 }}>300 × 120 cm</Typography>
            <Typography sx={paragraph}>An alternative banner illustration created for Pop Ice, featuring young people immersed in their everyday activities. The diverse characters and playful visual elements capture the youthful, energetic spirit of the brand and reflect the everyday moments when Pop Ice becomes part of their experience.</Typography>
          </Reveal>
          <Box component="figure" sx={{ m: 0, mt: { xs: 4, md: 6 } }}>
            <Reveal direction="left" sx={{ width: { xs: "100%", md: "80%" } }}>{artwork("pop-ice-sketch.jpg", "Rough concept sketch for the Pop Ice banner")}</Reveal>
            <Reveal direction="right" delay={450} sx={{ ml: { xs: 0, md: "62%" }, mt: { xs: 3, md: 1 } }}>
              <Typography component="figcaption" sx={paragraph}>Rough sketches exploring the initial ideas and visual direction before final development.</Typography>
            </Reveal>
          </Box>
        </Box>
        <Reveal direction="right">{artwork("pop-ice-billboard.jpg", "Pop Ice illustration displayed on a station billboard")}</Reveal>
      </Box>

      <Box component="article" aria-labelledby="jayjay-title">
        <Box sx={{ position: "relative", isolation: "isolate", pt: { xs: 5, md: 10 }, pb: { xs: 6, md: 12 }, "&::before": { content: '""', position: "absolute", inset: 0, zIndex: -1, backgroundImage: `url(${asset("jayjay.jpg")})`, backgroundSize: "cover", backgroundPosition: "center 35%", opacity: .075, maskImage: "linear-gradient(black 50%, transparent 90%)" } }}>
          <Reveal direction="left" sx={{ width: { xs: "78%", sm: "65%", md: "62%" }, maxWidth: 1050, mx: "auto" }}>{artwork("jayjay.jpg", "Jayjay School character with an adventure backpack and a cat")}</Reveal>
          <Reveal direction="right" delay={450} sx={[content, { mt: { xs: 4, md: 5 }, maxWidth: "1050px" }]}>
            <Box id="jayjay-title"><ProjectTitle number={2}>Jayjay School</ProjectTitle></Box>
            <Typography component="h3" sx={{ fontSize: { xs: 20, md: 28 }, fontWeight: 700, mb: 1 }}>DTIYS Competition</Typography>
            <Typography sx={paragraph}>An artwork I submitted for a DTIYS (Draw This in Your Style) competition hosted by Jayjay School. Although I didn’t win, I’m proud of the result as it gave me an opportunity to explore and experiment with a new art style.</Typography>
          </Reveal>
        </Box>
        <Reveal direction="left">{artwork("jayjay-process.jpg", "Jayjay rough sketch and visual exploration moodboard")}</Reveal>
        <Reveal direction="right" delay={450} sx={[content, { textAlign: { xs: "left", sm: "center" }, py: { xs: 5, md: 9 } }]}>
          <Typography component="h3" sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 700, mb: 3 }}>Creative Process &amp; Visual Exploration</Typography>
          <Typography sx={{ ...paragraph, mx: "auto" }}>The process began with rough concept sketches to establish the initial composition and character placement. On the right, I explored visual directions through a collection of moodboard references, color palettes, and visual elements in vector illustrations. This stage helped define the overall aesthetic and establish a cohesive visual direction for the final poster.</Typography>
        </Reveal>
      </Box>

      <Divider color="blue" />
      <Box component="article" aria-labelledby="ten-ten-title">
        <Box sx={{ position: "relative", isolation: "isolate", pt: { xs: 5, md: 10 }, "&::before": { content: '""', position: "absolute", inset: 0, zIndex: -1, backgroundImage: `url(${asset("ten-ten.jpg")})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .075, maskImage: "linear-gradient(black 45%, transparent 90%)" } }}>
          <Reveal direction="left" sx={[content, { "& > button": { width: { xs: "88%", md: "75%" } } }]}>{artwork("ten-ten.jpg", "TEN TEN NYC Kawaii Holiday Market poster")}</Reveal>
          <Reveal direction="right" delay={450} sx={[content, { py: { xs: 5, md: 8 } }]}>
            <Box id="ten-ten-title"><ProjectTitle number={3}>TEN TEN NYC</ProjectTitle></Box>
            <Typography component="h3" sx={{ fontSize: { xs: 20, md: 28 }, fontWeight: 700, mb: 1 }}>Poster Competition</Typography>
            <Typography sx={paragraph}>A poster submission for a competition hosted by TEN TEN NYC, themed “Where Kawaii Becomes a Blessing.” I explored a playful visual direction by combining various cute elements with their signature pudding mascot, incorporating vibrant colors inspired by their brand identity. For the characters, I experimented with a quirky yet playful style, balancing unique expressions and personalities while maintaining an overall kawaii aesthetic.</Typography>
          </Reveal>
        </Box>
        <Box sx={{ width: { xs: "calc(100% - 48px)", sm: "78%", md: "72%" }, maxWidth: 1400, ml: { xs: "24px", sm: "18%" }, display: "grid", gap: { xs: 3, md: 5 } }}>
          <Reveal direction="left">{artwork("ten-ten-poster.jpg", "Kawaii Holiday Market poster displayed on an outdoor wall")}</Reveal>
          <Reveal direction="right">{artwork("extra.jpg", "Kawaii Holiday Market illustration applied to white T-shirts")}</Reveal>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: 4, md: 0 } }}><Divider color="green" /></Box>
      <Box sx={[content, { pt: 4 }]}><Button component={RouterLink} to="/project">Back to all collections</Button></Box>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="lg" fullWidth aria-labelledby="illustration-preview-title">
        <DialogContent sx={{ p: { xs: 2, sm: 3 }, bgcolor: "white" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "space-between", mb: 2 }}>
            <Typography component="h2" id="illustration-preview-title" sx={{ fontSize: { xs: 18, sm: 24 } }}>{selected?.alt}</Typography>
            <Button onClick={() => setSelected(null)} sx={{ flexShrink: 0 }}>Close ×</Button>
          </Box>
          {selected && <Box component="img" src={asset(selected.file)} alt={selected.alt} sx={{ display: "block", width: "100%", height: "auto" }} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
