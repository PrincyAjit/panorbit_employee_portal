# Frontend Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is hosted using github pages and can be accessed via - [https://princyajit.github.io/panorbit_employee_portal/](https://princyajit.github.io/panorbit_employee_portal/) .

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Custom scripts added

### `"predeploy": "npm run build"`

### `"deploy": "gh-pages -d build"`

The **npm run deploy** command will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

## Project Details

Some of the important dependencies used in the project are:

1.  **MaterialUI**- It is an open-source React component library that implements Google’s Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
2.  **react-router-dom** - This package contains bindings for using [React Router](https://github.com/remix-run/react-router) in web applications.

### Project Structure

In the existing project structure of react, two new folders were added under the **src** folder which are:

1.  **components** - Consists of individual/atomic components required in other components or pages.
2.  **pages** - Consists of pages of the project.
