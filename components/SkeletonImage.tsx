"use client";

import { useCallback, useState } from "react";
import Image, { type ImageProps } from "next/image";

type Props = ImageProps & {
  wrapperClassName?: string;
};

export default function SkeletonImage({
  className,
  wrapperClassName,
  alt,
  onLoad,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const markLoaded = useCallback(() => setLoaded(true), []);

  return (
    <span
      className={`skeleton-host relative inline-block ${wrapperClassName ?? ""}`}
      aria-busy={!loaded || undefined}
    >
      {!loaded && (
        <span
          aria-hidden="true"
          className="skeleton pointer-events-none absolute inset-0 rounded-[inherit]"
        />
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-out`}
        ref={(node) => {
          if (node?.complete && node.naturalWidth > 0) markLoaded();
        }}
        onLoad={(event) => {
          markLoaded();
          onLoad?.(event);
        }}
      />
    </span>
  );
}
