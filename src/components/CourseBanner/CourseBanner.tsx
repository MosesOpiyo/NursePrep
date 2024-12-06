import Image from 'next/image'

interface CourseBannerProps {
  title: string
  description: string
  image: string
}

export default function CourseBanner({ title, description, image }: CourseBannerProps) {
  return (
    <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-8">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-xl text-white">{description}</p>
      </div>
    </div>
  )
}