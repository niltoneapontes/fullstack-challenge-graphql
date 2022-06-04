/**
 * @generated SignedSource<<3ecf9f557d873a7316db5d06c1e4a206>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeQuery$variables = {};
export type HomeQuery$data = {
  readonly hello: string;
};
export type HomeQuery = {
  variables: HomeQuery$variables;
  response: HomeQuery$data;
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
    "name": "HomeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "21655d62ad4483f46e3b8d2865fdf6c0",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  hello\n}\n"
  }
};
})();

(node as any).hash = "bce294683902076b6911cc0e07c2e179";

export default node;
