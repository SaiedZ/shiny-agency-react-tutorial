# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Rappel

## Int??grez les r??gles des hooks (https://fr.reactjs.org/docs/hooks-reference.html)

Je le rappelle ici : les hooks ont leurs propres r??gles d???utilisation.

-   Les hooks sont uniquement accessibles dans un composant fonction React. Donc ce n'est pas possible d???en utiliser dans un composant classe ou bien dans une simple fonction JavaScript.

-   Appelez les hooks au niveau racine de vos composants.

-   Attention au nommage de vos hooks personnalis??s : m??me s???il ne s???agit pas vraiment d???une r??gle obligatoire, mais d???une convention, vos hooks personnalis??s doivent commencer par use pour que l???on sache en un coup d?????il qu???il s???agit d???un hook.

## Autres hooks

### useRef

Il existe plusieurs utilisations de `useRef` , mais ce hook est avant tout utilis?? pour interagir avec des ??l??ments du DOM.

### useReducer

`useReducer` permet de mieux g??rer votre state lorsqu???il comporte de nombreuses propri??t??s qui doivent ??tre modifi??es r??guli??rement.

### useMemo et useCallback

Ces deux hooks nous permettent d?????viter de refaire des calculs co??teux pour nos performances. Vous pouvez pr??ciser des valeurs pour lesquelles il faudra refaire les calculs uniquement si l???un des param??tres change, gr??ce ?? `useMemo` et `useCallback`.

npm install --save --save-exact react-scripts@5.0.1
