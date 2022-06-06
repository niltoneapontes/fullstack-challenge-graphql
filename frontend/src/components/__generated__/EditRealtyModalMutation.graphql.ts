/**
 * @generated SignedSource<<86f55da004d4652dbcaa09cfe5e4e2f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EditRealtyModalMutation$variables = {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  cep: string;
  contractType: string;
  area: number;
  rooms: number;
  bathroom: number;
  garage: number;
  imageUrls: ReadonlyArray<string>;
};
export type EditRealtyModalMutation$data = {
  readonly updateRealty: {
    readonly id: string;
  };
};
export type EditRealtyModalMutation = {
  variables: EditRealtyModalMutation$variables;
  response: EditRealtyModalMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "address"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "area"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bathroom"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cep"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "city"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "contractType"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "garage"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imageUrls"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rooms"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "state"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v14 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "address",
        "variableName": "address"
      },
      {
        "kind": "Variable",
        "name": "area",
        "variableName": "area"
      },
      {
        "kind": "Variable",
        "name": "bathroom",
        "variableName": "bathroom"
      },
      {
        "kind": "Variable",
        "name": "cep",
        "variableName": "cep"
      },
      {
        "kind": "Variable",
        "name": "city",
        "variableName": "city"
      },
      {
        "kind": "Variable",
        "name": "contractType",
        "variableName": "contractType"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "garage",
        "variableName": "garage"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "imageUrls",
        "variableName": "imageUrls"
      },
      {
        "kind": "Variable",
        "name": "price",
        "variableName": "price"
      },
      {
        "kind": "Variable",
        "name": "rooms",
        "variableName": "rooms"
      },
      {
        "kind": "Variable",
        "name": "state",
        "variableName": "state"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Realty",
    "kind": "LinkedField",
    "name": "updateRealty",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditRealtyModalMutation",
    "selections": (v14/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v8/*: any*/),
      (v13/*: any*/),
      (v6/*: any*/),
      (v10/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v12/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v1/*: any*/),
      (v11/*: any*/),
      (v2/*: any*/),
      (v7/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditRealtyModalMutation",
    "selections": (v14/*: any*/)
  },
  "params": {
    "cacheID": "1561e07b18a2d24ef18b15cee36d9f63",
    "id": null,
    "metadata": {},
    "name": "EditRealtyModalMutation",
    "operationKind": "mutation",
    "text": "mutation EditRealtyModalMutation(\n  $id: ID!\n  $title: String!\n  $description: String!\n  $price: Float!\n  $address: String!\n  $city: String!\n  $state: String!\n  $cep: String!\n  $contractType: String!\n  $area: Float!\n  $rooms: Float!\n  $bathroom: Float!\n  $garage: Float!\n  $imageUrls: [String!]!\n) {\n  updateRealty(id: $id, title: $title, description: $description, price: $price, address: $address, city: $city, state: $state, cep: $cep, contractType: $contractType, area: $area, rooms: $rooms, bathroom: $bathroom, garage: $garage, imageUrls: $imageUrls) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d21890e06c0b2eb1c8dbca08f45c05d";

export default node;
