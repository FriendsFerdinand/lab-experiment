import { useCallback } from "react";
import { useAtom } from "jotai";
import { userStxAddressesAtom, useTransactionPopup } from "micro-stacks/react";
import { useAuth } from "micro-stacks/react";
import { LOADING_KEYS } from "../store/loading";
import { loadingAtom } from "../store/loading";
import {
  accountAddressAtom,
  currentGuineaContractState,
} from "../store/network-state";
import { MINT_FUNCTION } from "../utils/constants";
import {
  createAssetInfo,
  createContractPrincipal,
  createNonFungiblePostCondition,
  createStandardPrincipal,
  createSTXPostCondition,
  FungibleConditionCode,
  NonFungibleConditionCode,
} from "micro-stacks/transactions";
import { bufferCVFromString } from "micro-stacks/clarity";

export function useHandleMint() {
  const [address] = useAtom(accountAddressAtom);
  const [guineaContract] = useAtom(currentGuineaContractState);
  const [contractAddress, contractName] = guineaContract.split(".");
  const [isWalletPopup, setIsWalletPopup] = useAtom(
    loadingAtom(LOADING_KEYS.WALLETPOPUP)
  );
  const { handleContractCall } = useTransactionPopup();

  const onFinish = useCallback(() => {
    void setIsWalletPopup(false);
  }, [setIsWalletPopup]);

  const onCancel = useCallback(() => {
    void setIsWalletPopup(false);
  }, [setIsWalletPopup]);

  return useCallback(() => {
    void setIsWalletPopup(true);
    void handleContractCall({
      contractAddress,
      contractName,
      functionName: MINT_FUNCTION,
      functionArgs: [],
      postConditions: [
        createNonFungiblePostCondition(
          createStandardPrincipal(address as string),
          NonFungibleConditionCode.Owns,
          createAssetInfo(contractAddress, contractName, "guinea-piggies"),
          bufferCVFromString("guinea-piggies")
        ),
      ],
      onFinish,
      onCancel,
    });
  }, [
    setIsWalletPopup,
    handleContractCall,
    contractAddress,
    contractName,
    address,
    onFinish,
    onCancel,
  ]);
}
