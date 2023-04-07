import { expect, describe, it } from "vitest";
import { renderWithClient } from "queries/utils";
import { QueryClient } from "@tanstack/react-query";
import { screen } from "@testing-library/react";

import GithHubUserSearch from "./GithHubUserSearch";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("GithHubUserSearch", () => {
  it("renders the search form", () => {
    renderWithClient(queryClient, <GithHubUserSearch />);

    expect(
      screen.getByRole("textbox", { name: "username" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });
});
