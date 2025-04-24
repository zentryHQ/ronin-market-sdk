import { getConfig, MarketType } from '../../configs';
import {
  createErc20Contract,
  createErc721Contract,
  createErc1155Contract,
  createReadOnlyProvider,
  createWRonContract,
} from '../../contracts';
import { ChainId } from '../../types';
import { Token } from './data';
import { getPaymentTokens } from './getPaymentTokens';

export const checkIsErc721Approved = (
  chainId: ChainId,
  account: string,
  address: string,
  market: MarketType = 'marketGateway',
) => {
  const readProvider = createReadOnlyProvider(chainId);
  const config = getConfig(chainId);
  const erc721Contract = createErc721Contract(address);
  const marketGatewayContractAddress = config.contractsAddress[market];
  return erc721Contract.connect(readProvider).isApprovedForAll(account, marketGatewayContractAddress);
};

export const checkIsErc1155Approved = (
  chainId: ChainId,
  account: string,
  address: string,
  market: MarketType = 'marketGateway',
) => {
  const readProvider = createReadOnlyProvider(chainId);
  const config = getConfig(chainId);
  const erc1155Contract = createErc1155Contract(address);
  const marketGatewayContractAddress = config.contractsAddress[market];
  return erc1155Contract.connect(readProvider).isApprovedForAll(account, marketGatewayContractAddress);
};

export const checkIsErc20Approved = async (
  chainId: ChainId,
  account: string,
  address: string,
  amount: string,
  market: MarketType = 'marketGateway',
) => {
  const config = getConfig(chainId);
  const marketGatewayContractAddress = config.contractsAddress[market];
  const tokens = getPaymentTokens(chainId);
  const isRon = tokens[Token.RON].address.toLowerCase() === address.toLowerCase();

  if (isRon) {
    return true;
  }

  const erc20Contract = createErc20Contract(address);
  const readProvider = createReadOnlyProvider(chainId);
  const response = await erc20Contract.connect(readProvider).allowance(account, marketGatewayContractAddress);

  return response.gte(amount);
};

export const checkIsWRonTokenApproved = async (
  chainId: ChainId,
  account: string,
  amount: string,
  market: MarketType = 'marketGateway',
) => {
  const config = getConfig(chainId);
  const marketGatewayContractAddress = config.contractsAddress[market];

  const wRonContract = createWRonContract(chainId);
  const readProvider = createReadOnlyProvider(chainId);
  const response = await wRonContract.connect(readProvider).allowance(account, marketGatewayContractAddress);

  return response.gte(amount);
};
