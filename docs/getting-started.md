## Project URLs:
1. [Azure Devops](https://dev.azure.com/mic-software/Jobfactor/_sprints)
2. [Development React app](https://calm-river-0d22b631e-dev.westus2.2.azurestaticapps.net/login)
3. [Development Api](https://jobfactor-api-dev.azurewebsites.net/api)
4. [Production React app](https://calm-river-0d22b631e.2.azurestaticapps.net/login)
5. [Production Api (todo)]()
6. [Storybook (todo) use localhost for now](http://localhost:6006/) `npm run storybook`
7. If you need access to Azure resources (server's, DB, pipelines), please follow up with your Manager or team lead. 

## Project outline:
1. MUI: as our standard UI library
2. Storybook: for component development
3. Jest: for unit testing
4. Husky: for pre-commit and pre-push hooks 
5. Prettier: for code formatting 
6. Eslint: for code linting 
7. React Router Dom: for routing 
8. React Query: for data fetching 
9. React Hook Form: for form handling


## Developer workflow

1. Make the story in progress on Azure Devops (Ideally try and have only one active task at one time, sometimes it's okay to have more than one story in progress when the stories are related to each other )
2. Add individual tasks to the story, and assign them to yourself and move them to the appropriate `status` column on the board
3. Create a new branch from `master` branch with the name `feature/<task-id>-<feature-name>` or `bugfix/<task-id>-<bugfix-name>` or `hotfix/<task-id>-<hotfix-name>` or `release/<task-id>-<release-name>`
4. Make changes in the new branch and commit them and finally run `npm run format` to format the code (in-future, formatting will be done automatically on pre-commit hook)
5. Push the changes to the remote branch.
6. Manually Test the changes locally and on the dev environment (highly recommended to test the changes on the dev environment before creating a pull request)
7. Create a pull request from the remote branch to `master` branch
8. Assign the pull request to a reviewer
9. Once the reviewer approves the pull request, Use `Squash` on the UI and the message as the same description from the PR and merge the PR to `master` branch


## Project code standards:

_Please feel free to add to this list as you see fit, or challenge the existing ones if you feel they are not appropriate._

1. `const` over `let` and `var` when declaring variables.
2. `someValue ? <> </> : null` ternary operator  over `someValue && <> </>` for conditional rendering in JSX. [Kent C. Dodds](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)  
3. `===` over `==` for comparison.
4. `!!someValue ? <> </> : ` over `someValue ? <>  </> : <>  </>` for value truthy check.
5. `!!someArray?.length` over `someArray?.length > 0` or `someArray ?` for array truthy check. ( `?.` Optional Chaining Operator)
6. `!!someObject?.someProperty` over `someObject?.someProperty ?` for object property truthy check.
7. `someValue ?? someDefaultValue` over `someValue ? someValue : someDefaultValue` for default value assignment. ( `??` Nullish Coalescing Operator)
8. Replace Nested Conditional with Guard Clauses. (`Early return pattern` _remove nested if else_) [Martin Fowler](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)
9. Interfaces in typescript should be named with a capital `I` prefix. e.g. `interface IMyInterface`
10. constants.ts file for storing constants (per component/page).
    ```
    const SOME_CONSTANT = 'some_constant' // move this to the constants.ts file local to that (component, page)
    ```
11. Strict data typing in typescript. (for function return types, function arguments, variables, etc. and avoid `any` type)
12. enums for most cases:  (PascalCase on the left side, UPPER_SNAKE_CASE on the right side)
    ```
    const enum UserStatus {
        Active = 'ACTIVE',
        Inactive = 'INACTIVE'
    }
    ```
13. enums for URL mappings (Pascal on the left side, kebab-case on the right side)
    ```
    const enum UrlMapping {
        Users = 'users',
        Home = 'home'
    }
    ```
14. Prefer non-primitive (e.g. object, array, etc.) over primitive types (e.g. string, number, etc.) when deriving state in Child component
    ```
    <SomeComponent someProp={someObject} /> // ✅ pass non-primitive value (should be derivable in the child component)
    <SomeComponent isActive={someObject.isActive} name={someObject.name} /> // ❌ 
    ```
    