// your-app-name/src/RelayEnvironment.js
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

interface IParams {
  name: string;
  text: string;
}

async function fetchRelay(params: IParams, variables: any) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  // @ts-ignore
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
