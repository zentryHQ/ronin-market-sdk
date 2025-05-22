import 'jest';

import * as graphqlRequest from 'graphql-request';

import { getErc1155TokensList, GetErc1155TokensListParams } from '../../src';
import { AuctionType } from '../../src/queries/order/types';
import { SortBy } from '../../src/queries/token/types';

describe('test getErc1155TokensList function', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('get erc1155 tokens list', async () => {
    const pageSize = 10;
    const tokenAddress = '0xf6fe00893eea4d47f0cba303ef518fe4ab1c9dd6';

    const params: GetErc1155TokensListParams = {
      chainId: 2020,
      tokenAddress,
      from: 0,
      size: pageSize,
      auctionType: AuctionType.All,
      sort: SortBy.PriceAsc,
      criteria: [],
      rangeCriteria: [],
    };

    const graphQLRequestSpy = jest.spyOn(graphqlRequest, 'request')

    const response = await getErc1155TokensList(params);

    // Verify that the graphQL request was called with the right parameters
    expect(graphQLRequestSpy).toHaveBeenCalledTimes(1);
    expect(graphQLRequestSpy).toHaveBeenCalledWith(
      expect.stringContaining('graphql'),
      expect.stringContaining('query GetERC1155TokensList'),
      expect.objectContaining({
        tokenAddress,
        from: 0,
        size: pageSize,
        auctionType: AuctionType.All,
        sort: SortBy.PriceAsc,
        criteria: [],
        rangeCriteria: [],
      }),
      undefined,
    );

    // Verify the response structure
    expect(response.total).toBeGreaterThan(0);
    expect(response.results.length).toBe(10);
    expect(response.results[0].tokenAddress).toBe(tokenAddress);
  });

  test('get erc1155 tokens list with incorrect params', () => {
    const params = {} as GetErc1155TokensListParams;

    expect(getErc1155TokensList(params)).rejects.toThrow();
  });
});
