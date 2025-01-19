import Image from 'next/image';

export interface NewsBannerProps {
  title: string;
  imgUrl: string;
}
export const NewsBanner : React.FC<NewsBannerProps> = ({
    title,
    imgUrl,
  }) => (
  <div className="flex items-center justify-center">
    <section className="relative w-full aspect-[16/9] md:aspect-[25/7]">
      <Image
        src={imgUrl}
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center text-white px-4 md:px-64">
        <h2 className="text-xl md:text-3xl text-center font-bold">{title}</h2>
      </div>
    </section>
  </div>
  )