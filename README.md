# Decagon Dev-Placement-Web

![Test Passing Status](https://github.com/adeoluwa-adebiyi/decagon-devplacement-web/workflows/develop/badge.svg)


## Decsription

### Task: Build the dashboard with the design below


### Tools Used
- React
- Redux
- React-Redux
- Redux Saga
- Jest
- Axios Mock Aadapter

#### Overview

The App is developed using the React View library integrated with the Redux Store using React-Redux provider to provide store context.
The app follows the clean-code patter with the development originating from the entities (models) upwards.
There are key parts of the app namely;

- The Models (Domain Layer)
- The Entities
- The Store
- The Repositories
- The Apis
- The Action Interceptors
- The Task Runners (Saga Generators)

A brief overview of flow of data in the app:

    Api -> Repo -> Enities -> Store -> Models -> View Layer

    and

    View-Layer -> Action Interceptors -> Generator Task Runners -> Repo -> Entities -> Store

