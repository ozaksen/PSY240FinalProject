import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Fade,
} from "@mui/material";
import { createTheme, keyframes, ThemeProvider } from "@mui/material/styles";
import { NamedTupleMember } from "typescript";

interface Chapter {
  value: number;
  label: string;
}

const chapters: Chapter[] = [
  { value: 0, label: "Chapter 1" },
  { value: 1, label: "Chapter 2" },
  { value: 2, label: "Chapter 3" },
  { value: 3, label: "Chapter 4" },
  { value: 4, label: "Chapter 5" },
  { value: 5, label: "Chapter 6" },
  { value: 6, label: "Chapter 7" },
  { value: 7, label: "Chapter 8" },
  { value: 8, label: "Chapter 9" },
  { value: 9, label: "Chapter 10" },
  { value: 10, label: "Chapter 11" },
  { value: 11, label: "Chapter 12" },
  { value: 12, label: "Chapter 13" },
  { value: 13, label: "Chapter 14" },
  { value: 14, label: "Chapter 15" },
];

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface MenuProps {
  onChapterSelected: (chapterNumber: number) => void;
}
let val: number | undefined;
const Menu: React.FC<{ pass: (page: string, chapterIndex?: number) => void }> = ({ pass }) => {
  const [chapter, setChapter] = useState<string>("");

  const handleChapterChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setChapter(event.target.value as string);
    val = chapters.find(x => x.label == chapter)?.value
    console.log(val)
  };

  const handleStartAdventure = () => {
    // Set the page state to "story" and pass the selected chapter as a prop
    pass("story", val);
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6} sx={{ bgcolor: "primary.main", color: "white", p: 6, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Fade in={true} timeout={2000} style={{ animationDelay: "500ms", animation: `${fadeIn} 1s ease-in-out` }}>
            <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: "center" }}>
              Welcome to the PSY240 Final Project
            </Typography>
          </Fade>
          <Fade in={true} timeout={2000} style={{ animationDelay: "1s", animation: `${fadeIn} 1s ease-in-out` }}>
            <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
              Choose a chapter to start the adventure.
            </Typography>
          </Fade>
          <Fade in={true} timeout={2000} style={{ animationDelay: "1s", animation: `${fadeIn} 1s ease-in-out` }}>
            <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
              Akif Ozer
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 6 }}>
          <FormControl fullWidth sx={{ mr: 2 }}>
            <InputLabel id="chapter-select-label">Chapter</InputLabel>
            <Select
              labelId="chapter-select-label"
              id="chapter-select"
              value={chapter}
              label="Chapter"
              onChange={(event) => {
                setChapter(event.target.value as string);
                val = parseInt(event.target.value as string)
              }}
            >
              {chapters.map((chapter) => (
                <MenuItem key={chapter.value} value={chapter.value}>
                  {chapter.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Fade in={true} timeout={2000} style={{ animationDelay: "1.5s", animation: `${fadeIn} 1s ease-in-out` }}>
            <Button variant="contained" onClick={handleStartAdventure}>
              Start the Adventure
            </Button>
          </Fade>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Menu;