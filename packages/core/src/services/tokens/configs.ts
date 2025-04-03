import { ChainId } from '../../types';
import { Token, TokenData } from './data';
import { getPaymentTokens } from './getPaymentTokens';

export const getSwapToRonConfig = (tokens: { [key in Token]: TokenData }) => {
  return {
    [tokens.AXS.address]: {
      route: [tokens.AXS.symbol, tokens.RON.symbol].join(' > '),
      path: [tokens.AXS.address, tokens.RON.address],
      tokens: [tokens.AXS, tokens.RON],
      lpFeePercent: 1 - (1 - 0.3),
    },
    [tokens.SLP.address]: {
      route: [tokens.SLP.symbol, tokens.RON.symbol].join(' > '),
      path: [tokens.SLP.address, tokens.RON.address],
      tokens: [tokens.SLP, tokens.RON],
      lpFeePercent: 1 - (1 - 0.3),
    },
    [tokens.USDC.address]: {
      route: [tokens.USDC.symbol, tokens.RON.symbol].join(' > '),
      path: [tokens.USDC.address, tokens.RON.address],
      tokens: [tokens.USDC, tokens.RON],
      lpFeePercent: 1 - (1 - 0.3),
    },
    [tokens.WETH.address]: {
      route: [tokens.WETH.symbol, tokens.RON.symbol].join(' > '),
      path: [tokens.WETH.address, tokens.RON.address],
      tokens: [tokens.WETH, tokens.RON],
      lpFeePercent: 1 - (1 - 0.3),
    },
    [tokens.ION.address]: {
      route: [tokens.ION.symbol, tokens.USDC.symbol, tokens.RON.symbol].join(' > '),
      path: [tokens.ION.address, tokens.USDC.address, tokens.RON.address],
      tokens: [tokens.ION, tokens.USDC, tokens.RON],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
  };
};

export const getSwapToUsdcConfig = (tokens: { [key in Token]: TokenData }) => {
  return {
    [tokens.AXS.address]: {
      route: [tokens.AXS.symbol, tokens.RON.symbol, tokens.USDC.symbol].join(' > '),
      path: [tokens.AXS.address, tokens.RON.address, tokens.USDC.address],
      tokens: [tokens.AXS, tokens.RON, tokens.USDC],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.SLP.address]: {
      route: [tokens.SLP.symbol, tokens.RON.symbol, tokens.USDC.symbol].join(' > '),
      path: [tokens.SLP.address, tokens.RON.address, tokens.USDC.address],
      tokens: [tokens.SLP, tokens.RON, tokens.USDC],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.RON.address]: {
      route: [tokens.RON.symbol, tokens.USDC.symbol].join(' > '),
      path: [tokens.RON.address, tokens.USDC.address],
      tokens: [tokens.RON, tokens.USDC],
      lpFeePercent: 1 - (1 - 0.3),
    },
    [tokens.WETH.address]: {
      route: [tokens.WETH.symbol, tokens.RON.symbol, tokens.USDC.symbol].join(' > '),
      path: [tokens.WETH.address, tokens.RON.address, tokens.USDC.address],
      tokens: [tokens.WETH, tokens.RON, tokens.USDC],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.ION.address]: {
      route: [tokens.ION.symbol, tokens.USDC.symbol].join(' > '),
      path: [tokens.ION.address, tokens.USDC.address],
      tokens: [tokens.ION, tokens.USDC],
      lpFeePercent: 1 - (1 - 0.3),
    },
  };
};

export const getSwapToWethConfig = (tokens: { [key in Token]: TokenData }) => {
  return {
    [tokens.AXS.address]: {
      route: [tokens.AXS.symbol, tokens.RON.symbol, tokens.WETH.symbol].join(' > '),
      path: [tokens.AXS.address, tokens.RON.address, tokens.WETH.address],
      tokens: [tokens.AXS, tokens.RON, tokens.WETH],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.SLP.address]: {
      route: [tokens.SLP.symbol, tokens.RON.symbol, tokens.WETH.symbol].join(' > '),
      path: [tokens.SLP.address, tokens.RON.address, tokens.WETH.address],
      tokens: [tokens.SLP, tokens.RON, tokens.WETH],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.RON.address]: {
      route: [tokens.RON.symbol, tokens.WETH.symbol].join(' > '),
      path: [tokens.RON.address, tokens.WETH.address],
      tokens: [tokens.RON, tokens.WETH],
      lpFeePercent: 1 - (1 - 0.3),
    },
    [tokens.USDC.address]: {
      route: [tokens.USDC.symbol, tokens.RON.symbol, tokens.WETH.symbol].join(' > '),
      path: [tokens.USDC.address, tokens.RON.address, tokens.WETH.address],
      tokens: [tokens.USDC, tokens.RON, tokens.WETH],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.ION.address]: {
      route: [tokens.ION.symbol, tokens.USDC.symbol, tokens.WETH.symbol].join(' > '),
      path: [tokens.ION.address, tokens.USDC.address, tokens.WETH.address],
      tokens: [tokens.ION, tokens.USDC, tokens.WETH],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
  };
};

export const getSwapToIonConfig = (tokens: { [key in Token]: TokenData }) => {
  return {
    [tokens.AXS.address]: {
      route: [tokens.AXS.symbol, tokens.USDC.symbol, tokens.ION.symbol].join(' > '),
      path: [tokens.AXS.address, tokens.USDC.address, tokens.ION.address],
      tokens: [tokens.AXS, tokens.USDC, tokens.ION],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.SLP.address]: {
      route: [tokens.SLP.symbol, tokens.USDC.symbol, tokens.ION.symbol].join(' > '),
      path: [tokens.SLP.address, tokens.USDC.address, tokens.ION.address],
      tokens: [tokens.SLP, tokens.USDC, tokens.ION],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.RON.address]: {
      route: [tokens.RON.symbol, tokens.USDC.symbol, tokens.ION.symbol].join(' > '),
      path: [tokens.RON.address, tokens.USDC.address, tokens.ION.address],
      tokens: [tokens.RON, tokens.USDC, tokens.ION],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.WETH.address]: {
      route: [tokens.WETH.symbol, tokens.USDC.symbol, tokens.ION.symbol].join(' > '),
      path: [tokens.WETH.address, tokens.USDC.address, tokens.ION.address],
      tokens: [tokens.WETH, tokens.USDC, tokens.ION],
      lpFeePercent: 1 - (1 - 0.3) * (1 - 0.3),
    },
    [tokens.USDC.address]: {
      route: [tokens.USDC.symbol, tokens.ION.symbol].join(' > '),
      path: [tokens.USDC.address, tokens.ION.address],
      tokens: [tokens.USDC, tokens.ION],
      lpFeePercent: 1 - (1 - 0.3),
    },
  };
};

export const getSwapConfig = (chainId: ChainId, toToken: string) => {
  const tokens = getPaymentTokens(chainId);
  const validTokens = [tokens.USDC.address, tokens.WETH.address, tokens.RON.address, tokens.ION.address];

  if (!validTokens.includes(toToken)) {
    throw new Error('Token must be USDC, ION, WETH or RON');
  }

  switch (toToken) {
    case tokens.USDC.address:
      return getSwapToUsdcConfig(tokens);
    case tokens.WETH.address:
      return getSwapToWethConfig(tokens);
    case tokens.ION.address:
      return getSwapToIonConfig(tokens);
    default:
      return getSwapToRonConfig(tokens);
  }
};
