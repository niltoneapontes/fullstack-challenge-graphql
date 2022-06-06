/**
 * @generated SignedSource<<d4a1370b7b2904859cae70e2d3c5db02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeRealtyQuery$variables = {};
export type HomeRealtyQuery$data = {
  readonly realtys: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly address: string;
    readonly city: string;
    readonly state: string;
    readonly cep: string;
    readonly contractType: string;
    readonly imageUrls: ReadonlyArray<string>;
    readonly area: number;
    readonly rooms: number;
    readonly bathroom: number;
    readonly garage: number;
  }>;
};
export type HomeRealtyQuery = {
  variables: HomeRealtyQuery$variables;
  response: HomeRealtyQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Realty",
    "kind": "LinkedField",
    "name": "realtys",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "address",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "city",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "state",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cep",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contractType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageUrls",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "area",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "rooms",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bathroom",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "garage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRealtyQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeRealtyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4b4f3f8351181e67ecda3c1638615efe",
    "id": null,
    "metadata": {},
    "name": "HomeRealtyQuery",
    "operationKind": "query",
    "text": "query HomeRealtyQuery {\n  realtys {\n    id\n    title\n    description\n    price\n    address\n    city\n    state\n    cep\n    contractType\n    imageUrls\n    area\n    rooms\n    bathroom\n    garage\n  }\n}\n"
  }
};
})();

(node as any).hash = "b713b4547dd36a6fd1b5d455984775de";

export default node;
