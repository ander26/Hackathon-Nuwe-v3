import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/UserCard/index.js";

describe("SearchForm", () => {
  it("shouldn't render the label", () => {
    render(<SearchForm />);

    expect(() => screen.getByText("Usuario de Github")).toThrow();
  });
});
