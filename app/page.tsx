import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="w-full absolute top-1/12 h-full">
        <Image
          aria-hidden
          src="/lunabg.png"
          alt="lunabg icon"
          fill
          objectFit="contain"
          sizes="(max-width: 1439px) 100vw, 1800px"
        />
      </div>
    </div>
  );
}
