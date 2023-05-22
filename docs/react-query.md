## React Query

### What is React Query? [Docs](https://tanstack.com/query/v3/)
what is React-Query
React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.


#### Basic Example for retrieving data from an API
```js
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
```

In the above example, we create a query client and wrap our `App` application with a QueryClientProvider. 
This provides a context for our useQuery hook to work properly. 
Then, we use the useQuery hook to fetch some data from the GitHub API and display it in our component.

we can refactor the above code into a custom hook:

```js
import { useQuery } from 'react-query'
const useGetGithubData = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )
  return { isLoading, error, data }
}
```

simply import and use the custom hook in our component:

```js
import { useGetGithubData } from './hooks/useGetGithubData'
const { isLoading, error, data } = useGetGithubData();
```

Following the same pattern, we can create a custom hook for all our data fetching needs.
Further, abstraction can be done to create a custom hook for each API endpoint.
create new entry in the QueryKey.ts file:

```js
    export const QueryKeys = {
        RetrievePosts: 'retrieve-posts',
        RetrieveAccount: 'retrieve-account',
        RetriveSomethingElse: 'retrieve-something-else'
    };
    
```    
modify the custom hook to accept the query key as a parameter:

```js
import { useQuery } from 'react-query'
const useGetGithubData = () => {
  const { isLoading, error, data } = useQuery(QueryKey.RetrieveSomethingElse, () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )
  return { isLoading, error, data }
}
```

```js
export function useGetGithubData() {
    const getGithubData = async (): Promise<GithubResponse> => {
        const response = await axios.get(`https://api.github.com/repos/tannerlinsley/react-query`);
        const data = await response.data;
        return data;
    };
    return useQuery(QueryKeys.RetrieveSomethingElse, () => getGithubData());
}
```

#### Basic Example for retrieving data from an API with additional parameters
```js
export function useGetGithubData() {
    const getGithubData = async (accountId: string): Promise<GithubResponse> => {
        const response = await axios.get(`https://api.github.com/repos/tannerlinsley/react-query{accountId}`);
        const data = await response.data;
        return data;
    };
    return useQuery([QueryKeys.RetrieveSomethingElse, accountId], () => getGithubData(accountId));
}
```


#### Basic Example for posting to data an API
```js

async function createUser(createAccountRequest: CreateAccountRequest): Promise<CreateAccountResponse> {
    const res = await axios.post(
        `https://reqres.in/api/users`,
        createAccountRequest
    );
    return res.data;
}

function useAccountAuthenticate(): UseMutationResult<
    CreateAccountResponse,
    unknown,
    createAccountRequest
    > {
    return useMutation(createUser);
}

export default useAccountAuthenticate;

```


```js
// CreateUser.tsx
{ /** this is pseudocode, please use as reference  **/ }
import { useCreateAccount } from '../../hooks/useCreateAccount';
import { QueryKeys } from '../../constants/QueryKeys';
const CreateUser = () => {
    const createAccountMutation = useCreateAccount();
    { /** use react hook form to handle form state email and name  **/ }
     const handleCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         { /**  error handling taken care by RHF **/ }
        const createAccountRequest: CreateAccountRequest = {
            email: email,
            name: name
        };
        createAccountMutation.mutate(createAccountRequest, {
            onSuccess: (data) => {
                console.log(data);
                // Invalidate the cache
                queryClient.invalidateQueries(QueryKeys.RetrieveUsers);
                //this will reload the users list data from the server and not from the cache and will reflect the new user that was created
            },
            onError: (error) => {
                console.log(error);
            }
        });
    };
    return <>
        { /** this is pseudocode, please use react hook form  **/ }
        <form onSubmit={handleCreateAccount}>
            <input type="text" name="email" />
            <input type="name" name="name" />
            <button type="submit">Create Account</button>
        </form>
    </>
}

```

### Another refactor for axios 
#### _We don't need to specify axios.get(`CompleteURL`), just use the axiosInstance (already setup in proj) and the relative path_
```js

    export function useGetGithubData() {
        const getGithubData = async (): Promise<GithubResponse> => {
            const response = await axiosInstance.get(`/repos/tannerlinsley/react-query`);
            const data = await response.data;
            return data;
        };
        return useQuery(QueryKeys.RetrieveSomethingElse, () => getGithubData());
    }

```