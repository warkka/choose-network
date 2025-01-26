import { NetworkItemProps } from "./types";

export const NetworkItem = ({ name, imageUrl, fee, time, rounded = false, onClick }: NetworkItemProps) => {
  return (
    <div
      className="flex min-h-16 w-full items-center whitespace-nowrap justify-between px-2.5 py-2 rounded-[20px] cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="self-stretch flex min-w-60 w-full items-center gap-4 flex-1 shrink basis-[0%] my-auto">
        <img
          loading="lazy"
          src={imageUrl}
          className={`aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto ${
            rounded ? "rounded-[112px]" : ""
          }`}
          alt={`${name} network icon`}
        />
        <div className="self-stretch flex flex-col items-stretch text-[rgba(28,28,28,1)] font-medium justify-center flex-1 shrink basis-[0%] my-auto">
          <div className="self-stretch w-full gap-1">{name}</div>
        </div>
        <div className="self-stretch flex flex-col font-normal text-right justify-center leading-none">
          <div className="text-[rgba(28,28,28,1)]">{fee}</div>
          <div className="text-[rgba(143,143,143,1)]">{time}</div>
        </div>
      </div>
    </div>
  );
};