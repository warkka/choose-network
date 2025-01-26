import { SendContainerProps } from "./types";
import { AddressInput } from "./AddressInput";
import { AmountInput } from "./AmountInput";
import { NetworkList } from "./NetworkList";
import { SendButton } from "./SendButton";

const networks = [
  {
    name: "Base",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/53f8f8469d7e01b0982aac660849e6df42d7e98537fa513d5060bb2ced2e8ad6?placeholderIfAbsent=true",
    fee: "<$0.01",
    time: "Instant"
  },
  {
    name: "ZKsync",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/8e5aa852f3da7572452d249143f2af559e72b75eecf7ea0a5c5f01231ac0b4d7?placeholderIfAbsent=true",
    fee: "$0.03",
    time: "Instant",
    rounded: true
  },
  {
    name: "Optimism",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/8c0e4db93e0605e5dec1f10dcfa1ffcead56d5d498dbe4a0c6edb07ba069c612?placeholderIfAbsent=true",
    fee: "$0.03",
    time: "Instant"
  },
  {
    name: "Tron",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/d5dee2d213d0363b683fd1943f5a8c144e6563783644b8f4f45d4926bdba3efe?placeholderIfAbsent=true",
    fee: "$3.5",
    time: "5 min",
    rounded: true
  },
  {
    name: "Ethereum",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/6aa2dbe77d5c204ad1caf57d0502b7a5c037fa3281d113640eb2d30d4e681796?placeholderIfAbsent=true",
    fee: "$15.00",
    time: "10 min"
  }
];

export const SendContainer = ({ onClose }: SendContainerProps) => {
  return (
    <div className="bg-[rgba(245,245,247,1)] flex max-w-[393px] flex-col overflow-hidden items-center pt-5 pb-9 rounded-[24px_24px_0px_0px]">
      <div className="flex w-full max-w-[353px] items-center text-xl text-[rgba(28,28,28,1)] font-semibold relative">
        <div className="absolute left-0 w-8 h-8 cursor-pointer" onClick={onClose} />
        <div className="w-full text-center">Send</div>
      </div>
      
      <AddressInput />
      <AmountInput />
      <NetworkList networks={networks} />
      <SendButton />
    </div>
  );
};