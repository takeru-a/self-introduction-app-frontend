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
  token: Scalars['String'];
};

export type NewUser = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
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

export type User = {
  __typename?: 'User';
  answer: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  score: Scalars['Int'];
};

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', rooms: Array<{ __typename?: 'Room', id: string, token: string, players: Array<{ __typename?: 'User', id: string, name: string }>, host: { __typename?: 'User', id: string, name: string } }> };

export type GetRoomQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomQuery = { __typename?: 'Query', room: { __typename?: 'Room', id: string, token: string, players: Array<{ __typename?: 'User', id: string, name: string }>, host: { __typename?: 'User', id: string, name: string } } };

export type CreateRoomMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', id: string, token: string, host: { __typename?: 'User', id: string, name: string } } };


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
    query getRoom {
  room(input: {id: "63dee0c348e4c14e42aeca3b"}) {
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
    mutation createRoom {
  createRoom(input: {host_name: "next1", token: "next1"}) {
    id
    token
    host {
      id
      name
    }
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
    getRoom(variables?: GetRoomQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRoomQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRoomQuery>(GetRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRoom', 'query');
    },
    createRoom(variables?: CreateRoomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateRoomMutation>(CreateRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createRoom', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;