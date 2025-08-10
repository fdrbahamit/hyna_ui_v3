import Image from "next/image";

export default function Home() {
    return (
        <div className="relative h-fit w-full">
            <div className="w-full absolute top-1/12 h-full max-w-[1886]">
                <Image
                    aria-hidden
                    src="/lunabg.png"
                    alt="lunabg icon"
                    width={1886}
                    height={100}
                    sizes="(max-width: 1439px) 100vw, 1886px"
                />
            </div>
        </div>
    );
}
