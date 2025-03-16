/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
  Guid: { input: any; output: any; }
};

export type ContributorCard = _Item & {
  __typename?: 'ContributorCard';
  /** The content item's predefined system fields. */
  _system_: _Sys;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  githubLink: Scalars['String']['output'];
  linkedinLink: Scalars['String']['output'];
  profilePicture?: Maybe<_Asset>;
  roleInProject: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
};

export type ContributorCard_All = {
  __typename?: 'ContributorCard_All';
  items: Array<ContributorCard>;
  /** Specifies the number of items to retrieve. If not specified, the API returns a maximum of 10 objects. */
  limit: Scalars['Int']['output'];
  /** Specifies the number of objects to skip. If not specified, the API returns the first page of results. */
  offset: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type ContributorCard_Order = {
  _system_?: InputMaybe<_SystemOrder>;
  email?: InputMaybe<_OrderEnum>;
  fullName?: InputMaybe<_OrderEnum>;
  githubLink?: InputMaybe<_OrderEnum>;
  linkedinLink?: InputMaybe<_OrderEnum>;
  roleInProject?: InputMaybe<_OrderEnum>;
  shortDescription?: InputMaybe<_OrderEnum>;
};

export type ContributorCard_Where = {
  AND?: InputMaybe<Array<ContributorCard_Where>>;
  OR?: InputMaybe<Array<ContributorCard_Where>>;
  _system_?: InputMaybe<_SystemFilter>;
  email?: InputMaybe<_TextFilter>;
  fullName?: InputMaybe<_TextFilter>;
  githubLink?: InputMaybe<_TextFilter>;
  linkedinLink?: InputMaybe<_TextFilter>;
  roleInProject?: InputMaybe<_TextFilter>;
  shortDescription?: InputMaybe<_TextFilter>;
};

export type _Asset = _AssetInterface & {
  __typename?: '_Asset';
  /** The asset's alt text description for a specific language. */
  description?: Maybe<Scalars['String']['output']>;
  /** The image's height in pixels. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The asset's display name. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of renditions available for this asset. */
  renditions?: Maybe<_AssetRenditionCollection>;
  /** The file's size in bytes. */
  size?: Maybe<Scalars['Int']['output']>;
  /** The file's MIME type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The asset's absolute URL. */
  url: Scalars['String']['output'];
  /** The image's width in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};


export type _AssetRenditionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type _AssetInterface = {
  /** The asset's alt text description for a specific language. */
  description?: Maybe<Scalars['String']['output']>;
  /** The image's height in pixels. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The asset's display name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The file's size in bytes. */
  size?: Maybe<Scalars['Int']['output']>;
  /** The file's MIME type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The asset's absolute URL. */
  url: Scalars['String']['output'];
  /** The image's width in pixels. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type _AssetRenditionCollection = {
  __typename?: '_AssetRenditionCollection';
  /** Individual asset rendition objects. */
  items: Array<_Rendition>;
  /** Specifies the number of items to retrieve. If not specified, the API returns a maximum of 10 objects. */
  limit: Scalars['Int']['output'];
  /** Specifies the number of objects to skip. If not specified, the API returns the first page of results. */
  offset: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type _CodenameFilter = {
  /** Checks if the codename matches exactly to the specified filter value. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the codename matches at least one of the specified array values. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the codename is different than the specified value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the codename is different than the specified array values. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type _Collection = {
  __typename?: '_Collection';
  /** The collection's predefined system fields. */
  _system_: _CollectionSys;
};

export type _CollectionSys = {
  __typename?: '_CollectionSys';
  /** The collection's codename. */
  codename: Scalars['String']['output'];
};

export type _ContentType = {
  __typename?: '_ContentType';
  /** The content type's predefined system fields. */
  _system_: _ContentTypeSys;
};

export type _ContentTypeSys = {
  __typename?: '_ContentTypeSys';
  /** The content type's codename. */
  codename: Scalars['String']['output'];
  /** The content type's display name. */
  name: Scalars['String']['output'];
};

export type _DateTimeFilter = {
  /** Checks if the field's DateTime value matches exactly to the specified ISO-8610 formatted value. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the field's DateTime value is greater than the specified ISO-8610 formatted value. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the field's DateTime value is greater than or equal to the specified ISO-8610 formatted value. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the field's DateTime value matches at least one of the specified array values. */
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Checks if the field's DateTime value is less than the specified ISO-8610 formatted value. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the field's DateTime value is less than or equal to the specified ISO-8610 formatted value. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the field's DateTime value is different than the specified ISO-8610 formatted value. */
  notEq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the field's DateTime value is different than the specified array values. */
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type _IdFilter = {
  /** Checks if the ID matches exactly to the specified filter value. */
  eq?: InputMaybe<Scalars['Guid']['input']>;
  /** Checks if the ID matches at least one of the specified array values. */
  in?: InputMaybe<Array<Scalars['Guid']['input']>>;
  /** Checks if the ID is different than the specified value. */
  notEq?: InputMaybe<Scalars['Guid']['input']>;
  /** Checks if the ID is different than the specified array values. */
  notIn?: InputMaybe<Array<Scalars['Guid']['input']>>;
};

export type _Item = {
  /** The content item's predefined system fields. */
  _system_: _Sys;
};

export type _Language = {
  __typename?: '_Language';
  /** The language's predefined system fields. */
  _system_: _LanguageSys;
};

export type _LanguageFilter = {
  /** Specifies the language's codename. */
  languageCodename: Scalars['String']['input'];
};

export type _LanguageSys = {
  __typename?: '_LanguageSys';
  /** The language's codename. */
  codename: Scalars['String']['output'];
  /** The language's display name. */
  name: Scalars['String']['output'];
};

export enum _OrderEnum {
  /** Ascending order. */
  Asc = 'asc',
  /** Descending order. */
  Desc = 'desc'
}

export type _Rendition = {
  __typename?: '_Rendition';
  height: Scalars['Int']['output'];
  preset: Scalars['String']['output'];
  preset_id: Scalars['String']['output'];
  query: Scalars['String']['output'];
  rendition_id: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type _RootQuery = {
  __typename?: '_RootQuery';
  contributorCard?: Maybe<ContributorCard>;
  contributorCard_All: ContributorCard_All;
};


export type _RootQueryContributorCardArgs = {
  codename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Guid']['input']>;
  languageFilter?: InputMaybe<_LanguageFilter>;
};


export type _RootQueryContributorCard_AllArgs = {
  languageFilter?: InputMaybe<_LanguageFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ContributorCard_Order>;
  where?: InputMaybe<ContributorCard_Where>;
};

export type _Sys = {
  __typename?: '_Sys';
  /** The content item's codename. */
  codename: Scalars['String']['output'];
  /** The content item's collection. For projects without collection enabled, the value is `default`. */
  collection: _Collection;
  /** The content item's internal ID. */
  id: Scalars['Guid']['output'];
  /** The language that the item's content is in. */
  language: _Language;
  /** [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date and time (e.g. 2021-11-02T13:27:31Z) of the last change to user-content of the item. The value is not affected when changing workflow steps. */
  lastModified: Scalars['DateTime']['output'];
  /** The content item's display name. */
  name: Scalars['String']['output'];
  /** The content item's type. */
  type: _ContentType;
  /** The content item's current workflow. */
  workflow: _Workflow;
  /** The content item's current workflow step. */
  workflowStep: _WorkflowStep;
};

/** Allows filtering based on system properties. */
export type _SystemFilter = {
  /** The content item's codename. */
  codename?: InputMaybe<_CodenameFilter>;
  /** The content item's collection. */
  collection?: InputMaybe<_CodenameFilter>;
  /** The content item's internal ID. */
  id?: InputMaybe<_IdFilter>;
  /** The content item's language. */
  language?: InputMaybe<_SystemLanguageFilter>;
  /** The date and time of the last change to user-content of the item. The value is not affected when changing workflow steps. */
  lastModified?: InputMaybe<_DateTimeFilter>;
  /** The content item's display name. */
  name?: InputMaybe<_TextFilter>;
  /** The content item's current workflow. */
  workflow?: InputMaybe<_CodenameFilter>;
  /** The content item's current workflow step. */
  workflowStep?: InputMaybe<_CodenameFilter>;
};

/** Allows filtering based on language. */
export type _SystemLanguageFilter = {
  _system_?: InputMaybe<_SystemLanguageSystemFilter>;
};

/** Allows filtering based on language's system properties. */
export type _SystemLanguageSystemFilter = {
  /** The language's codename. */
  codename?: InputMaybe<_CodenameFilter>;
};

/** Allows ordering based on system properties. */
export type _SystemOrder = {
  /** The content item's codename. */
  codename?: InputMaybe<_OrderEnum>;
  /** The date and time of the last change to user-content of the item. The value is not affected when changing workflow steps. */
  lastModified?: InputMaybe<_OrderEnum>;
  /** The content item's display name. */
  name?: InputMaybe<_OrderEnum>;
};

export type _TextFilter = {
  /** Checks if the field value matches exactly to the specified filter value. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the field value matches at least one of the specified array values. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the field value is an empty string. */
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the field value is different than the specified value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the field value is different than the specified array values. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type _Workflow = {
  __typename?: '_Workflow';
  /** The workflow's predefined system fields. */
  _system_: _WorkflowSys;
};

export type _WorkflowStep = {
  __typename?: '_WorkflowStep';
  /** The workflow step's predefined system fields. */
  _system_: _WorkflowStepSys;
};

export type _WorkflowStepSys = {
  __typename?: '_WorkflowStepSys';
  /** The workflow step's codename. */
  codename: Scalars['String']['output'];
};

export type _WorkflowSys = {
  __typename?: '_WorkflowSys';
  /** The workflow's codename. */
  codename: Scalars['String']['output'];
};

export type GetContributorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContributorsQuery = { __typename?: '_RootQuery', contributorCard_All: { __typename?: 'ContributorCard_All', items: Array<{ __typename?: 'ContributorCard', email: string, fullName: string, githubLink: string, linkedinLink: string, roleInProject: string, shortDescription: string, profilePicture?: { __typename?: '_Asset', url: string } | null }> } };


export const GetContributorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContributors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCard_All"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"githubLink"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinLink"}},{"kind":"Field","name":{"kind":"Name","value":"roleInProject"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContributorsQuery, GetContributorsQueryVariables>;