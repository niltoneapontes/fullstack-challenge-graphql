/**
 * @generated SignedSource<<708a2ec9bdcc8aaf31b123d6d06e96e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProfileQuery$variables = {};
export type ProfileQuery$data = {
  readonly hello: string;
};
export type ProfileQuery = {
  variables: ProfileQuery$variables;
  response: ProfileQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProfileQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b7b7d90822cffd9cb659e0a17eb0fb3e",
    "id": null,
    "metadata": {},
    "name": "ProfileQuery",
    "operationKind": "query",
    "text": "query ProfileQuery {\n  hello\n}\n"
  }
};
})();

(node as any).hash = "69abe45ed383f32b52c81424b2231c2b";

export default node;
