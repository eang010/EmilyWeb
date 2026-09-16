import Image from "next/image";
import meHeadshot from "@/components/images/me-hs.jpg";

export default function Avatar({
  size = 72,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={meHeadshot}
      alt="Emily Ang"
      width={size}
      height={size}
      priority
      className={
        className
          ? `shrink-0 rounded-full object-cover ${className}`
          : "shrink-0 rounded-full object-cover"
      }
      style={className ? undefined : { width: size, height: size }}
    />
  );
}
