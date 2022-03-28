import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";





 describe("<Seach />", () => {
  test("Select language from dropdown", () => {
    render(
      <Router>
        
          <Search />
        
      </Router>
    );

    const searchLangPlaceholder = screen.getByPlaceholderText("Search Language...");
    expect(searchLangPlaceholder).toBeInTheDocument();
  });

  test("Type text to search", () => {
    render(
      <Router>
       
          <Search />
        
      </Router>
    );

    const searchTextPlaceholder = screen.getByPlaceholderText("Search...");
    expect(searchTextPlaceholder).toBeInTheDocument();
    
  });

  test("Select language from dropdown and navigates to /search", () => {
    render(
      <Router>
        
          <Search />
       
      </Router>
    );

    const input = screen.getByPlaceholderText("Search Language...");

    userEvent.type(input, "Javascript");
    expect(screen.getByPlaceholderText("Search Language...")).toHaveValue("Javascript");

    userEvent.type(input, `{enter}`);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("Types text in search box and navigates to /search", () => {
    render(
      <Router>
        
          <Search />
       
      </Router>
    );

    const input = screen.getByPlaceholderText("Search...");

    userEvent.type(input, "tetris");
    expect(screen.getByPlaceholderText("Search...")).toHaveValue("tetris");

    userEvent.type(input, `{enter}`);
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});



