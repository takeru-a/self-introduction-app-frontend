import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FetchRoom = {
  id: Scalars['String'];
};

export type FetchUser = {
  id: Scalars['String'];
};

export type LoginedUser = {
  __typename?: 'LoginedUser';
  code: Scalars['Int'];
  name: Scalars['String'];
  roomId: Scalars['String'];
  roomToken: Scalars['String'];
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoom: Room;
  createUser: User;
};


export type MutationCreateRoomArgs = {
  input: NewRoom;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewRoom = {
  host_name: Scalars['String'];
};

export type NewUser = {
  name: Scalars['String'];
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  loginedUser: LoginedUser;
  room: Room;
  rooms: Array<Room>;
  user: User;
  users: Array<User>;
};


export type QueryRoomArgs = {
  input?: InputMaybe<FetchRoom>;
};


export type QueryUserArgs = {
  input?: InputMaybe<FetchUser>;
};

export type Room = {
  __typename?: 'Room';
  host: User;
  id: Scalars['ID'];
  players: Array<User>;
  token: Scalars['String'];
};

export type Subscriber = {
  token: Scalars['String'];
  userId: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  changeRoom: Room;
};


export type SubscriptionChangeRoomArgs = {
  input: Subscriber;
};

export type User = {
  __typename?: 'User';
  answer: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  score: Scalars['Int'];
};

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', rooms: Array<{ __typename?: 'Room', id: string, token: string, players: Array<{ __typename?: 'User', id: string, name: string }>, host: { __typename?: 'User', id: string, name: string } }> };

export type GetRoomQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRoomQuery = { __typename?: 'Query', room: { __typename?: 'Room', id: string, token: string, players: Array<{ __typename?: 'User', id: string, name: string }>, host: { __typename?: 'User', id: string, name: string } } };

export type CreateRoomMutationVariables = Exact<{
  host_name: Scalars['String'];
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', id: string, token: string, host: { __typename?: 'User', id: string, name: string } } };

export type AddPlayersSubscriptionVariables = Exact<{
  token: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddPlayersSubscription = { __typename?: 'Subscription', changeRoom: { __typename?: 'Room', players: Array<{ __typename?: 'User', id: string, name: string }> } };

export type GetLoginedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoginedUserQuery = { __typename?: 'Query', loginedUser: { __typename?: 'LoginedUser', name: string, userId: string, code: number, roomId: string, roomToken: string } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  token: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string } };


export const GetRoomsDocument = gql`
    query getRooms {
  rooms {
    id
    token
    players {
      id
      name
    }
    host {
      id
      name
    }
  }
}
    `;
export const GetRoomDocument = gql`
    query getRoom($id: String!) {
  room(input: {id: $id}) {
    id
    token
    players {
      id
      name
    }
    host {
      id
      name
    }
  }
}
    `;
export const CreateRoomDocument = gql`
    mutation createRoom($host_name: String!) {
  createRoom(input: {host_name: $host_name}) {
    id
    token
    host {
      id
      name
    }
  }
}
    `;
export const AddPlayersDocument = gql`
    subscription addPlayers($token: String!, $userId: String!) {
  changeRoom(input: {token: $token, userId: $userId}) {
    players {
      id
      name
    }
  }
}
    `;
export const GetLoginedUserDocument = gql`
    query getLoginedUser {
  loginedUser {
    name
    userId
    code
    roomId
    roomToken
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($name: String!, $token: String!) {
  createUser(input: {name: $name, token: $token}) {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getRooms(variables?: GetRoomsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRoomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRoomsQuery>(GetRoomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRooms', 'query');
    },
    getRoom(variables: GetRoomQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRoomQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRoomQuery>(GetRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRoom', 'query');
    },
    createRoom(variables: CreateRoomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateRoomMutation>(CreateRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createRoom', 'mutation');
    },
    addPlayers(variables: AddPlayersSubscriptionVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddPlayersSubscription> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddPlayersSubscription>(AddPlayersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addPlayers', 'subscription');
    },
    getLoginedUser(variables?: GetLoginedUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLoginedUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLoginedUserQuery>(GetLoginedUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLoginedUser', 'query');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;