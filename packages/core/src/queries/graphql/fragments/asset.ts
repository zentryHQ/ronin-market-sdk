import { gql } from "graphql-request";

export const AssetFragment = gql`
  fragment AssetInfo on Asset {
    erc
    address
    id
    quantity
    orderId
    __typename
  }
`;
