import { Network } from "../store/network-state";

export const ENV = process.env.NEXT_PUBLIC_ENV || "";
export const IS_BROWSER = typeof document !== "undefined";

export const DEFAULT_MAINNET_SERVER =
  process.env.NEXT_PUBLIC_MAINNET_API_SERVER || "";
export const DEFAULT_TESTNET_SERVER =
  process.env.NEXT_PUBLIC_TESTNET_API_SERVER || "";
export const DEFAULT_REGTEST_SERVER =
  process.env.NEXT_PUBLIC_REGTEST_API_SERVER || "";
export const DEFAULT_LOCALNET_SERVER =
  process.env.NEXT_PUBLIC_LOCALNET_API_SERVER || "";

export const DEFAULT_MAINNET_EXPLORER =
  process.env.NEXT_PUBLIC_MAINNET_EXPLORER || "";
export const DEFAULT_TESTNET_EXPLORER =
  process.env.NEXT_PUBLIC_TESTNET_EXPLORER || "";
export const DEFAULT_REGTEST_EXPLORER =
  process.env.NEXT_PUBLIC_REGTEST_EXPLORER || "";
export const DEFAULT_LOCALNET_EXPLORER =
  process.env.NEXT_PUBLIC_LOCALNET_EXPLORER || "";

export const DEFAULT_MAINNET_BITCOIN_EXPLORER =
  process.env.NEXT_PUBLIC_MAINNET_BITCOIN_EXPLORER || "";
export const DEFAULT_TESTNET_BITCOIN_EXPLORER =
  process.env.NEXT_PUBLIC_TESTNET_BITCOIN_EXPLORER || "";
export const DEFAULT_LOCALNET_BITCOIN_EXPLORER =
  process.env.NEXT_PUBLIC_LOCALNET_BITCOIN_EXPLORER || "";

export const DEFAULT_MAINNET_GUINEA_CONTRACT =
  process.env.NEXT_PUBLIC_MAINNET_GUINEA_CONTRACT || "";
export const DEFAULT_TESTNET_GUINEA_CONTRACT =
  process.env.NEXT_PUBLIC_TESTNET_GUINEA_CONTRACT || "";
export const DEFAULT_REGTEST_GUINEA_CONTRACT =
  process.env.NEXT_PUBLIC_REGTEST_GUINEA_CONTRACT || "";
export const DEFAULT_LOCALNET_GUINEA_CONTRACT =
  process.env.NEXT_PUBLIC_LOCALNET_GUINEA_CONTRACT || "";

export const MINT_FUNCTION = "mint";

export const DEFAULT_NETWORK_LIST: Network[] = [
  {
    index: 0,
    name: "mainnet",
    label: "stacks.co",
    chain: "mainnet",
    url: DEFAULT_MAINNET_SERVER,
  },
  {
    index: 1,
    name: "testnet",
    label: "stacks.co",
    chain: "testnet",
    url: DEFAULT_TESTNET_SERVER,
  },
  {
    index: 2,
    name: "regtest",
    label: "stacks.co",
    chain: "testnet",
    url: DEFAULT_REGTEST_SERVER,
  },
  {
    index: 3,
    name: "localnet",
    label: "localhost",
    chain: "testnet",
    url: DEFAULT_LOCALNET_SERVER,
  },
];
export const DEFAULT_NETWORK_INDEX = parseFloat(
  process.env.NEXT_PUBLIC_DEFAULT_NETWORK_INDEX || "0"
);
