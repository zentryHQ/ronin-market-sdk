import 'jest';

import * as graphqlRequest from 'graphql-request';

import { getErc1155TokensList, GetErc1155TokensListParams } from '../../src';
import { AuctionType } from '../../src/queries/order/types';
import { SortBy } from '../../src/queries/token/types';
import { chainId } from '../data-mock';

describe('test getErc1155TokensList function', () => {
  // beforeEach(() => {
  //   jest.restoreAllMocks();
  // });

  test('get erc1155 tokens list', async () => {
    const pageSize = 50;
    const tokenAddress = '0xf6fe00893eea4d47f0cba303ef518fe4ab1c9dd6';

    const params: GetErc1155TokensListParams = {
      chainId,
      tokenAddress,
      from: 0,
      size: pageSize,
      auctionType: AuctionType.All,
      sort: SortBy.PriceAsc,
      criteria: [],
      rangeCriteria: [],
    };

    const graphQLRequestSpy = jest.spyOn(graphqlRequest, 'request');
    // Mock the GraphQL request to return predefined data instead of making an actual API call
    //     .mockImplementation(() => {
    //       return Promise.resolve({
    //         erc1155Tokens: {
    //           total: 10,
    //           results: [
    //             {
    //               tokenAddress,
    //               tokenId: '123',
    //               name: 'Test Token',
    //               image: 'https://example.com/image.png',
    //               cdnImage: 'https://cdn.example.com/image.png',
    //               video: null,
    //               attributes: [
    //                 { traitType: 'Color', value: 'Blue' },
    //                 { traitType: 'Size', value: 'Medium' },
    //               ],
    //             },
    //           ],
    //         },
    //       });
    //     });

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
    expect(response.total).toBe(10);
    expect(response.results.length).toBe(1);
    expect(response.results[0].tokenAddress).toBe(tokenAddress);
    expect(response.results[0].tokenId).toBe('123');
    expect(response.results[0].name).toBe('Test Token');
    expect(response.results[0].attributes).toEqual([
      { traitType: 'Color', value: 'Blue' },
      { traitType: 'Size', value: 'Medium' },
    ]);
  });

  test('get erc1155 tokens list with incorrect params', () => {
    const params = {} as GetErc1155TokensListParams;

    expect(getErc1155TokensList(params)).rejects.toThrow();
  });
});
