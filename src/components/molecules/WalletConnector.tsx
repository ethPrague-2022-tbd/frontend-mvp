import React from 'react';
import { useAccount, useConnect } from 'wagmi';
import { DDMItem, DropDownMenu } from './DropDownMenu';

export function WalletConnector() {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: false,
  });
  const [{ data: connectData, error }, connect] = useConnect();


  let ddmItem: DDMItem[] = [];

  connectData.connectors.forEach((connector) => {
    ddmItem.push({ label: connector.name, action: () => connect(connector) });
  });

  if (accountData) {
    return (
      <DropDownMenu
        items={[
          {
            label: 'logout',
            action: async () => {
              await fetch('/api/logout');
              disconnect();
            },
          },
        ]}
        label={
          accountData.ens?.name
            ? `${accountData.ens?.name}`
            : accountData.address.substring(0, 5) +
              '...' +
              accountData.address.substring(accountData.address.length - 3)
        }
      ></DropDownMenu>
    );
  } else {
    return <DropDownMenu label="Connect Wallet" items={ddmItem}></DropDownMenu>;
  }
}
