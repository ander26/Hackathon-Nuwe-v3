import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../../components/UserCard/index.js";

describe("UserCard", () => {
  it("should render the username", () => {
    const userInfo = {
      following: 3,
      followers: 2,
      avatar_url:
        "https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg",
      name: "Usuario 1",
      public_repos: 4,
      login: "prueba",
    };
    render(<UserCard user={userInfo} />);

    screen.getByText(/@prueba/i);
  });
  it("should render the user's name", () => {
    const userInfo = {
      following: 3,
      followers: 2,
      avatar_url:
        "https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg",
      name: "Usuario 1",
      public_repos: 4,
      login: "prueba",
    };
    render(<UserCard user={userInfo} />);

    screen.getByText(/Usuario 1/i);
  });
  test('Logo must have src = "https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg" and alt = "Foto de usuario de Usuario 1"', () => {
    const userInfo = {
      following: 3,
      followers: 2,
      avatar_url:
        "https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg",
      name: "Usuario 1",
      public_repos: 4,
      login: "prueba",
    };
    render(<UserCard user={userInfo} />);
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute(
      "src",
      "https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg"
    );
    expect(avatar).toHaveAttribute("alt", "Foto de usuario de Usuario 1");
  });
});
