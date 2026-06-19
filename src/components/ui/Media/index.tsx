import type { Media } from "@/content/types";
import styles from "./Media.module.scss";

type MediaPlayerProps = {
  media: Media;
  title: string;
};

/**
 * Renderiza el recurso de una experiencia: video (mp4) con controles nativos,
 * o imagen con lazy-loading. Sin autoplay (mejora sobre el iframe original).
 */
export default function MediaPlayer({ media, title }: MediaPlayerProps) {
  if (media.type === "video") {
    return (
      <video
        className={styles.media}
        src={media.url}
        controls
        preload="metadata"
        playsInline
        aria-label={title}
      />
    );
  }

  return (
    // Imagen remota arbitraria (Cloudinary u otros) — <img> evita configurar
    // un loader/remotePattern por cada host de experiencia.
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.media} src={media.url} alt={title} loading="lazy" />
  );
}
