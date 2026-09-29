import Image, { type ImageProps } from "next/image";

type Props = ImageProps & {
  wrapperClassName?: string;
};

export default function SkeletonImage({ className, wrapperClassName, alt, ...props }: Props) {
  return (
    <span className={`skeleton-host relative inline-block ${wrapperClassName ?? ""}`}>
      <span aria-hidden="true" className="skeleton pointer-events-none absolute inset-0 rounded-[inherit]" />
      <Image {...props} alt={alt} className={className} />
    </span>
  );
}
