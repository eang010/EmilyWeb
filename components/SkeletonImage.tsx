import Image, { type ImageProps } from "next/image";

type Props = ImageProps & {
  wrapperClassName?: string;
};

export default function SkeletonImage({ className, wrapperClassName, alt, ...props }: Props) {
  return (
    <span className={`relative inline-block ${wrapperClassName ?? ""}`}>
      <Image {...props} alt={alt} className={className} />
    </span>
  );
}
