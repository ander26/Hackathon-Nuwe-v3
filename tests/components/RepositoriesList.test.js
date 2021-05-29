import React from "react";
import { render, screen } from "@testing-library/react";
import RepositoriesList from "../../components/RepositoriesList/index.js";

describe("SearchForm", () => {
  it("it shouldn't render image when there is no content", () => {
    render(<RepositoriesList />);

    const image = screen.queryByRole("img");
    expect(image).toBeNull();
  });
});
