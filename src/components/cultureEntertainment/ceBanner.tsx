import Image from 'next/image'

export default function Banner({ image, alt }: { image: string; alt: string }) {
    return (
        <div className="w-full h-64 md:h-80 overflow-hidden">
            <Image src={image} width={1425} height={400} alt={alt} className="object-cover h-full w-full" />
        </div>
    )
}
