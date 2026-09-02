import { Maximize2 } from "lucide-react";
import type { Media } from "@/content/types";
import type { LightboxItem } from "@/components/ui/Lightbox";
import styles from "./Media.module.scss";

type MediaPlayerProps = {
  media: Media;
  title: string;
  expandLabel: string;
  onExpand: (item: LightboxItem) => void;
};

/**
 * Renderiza el recurso de una experiencia: video (mp4) con controles nativos
 * o imagen con lazy-loading. Ambos se pueden abrir en grande (visor).
 */
export default function MediaPlayer({
  media,
  title,
  expandLabel,
  onExpand,
}: MediaPlayerProps) {
  const item: LightboxItem = { type: media.type, src: media.url, alt: title };

  if (media.type === "video") {
    return (
      <div className={styles.wrap}>
        <video
          className={styles.media}
          src={media.url}
          controls
          preload="metadata"
          playsInline
          aria-label={title}
        />
        <button
          type="button"
          className={styles.expand}
          onClick={() => onExpand(item)}
          aria-label={expandLabel}
          title={expandLabel}
        >
          <Maximize2 size={14} aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.zoom}
        onClick={() => onExpand(item)}
        aria-label={expandLabel}
        title={expandLabel}
      >
        {/* Imagen remota arbitraria (Cloudinary u otros): <img> evita configurar
            un loader/remotePattern por cada host. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.media} src={media.url} alt={title} loading="lazy" />
      </button>
    </div>
  );
}
