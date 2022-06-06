/**
 * @generated SignedSource<<b58a3dc8b84037426a86cb5672ebedc7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddRealtyModalMutation$variables = {
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
export type AddRealtyModalMutation$data = {
  readonly createRealty: {
    readonly id: string;
  };
};
export type AddRealtyModalMutation = {
  variables: AddRealtyModalMutation$variables;
  response: AddRealtyModalMutation$data;
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
  "name": "imageUrls"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rooms"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "state"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v13 = [
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
    "name": "createRealty",
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
      (v12/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddRealtyModalMutation",
    "selections": (v13/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v12/*: any*/),
      (v6/*: any*/),
      (v9/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v11/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v1/*: any*/),
      (v10/*: any*/),
      (v2/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddRealtyModalMutation",
    "selections": (v13/*: any*/)
  },
  "params": {
    "cacheID": "cf4a88f0907b0bb7dc2dd72034af14f3",
    "id": null,
    "metadata": {},
    "name": "AddRealtyModalMutation",
    "operationKind": "mutation",
    "text": "mutation AddRealtyModalMutation(\n  $title: String!\n  $description: String!\n  $price: Float!\n  $address: String!\n  $city: String!\n  $state: String!\n  $cep: String!\n  $contractType: String!\n  $area: Float!\n  $rooms: Float!\n  $bathroom: Float!\n  $garage: Float!\n  $imageUrls: [String!]!\n) {\n  createRealty(title: $title, description: $description, price: $price, address: $address, city: $city, state: $state, cep: $cep, contractType: $contractType, area: $area, rooms: $rooms, bathroom: $bathroom, garage: $garage, imageUrls: $imageUrls) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "850d4cfd46650a614298438f42e8f0db";

export default node;
