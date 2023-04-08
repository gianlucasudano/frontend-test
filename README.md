# Frontend Test

## GOALS


#### The main goal of this test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of React
2. Clean, maintainable & easy-to-read code
3. Good architectural practices

## HOW TO START

1. Investigate the github api calls for user and repos
2. Fork this repository
3. Start coding!

## NOT REQUIRED, BUT IMPRESSIVE

- Adding Unit Testing

## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![](https://github.com/Workfully-github/frontend-test/blob/main/images/First-Screen.png)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://github.com/Workfully-github/frontend-test/blob/main/images/Success-screen.png)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://github.com/Workfully-github/frontend-test/blob/main/images/Error-screen.png)

# Frontend Test: Home Task

## Tech Approach

`Initial App Setup`:

To speed up the initial setup, I selected tools and dependencies from my [starter web application](https://github.com/gianlucasudano/web-dev-lab).
This allowed for more time to understand the integration of dependencies required for this home task.

* **Pros**: Environment based on my previous expertise.
* **Cons**: No cons.

`Folder Structure`:

I followed a conventional approach to ensure separation of concerns, scalability, and easy management and accessibility of resources.

* **Pros**: Ensures easy management and accessibility of resources.
* **Cons**: No cons

`UI and Use of Third-Party Libraries`:

I used ready-made components, combining those in customized components.

* **Pros**: Speeds up implementation and allows for focus on the main task.
* **Cons**: There is a small risk associated with the use of external libraries, such as annoying problems or difficulties with profiling.

`Data fetching and queries`:

I used [TanStack Query](https://tanstack.com/query/v4)
* **Pros**: Speeds up implementation and allows for focus on the main task.
* **Cons**: No cons

`Testing`:

I used React Testing Library and Vitest, which is recommended by most known frameworks.

* **Pros**: Ensures the quality of the app and provides a reliable testing framework.
[Vitest](https://vitest.dev/guide/comparisons.html#jest)
* **Cons**: No cons

## Tasks-Prioritization

When I started working on my task, my main objective was to retrieve data from GitHub APIs using hard-coded data and TanStack queries. To achieve this, I first created a personal access token in GitHub and used Postman to determine which data would be useful for my project.

I followed a structured approach that involved defining the types, queries, and handlers for testing purposes. This helped me proceed methodically and avoid common errors that can arise from typos or other mistakes. By adhering to clear rules and guidelines, I was able to work efficiently and avoid frustrating setbacks that could have impeded my progress.

As I worked on implementing my solution, I incrementally added the necessary features, optimized my code, and added missing tests. I also refactored or adjusted parts of my code to ensure consistency and readability.

As a result of these efforts, I was able to create a search form that allows users to search for other users by their username. The form displays a card with general information about the user, as well as a list of their public repositories.

## Issues and how I resolved

Overall, I didn't encounter any significant issues while working on my project. The only obstacle I faced was trying to import an icon that wasn't available in the MUI icons library using the 'vite-plugin-svgr' plugin.

Despite my initial efforts to use the plugin correctly, I was unable to make it work as intended. However, I was able to overcome this little challenge by utilizing an MUI utility called 'createSvgIcon'. This allowed me to include the required icon in my project without relying on the problematic use of the plugin.

## Areas for Improvement

There are a few areas where the app could be improved to enhance the user experience and overall functionality:

`UI and UX`: The user image is currently too large for mobile screens, causing text information to overflow and break the layout. To improve this, the image size could be reduced for mobile breakpoints. This would enhance the user experience and ensure that the app is usable across different devices.

`Error Control`: Currently, if an error occurs, it's always interpreted as a 404 error. To improve this, error control could be extended to include more detailed error messages. This would help users better understand the cause of the error and provide guidance on how to resolve it.

`Call to Action Button`: While the user image and repositories name are linked to GitHub, adding a Call to Action (CTA) button could enhance the app's functionality. This would allow users to easily navigate to the linked content.

`Infinite Scrolling`: Currently, the app renders all repositories at once. However, this could be improved by exploring the solution of infinite scrolling. This would enable the app to display a set number of repositories initially and load more as the user scrolls down.

`Security`: Currently, the token is stored in the .env file. However, it's important to explore more secure solutions offered by GitHub. This would ensure that the app is secure and protect against potential security threats.

## Feedback about the test

Overall, I really enjoyed the test and found it to be a positive experience. It increased my curiosity about the challenges of working in Workfully and offered an initial idea of the types of challenges that may be encountered.

I appreciated the honesty of the test and the fact that it allowed me to learn new things and practice my existing skills. Overall, it was a great opportunity to showcase my abilities and demonstrate my passion for programming.

# Installation

Download, or clone the repo in one folder and install packages.

```bash
To install dependencies use `npm install`
```

# Usage

To run the app, open your terminal and execute the command `npm run dev`. Once the app has started, you should see something similar to the following.
###  Runs the app `npm run dev`
```bash
     VITE v4.1.1  ready in 643 ms
      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
      ➜  press h to show help
```

#
### Navigates on the browser `http://localhost:5173`
Once the app and the server are running, open a browser and visit this page: http://localhost:5173

If searching for users, is always displayed the alert that informs the user does not exist, probably because the Token is expired. Please generate a new one using this [GitHub page](https://github.com/settings/tokens?page=1&type=beta) and replace the existing one with the new one in the file .env

#
To run all tests, open a new tab in your terminal and execute the command `npm run test`. Once the tests has executed, you should see something similar to the following.
### Runs the tests `npm run test`
``` bash
    ✓ src/components/GithHubUserSearch/GitHubUserSearch.test.tsx (6) 771ms

    Test Files  1 passed (1)
         Tests  6 passed (6)
      Start at  15:53:44
      Duration  1.57s


    PASS  Waiting for file changes...
          press h to show help, press q to quit
```

## The project utilized the following tools/dependencies:

- "vite": https://vitejs.dev/
- "vitest": https://vitest.dev/
- "react": https://reactjs.org/
- "typescript": https://www.typescriptlang.org/
- "msw": https://mswjs.io/
- "axios": https://axios-http.com/
- "react-query": https://tanstack.com/query/latest
- "react-hook-form": https://react-hook-form.com/
- "testing-library": https://testing-library.com/
- "MUI": https://mui.com/




