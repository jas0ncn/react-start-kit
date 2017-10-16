# React Start Kit

Quick start with React and TypeScript.

## Packages Including

 - react
 - react-router
 - redux
 - redux-thunk
 - redux-actions
 - less-complier

## Commands

Install dependencies

```bash
npm i
```

Run as development environment

```bash
npm run dev
```

Build files for production

```bash
npm run build
```

## Project structure

```bash
├── index.html           # main html template
├── node_modules
├── package-lock.json
├── package.json
├── dist                 # production file
├── src                  # source code
    ├── App.tsx                   # react entry
    ├── actions                   # redux actions
    ├── common                    # common code folder
    ├── components                # common components folder
    ├── constants                 # constants definitions
    │   └── ActionTypes.ts        # └── react action types
    ├── index.tsx                 # project entry
    ├── less                      # styles
    │   ├── _normalize.less
    │   ├── _reset.less
    │   ├── _variables.less
    │   ├── components            # ├── components styles
    │   ├── index.less
    │   ├── common                # ├── common styles
    │   └── pages                 # └── pages' styles
    ├── models
    │   ├── RootState.ts
    │   └── index.ts
    ├── pages
    │   └── index.ts
    ├── reducers                  # redux reducer
    │   └── RootReducer.ts
    └── stores                    # redux store
        └── RootStore.ts
├── static               # static files folder
├── tsconfig.json        # TypeScript configuration
├── tslint.json          # tslint rules
├── typings              # typings definitions
└── webpack              # webpack configuration
```

