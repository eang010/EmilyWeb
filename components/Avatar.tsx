import Image from "next/image";
import meHeadshot from "@/components/images/me-hs.jpg";

export default function Avatar({ size = 72 }: { size?: number }) {
  return (
    <Image
      src={meHeadshot}
      alt="Emily Ang"
      width={size}
      height={size}
      priority
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}
