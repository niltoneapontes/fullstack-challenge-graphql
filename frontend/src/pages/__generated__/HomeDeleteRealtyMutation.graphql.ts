/**
 * @generated SignedSource<<040bad6de079aa2dadc10ea334b12453>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type HomeDeleteRealtyMutation$variables = {
  id: string;
};
export type HomeDeleteRealtyMutation$data = {
  readonly deleteRealty: {
    readonly id: string;
  };
};
export type HomeDeleteRealtyMutation = {
  variables: HomeDeleteRealtyMutation$variables;
  response: HomeDeleteRealtyMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Realty",
    "kind": "LinkedField",
    "name": "deleteRealty",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeDeleteRealtyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeDeleteRealtyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2a368a9ca503a3316a1074e6b6aec20a",
    "id": null,
    "metadata": {},
    "name": "HomeDeleteRealtyMutation",
    "operationKind": "mutation",
    "text": "mutation HomeDeleteRealtyMutation(\n  $id: String!\n) {\n  deleteRealty(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1b50940ceda58ac320b7936a14f036e";

export default node;
