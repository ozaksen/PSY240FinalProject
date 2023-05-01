import React, { useState } from 'react';
import './App.css';
import WelcomeCard from './components/menuCard';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';
import StoryPage from './components/storyPage';
import Menu from './components/menuCard';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("menu");
  const [selectedChapter, setSelectedChapter] = useState(0);

  const handlePageChange = (page: string, chapterIndex?: number) => {
    setCurrentPage(page);
    if (chapterIndex !== undefined) {
      setSelectedChapter(chapterIndex);
    }
  };

  return (
    <>
      {currentPage === "menu" && <Menu pass={handlePageChange} />}
      {currentPage === "story" && (
        <StoryPage setCurrentPage={handlePageChange} chapterIndex={selectedChapter} />
      )}
    </>
  );
};

export default App;

