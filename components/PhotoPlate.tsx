import type { Photo } from "@/content";
import Image from "next/image";

export default function PhotoPlate({
  photo,
  priority = false,
  frame = false,
}: {
  photo: Photo;
  priority?: boolean;
  frame?: boolean;
}) {
  return (
    <figure className="min-w-0 border border-hairline bg-card">
      {frame ? (
        <div className="relative aspect-[3/2]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={priority}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="h-auto w-full"
        />
      )}
      <figcaption className="border-t border-hairline px-4 py-3">
        <p className="font-label text-sm uppercase tracking-[0.14em] text-brand">{photo.kind}</p>
        <p className="mt-1 text-base leading-snug">{photo.caption}</p>
      </figcaption>
    </figure>
  );
}
