import { rest } from "msw";

export const getUserResponseMocked = {
  avatar_url: "https://avatars.githubusercontent.com/u/5953?v=4",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  html_url: "https://github.com/foobar",
  login: "foobar",
  name: "Tristan Su",
  repos_url: "https://api.github.com/users/foobar/repos",
};

export const getReposResponseMocked = [
  {
    name: "algc",
    html_url: "https://github.com/foobar/algc",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "algo",
    html_url: "https://github.com/foobar/algo",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Awesome-Geospatial",
    html_url: "https://github.com/foobar/Awesome-Geospatial",
    stargazers_count: 0,
    forks_count: 0,
  },
];

export const getHappyUserResponseHandler = rest.get(
  "https://api.github.com/users/foobar",
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getUserResponseMocked));
  }
);

export const getFailureUserResponseHandler = rest.get(
  "https://api.github.com/users/askccdf",
  (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: { message: "Does not exist" },
      })
    );
  }
);

export const getHappyUserReposResponseHandler = rest.get(
  "https://api.github.com/users/foobar/repos",
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getReposResponseMocked));
  }
);

export const getEmptyUserReposResponseHandler = rest.get(
  "https://api.github.com/users/foobar/repos",
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }
);

export const handlers = [
  getEmptyUserReposResponseHandler,
  getFailureUserResponseHandler,
  getHappyUserReposResponseHandler,
  getHappyUserResponseHandler,
];
