import { expect, describe, it } from "vitest";

import { renderWithClient } from "queries/utils";

import { QueryClient } from "@tanstack/react-query";
import { screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import GithHubUserSearch from "./GithHubUserSearch";
import { getReposResponseMocked } from "mocks/handlers"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("GithHubUserSearch", () => {
  it("displays the search form", () => {
    renderWithClient(queryClient, <GithHubUserSearch />);

    expect(
      screen.getByRole("textbox", { name: "username" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it('displays the progress bar', async () => {
    renderWithClient(queryClient, <GithHubUserSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'username' });
        const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'foobar');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      
    });
  });

  it('displays the user card info', async () => {
    renderWithClient(queryClient, <GithHubUserSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'username' });
        const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'foobar');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(screen.getByRole('img', {name: 'Tristan Su'})).toBeInTheDocument();
      expect(screen.getByText(/foobar/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', {name: /Tristan Su/i})).toBeInTheDocument();
      expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument();
    });
  });

  it('displays the a repo list', async () => {
    renderWithClient(queryClient, <GithHubUserSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'username' });
        const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'foobar');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(screen.getByRole('heading', {name: /repositories/i})).toBeInTheDocument();
      for (let i = 0; i < getReposResponseMocked.length; i += 1) {
        expect(
          screen.getByText(getReposResponseMocked[i].name)
        ).toBeInTheDocument();
      }
      
    });
  });

  it('displays the an alert when no repos are available', async () => {
    renderWithClient(queryClient, <GithHubUserSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'username' });
        const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'foo');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(screen.getByRole('heading', {name: /repositories/i})).toBeInTheDocument();
      expect(
        screen.getByText(/no repositories available/i)
      ).toBeInTheDocument();
      
    });
  });

  it('displays an alert when an username does not exist', async () => {
    renderWithClient(queryClient, <GithHubUserSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'username' });
        const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'askccdf');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(
        screen.getByText(/does not exist/i)
      ).toBeInTheDocument();
    });
  });
});
