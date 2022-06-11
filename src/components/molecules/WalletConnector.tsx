import React from 'react';
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import { DDMItem, DropDownMenu } from './DropDownMenu';

export function WalletConnector() {
  const { data: account } = useAccount()
  const { connect, connectors, error, isConnecting, pendingConnector } =
  useConnect()
  const { data: ensName } = useEnsName({ address: account?.address })
  const { disconnect } = useDisconnect()

  let ddmItem: DDMItem[] = [];

  connectors.forEach((connector) => {
    ddmItem.push({ label: connector.name, action: () => connect(connector) });
  });

  if (account) {
    return (
      <DropDownMenu
        items={[
          {
            label: 'logout',
            action: async () => {
              disconnect();
            },
          },
        ]}
        label={ensName ? `${ensName} (${account.address})` : account.address}
      ></DropDownMenu>
    );
  } else {
    return <DropDownMenu label="Connect Wallet" items={ddmItem}></DropDownMenu>;
  }
}
