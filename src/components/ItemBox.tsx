"use client";

import Image from "next/image";
import Link from "next/link";
import { ItemProps } from "../utils/ItemBoxProps";
import { useMemo } from "react";

interface ItemBoxProps extends ItemProps {
  index: number;
}

// const specialList = ["w3mlab"];

const ItemBox: React.FC<ItemBoxProps> = ({
  title,
  description,
  image,
  href,
  tags,
  color,
  isWIP,
  externalURL,
  slug,
  index,
}) => {
  const isExternal = useMemo(() => externalURL !== undefined, [externalURL]);

  // const isSpecial = useMemo(() => specialList.includes(slug), [slug]);

  const style = {
    "--color": `${color}aa`,
    "--color-light": color,
    "--color-transparent": `${color}80`,
    "--color-dark": `${color}6A`,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`flex flex-col border-2 border-[var(--color-transparent)] shadow-lg rounded-lg overflow-hidden m-4`}
    >
      <div className="flex items-center py-2 gap-4 px-4 justify-between bg-[var(--color-transparent)]">
        <h2 className="flex items-center gap-2 text-lg">{title}</h2>
        <Image
          src={image}
          alt={title}
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            target.classList.add("image-load-post");
          }}
          width={28}
          height={28}
          className="rounded-md w-7 h-7 image-load-pre"
        />
      </div>
      <div className="flex flex-col justify-between h-full pt-4">
        <p className="px-4 text-sm font-light tracking-wide text-white/70">
          {description}
        </p>
        <div className="p-4">
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="select-none px-2 py-1 text-xs text-white/90 bg-[var(--color-dark)] border border-[var(--color-light)] rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-dark)] px-4 py-3 flex items-center gap-4">
        <p>Test</p>
        {/* <p>Address: 0x000000000000000000000000000000000000dead</p> */}
      </div>
    </div>
  );
};

export default ItemBox;
