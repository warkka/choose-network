export interface NetworkItem {
  name: string;
  imageUrl: string;
  fee: string;
  time: string;
  rounded?: boolean;
}

export interface SendContainerProps {
  onClose?: () => void;
}

export interface NetworkItemProps extends NetworkItem {
  onClick?: () => void;
}

export interface NetworkListProps {
  networks: NetworkItem[];
  onNetworkSelect?: (network: NetworkItem) => void;
}