import { Box, Card, CardContent, CardHeader, FormControlLabel, FormGroup, Switch, Typography, colors } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo,useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkThemeSettings,LightThemeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import ContentBox from "@/components/ContentBox";

function App() {


  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const theme = useMemo(() => createTheme(isDarkTheme ? createTheme(DarkThemeSettings) : createTheme(LightThemeSettings)), [isDarkTheme]);
console.log(theme);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2 rem 4rem 16rem">
          <BrowserRouter>
        

          <Navbar isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
            <ContentBox>
              <Routes>
                <Route path="/" element={<Dashboard isDarkTheme={isDarkTheme}/>} />
                <Route
                  path="/predictions"
                  element={<div>predictions pages</div>}
                />
              </Routes>
            </ContentBox>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
