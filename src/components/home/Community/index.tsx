import Image from "next/image";
import { useRouter } from "next/router";
import {
  ExternalLink,
  Users,
  Mic,
  Footprints,
  Blocks,
  PenLine,
  Handshake,
  BookOpen,
  Trophy,
  Sparkles,
  Maximize2,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import type { Community as CommunityData } from "@/content/types";
import { getUi } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import styles from "./Community.module.scss";

type CommunityProps = {
  community: CommunityData;
};

/** Icono por id de pilar/iniciativa; fallback generico. */
const PILLAR_ICONS: Record<string, typeof Users> = {
  meetups: Users,
  podcast: Mic,
  socialrun: Footprints,
  projects: Blocks,
  blog: PenLine,
  networking: Handshake,
  reading: BookOpen,
  hackathon: Trophy,
};

/**
 * Seccion "Comunidad": UniconHub en tono sobrio (rol, video del equipo,
 * descripcion, iniciativas, fotos y enlaces). Solo el marco del video usa
 * el degradado de la marca.
 */
export default function Community({ community }: CommunityProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);
  const lightbox = useLightbox();
  const paragraphs = community.description.split(/\n\n+/).filter(Boolean);
  const socials = [
    { href: community.social.instagram, label: "Instagram", Icon: FaInstagram },
    { href: community.social.linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: community.social.youtube, label: "YouTube", Icon: FaYoutube },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  return (
    <section id="community" className={styles.section}>
      <h2 className={styles.title}>{ui.nav.community}</h2>

      <Reveal className={styles.brand}>
        <Image
          src={community.logo}
          alt={`${community.name} logo`}
          width={44}
          height={44}
          className={styles.logo}
        />
        <div className={styles.brandText}>
          <a
            className={styles.brandName}
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {community.name}
          </a>
          <span className={styles.brandTagline}>{community.tagline}</span>
        </div>
        <span className={styles.role}>{community.role}</span>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.media}>
          <div className={styles.phone}>
            <video
              className={styles.video}
              src={community.video.url}
              poster={community.video.poster}
              controls
              playsInline
              preload="none"
              aria-label={community.video.caption}
            />
            <button
              type="button"
              className={styles.expand}
              onClick={() =>
                lightbox.open({
                  type: "video",
                  src: community.video.url,
                  alt: community.video.caption,
                })
              }
              aria-label={ui.viewLarge}
              title={ui.viewLarge}
            >
              <Maximize2 size={14} aria-hidden />
            </button>
          </div>
          <p className={styles.videoCaption}>{community.video.caption}</p>
        </Reveal>

        <Reveal className={styles.story}>
          {paragraphs.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          <h3 className={styles.subtitle}>{ui.communityPillars}</h3>
          <ul className={styles.pillars}>
            {community.pillars.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.id] ?? Sparkles;
              return (
                <li key={pillar.id} className={styles.pillar}>
                  <Icon size={13} className={styles.pillarIcon} aria-hidden />
                  {pillar.label}
                </li>
              );
            })}
          </ul>

          <div className={styles.actions}>
            <a
              className={styles.cta}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.communityVisit} <ExternalLink size={14} aria-hidden />
            </a>
            <div className={styles.social} aria-label={ui.communityFollow}>
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  className={styles.socialLink}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${community.name} · ${label}`}
                  title={`${community.name} · ${label}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <h3 className={styles.subtitle}>{ui.communityGallery}</h3>
      <div className={styles.gallery}>
        {community.photos.map((photo) => (
          <Reveal key={photo.src} className={styles.photo}>
            <figure className={styles.figure}>
              <button
                type="button"
                className={styles.zoom}
                onClick={() =>
                  lightbox.open({ type: "image", src: photo.src, alt: photo.alt })
                }
                aria-label={`${ui.viewLarge}: ${photo.alt}`}
                title={ui.viewLarge}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className={styles.img}
                />
              </button>
              <figcaption className={styles.caption}>{photo.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Lightbox item={lightbox.item} closeLabel={ui.close} onClose={lightbox.close} />
    </section>
  );
}
