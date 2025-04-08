import { Order } from '../../queries/order/types';

import { AuctionType, GetOrdersByCriteriaParams } from '../../queries/order';
import { getErc1155TokensList, SortBy } from '../../queries/token';

export const getOrdersByCriteria = async (params: GetOrdersByCriteriaParams): Promise<Order[]> => {
  const { chainId, tokenAddress, maxPrice, criteria, rangeCriteria, from = 0, size = 50 } = params;
  if (!criteria && !rangeCriteria) {
    throw new Error('Criteria or rangeCriteria is required');
  }
  if (size > 50) {
    throw new Error('Size must be less than 50');
  }
  const searchParams = {
    chainId,
    tokenAddress,
    from,
    size,
    auctionType: AuctionType.Sale,
    criteria,
    sort: SortBy.PriceAsc,
    rangeCriteria,
  };

  const { results } = await getErc1155TokensList(searchParams);
  const orders = results
    .flatMap(result => result.orders || [])
    .filter(order => {
      return !maxPrice || BigInt(order.currentPrice) <= maxPrice;
    });
  return orders;
};
