# Market Place - Frontend

Base code for the frontend of the Marketplace web app.

## How to run the project

```
1. npm install
2. npm start
```

Make sure to have the latest stable version of node and react. You can find them here: [Node](https://nodejs.org/en/) and [Create React App](https://create-react-app.dev/docs/getting-started).

## How to collaborate

1. Make sure to create a new branch from dev.
2. Name your branch using the notation `feature/{JIRA_TICKET}` in case of a story or feature ticket, and use the notation `fix/{JIRA_TICKET}`in case of bug or issue ticket.
3. For commits,

- Use the notation `{feat/fix/chore}: [{JIRA_TICKET}] {COMMIT_MESSAGE}` on the first commit of your branch.
- The project uses Husky hooks and have a `pre-commit` hook configured.
  - This will run the `lint-staged` command which will format your staged files using prettier.

4. Before pushing a branch, another husky hook will be triggered. This will check that all tests are covered and don't throw any error.
5. Create a Pull Request to `dev` and wait for the team to review it before merge it.

- Make sure to include a link to the Jira ticket that is related to the branch.
- The title of the PR should be clear on the purpose of the feature or fix.
- Add context on what has been done in the branch (components that where created and what for, libraries that were installed, etc.)
- Please add the necessary steps to test the functionality of the feature/fix.
- If possible add evidence on the behaviour before the fix was added and how it turned out. This can be via screenshots or screen recordings from before and after.

6. Once your PR is approved you can go directly and click on `rebase and merge`.
7. Ask for advice if anyhting isn't clear to you or if you want to make the code better.
8. Have fun :)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

See the section about [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) for more information.
