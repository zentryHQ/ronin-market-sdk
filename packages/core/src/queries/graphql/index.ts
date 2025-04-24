import { request, Variables } from "graphql-request";

import { ChainId } from "../../types";

export const testnetGraphQLEndpoint =
  "https://dev-marketplace-graphql.skymavis.one/graphql";
export const mainnetGraphQLEndpoint =
  "https://marketplace-graphql.skymavis.com/graphql";
export const mainnetGraphQLAPIGatewayEndpoint =
  "https://api-gateway.skymavis.com/graphql/mavis-marketplace";
interface GraphQLRequestParams {
  chainId: ChainId;
  query: string;
  variables?: Variables;
  headers?: string[][] | Record<string, string>;
}

export const graphQLRequest = async <T>(params: GraphQLRequestParams) => {
  const { query, variables, chainId } = params;
  const marketplaceApiKey = process.env.MARKETPLACE_API_KEY;
  let { headers } = params;
  // if chainId is mainnet and marketplaceApiKey is set, use the mainnetGraphQLAPIGatewayEndpoint
  if (chainId === ChainId.mainnet && marketplaceApiKey) {
    if (!headers) {
      headers = {
        "x-api-key": marketplaceApiKey,
      };
    } else if (Array.isArray(headers)) {
      headers.push(["x-api-key", marketplaceApiKey]);
    } else {
      headers["x-api-key"] = marketplaceApiKey;
    }
    return request<T>(
      mainnetGraphQLAPIGatewayEndpoint,
      query,
      variables,
      headers
    );
  }
  const graphQLEndpoint =
    chainId === ChainId.mainnet
      ? mainnetGraphQLEndpoint
      : testnetGraphQLEndpoint;
  return request<T>(graphQLEndpoint, query, variables, headers);
};
