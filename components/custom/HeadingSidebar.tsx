import React from "react";

export default function HeadingSidebar({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center w-full">
        <h6 className="capitalize">{name}</h6>
      </div>
    </div>
  );
}
