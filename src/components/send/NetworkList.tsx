import { NetworkItem } from "./NetworkItem";
import { NetworkListProps } from "./types";

export const NetworkList = ({ networks, onNetworkSelect }: NetworkListProps) => {
  return (
    <div className="self-stretch w-full mt-4">
      <div className="self-stretch flex-1 shrink w-full gap-2.5 text-xl text-[rgba(28,28,28,1)] font-medium px-5">
        Choose network
      </div>
      <div className="w-full text-lg mt-2 px-2.5">
        {networks.map((network, index) => (
          <NetworkItem
            key={network.name}
            {...network}
            onClick={() => onNetworkSelect?.(network)}
          />
        ))}
      </div>
    </div>
  );
};