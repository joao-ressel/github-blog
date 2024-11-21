import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Post } from "./pages/post";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:issueNumber" element={<Post />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
