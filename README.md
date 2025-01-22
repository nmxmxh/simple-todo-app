# Simple Todo App

## Cloned from [Code Repo](https://github.com/Ibaslogic/simple-todo-app)

This project can be ran (on development environment) via "yarn start" after successful installation.
This project can be also be tested (on development environment) via "yarn test" after successful installation.

Some of the most important features to implement in this group todo app would be:

1. User authentication, grouping and tagging would be the most important feature to develop.
2. Assigning Todos to the user who created them.
3. Accessing and implementing permission levels, understand what functionality is available relative to the user and the todo application.
4. Upgrade the current codebase structure and architecture (running on a 2020 build, most functionality was obsolete).
5. Improve codebase state management, abstract todos logic to central hook.
6. Improve HTML & CSS structure, accurately assigning relevant tags to accompany funtionality.
7. Improve aesthetic experience of application.
8. Create a default Button components as single source of truth for button functionality.

Considering the given timeline, I decided to implement a few of these features.
Mostly focusing on the codebase structure (technical debt), architecture, style implementation, aesthetics.

I will be using the commit history to record my observations and progress through the challenge.

- switched package manager to yarn:

I switched the package manager to yarn instead of npm.
over time, I have found out that it's easier to manage my project with yarn rather than npm.
so I went with the faster solution to hasten my progress.

- upgraded the dependencies

I decided to upgrade the dependencies, most of the react implementation was obsolete.
So I upgraded my dependencies to the latest react versions.

- added "@babel/eslint-parser" to fix outdated issues

this also raised some issues with parsing,
I looked into the releant documentation is relation to fixing it and implemented my solution.

- changed naming and import architecture

I changed the naming and import architecture.
some of this was referenced from documentation in StackOverflow so I added the relevant link.
changed the container from TodoContainer to App to properly reference the application.
Also changed the file hierachy to reflect it's position.

- added fix for server error

addressed a console warning in relation to using outdated frameworks.

- added css, changed default font to Open Sans

added a better fitting font family and initial styling to the application.

- switch to functional components

made the switch to functional components.
implemented todo logic to closely tie in with previous class logic.

- style clean up, component styles housed in components

cleaned up the styling housed in the App.css file.
a central style file to manage styling can be bad for complexity, especially with the expansion of the applciation.

- added styled components

added styled components & framer-motion to properly handle component styling & animations.
I thought the application could benefit from a better style experience.

- switch to styled implementation

switch the style implementation to a styled components based implementation.
also added media queries, disabled states and hover states for relevent components.
also switched submit for todo input from input to button.
this can be a very bad implementation, especially in relation to accessibility.

- improve animations, fade in, styled with framer

implemented layout and fade in animations for styled components,
based on my mini utility library for simple animations with framer-motion.
added utility files in next commit.

- added utility style sheets

added the fade-in & layout-group utility style files.

- added in case of space only string

noticed edge case of possible empty string or string with spaces.
added return function after the trim method has been run on the title string and it returns a falsy value.

- added tests

I can be bad with writing test.
relied on AI to help me effectively develop test cases for the current application.

- improved styling, naming

styling and naming fixes before submission.
