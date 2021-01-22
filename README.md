# Decagon Dev-Placement-Web

[![Actions Status](https://github.com/adeoluwa-adebiyi/decagon-placement-web/workflows/Test,%20Build%20&%20Deploy/badge.svg)](https://github.com/adeoluwa-adebiyi/decagon-placement-web/actions)


## Description

### Task: Build the dashboard with the design below

### Contact

- Name: Adeoluwa Adebiyi
- Email: adeoluwaadebiyi@gmail.com

### Links:

- Live: https://6000bbedc9b17160738abe83--live-decagon-nexus.netlify.app

- Staging: https://decagon-nexus.netlify.app


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

