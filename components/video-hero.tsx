import type { ReactNode } from "react";

type Props = {
  src?: string;
  poster?: string;
  /** Suffix for SVG gradient IDs to keep them unique per instance */
  uid?: string;
  /** Variant: "front" (warm sage drift from top-left) or "back" (flipped) */
  variant?: "front" | "back";
};

/**
 * Renders the four background layers used by `.video-hero` sections:
 *   <video>, animated SVG fallback, paper overlay, film grain.
 *
 * Drop directly inside a section with `className="... video-hero"`.
 * Content siblings should come AFTER this component so they layer above.
 */
export function VideoHeroBackground({
  src,
  poster,
  uid = "h",
  variant = "front"
}: Props) {
  const s1 = `bg-${uid}-1`;
  const s2 = `bg-${uid}-2`;
  const s3 = `bg-${uid}-3`;

  return (
    <>
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-hidden="true"
      >
        {src && <source src={src} type="video/mp4" />}
      </video>
      <div className="bg-fallback" aria-hidden="true">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id={s1} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#516b58" stopOpacity=".4" />
              <stop offset="100%" stopColor="#516b58" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={s2} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7a9485" stopOpacity=".32" />
              <stop offset="100%" stopColor="#7a9485" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={s3} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4dccf" stopOpacity=".7" />
              <stop offset="100%" stopColor="#d4dccf" stopOpacity="0" />
            </radialGradient>
          </defs>
          {variant === "front" ? (
            <>
              <circle cx="200" cy="220" r="380" fill={`url(#${s1})`}>
                <animate attributeName="cx" values="200;520;120;200" dur="28s" repeatCount="indefinite" />
                <animate attributeName="cy" values="220;400;260;220" dur="22s" repeatCount="indefinite" />
                <animate attributeName="r" values="380;430;360;380" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="950" cy="280" r="420" fill={`url(#${s2})`}>
                <animate attributeName="cx" values="950;730;1080;950" dur="26s" repeatCount="indefinite" />
                <animate attributeName="cy" values="280;500;220;280" dur="32s" repeatCount="indefinite" />
                <animate attributeName="r" values="420;390;450;420" dur="24s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="640" r="340" fill={`url(#${s3})`}>
                <animate attributeName="cx" values="600;380;820;600" dur="34s" repeatCount="indefinite" />
                <animate attributeName="cy" values="640;520;700;640" dur="28s" repeatCount="indefinite" />
                <animate attributeName="r" values="340;380;320;340" dur="22s" repeatCount="indefinite" />
              </circle>
            </>
          ) : (
            <>
              <circle cx="300" cy="600" r="380" fill={`url(#${s1})`}>
                <animate attributeName="cx" values="300;500;100;300" dur="28s" repeatCount="indefinite" />
                <animate attributeName="cy" values="600;400;500;600" dur="22s" repeatCount="indefinite" />
                <animate attributeName="r" values="380;430;360;380" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="900" cy="200" r="420" fill={`url(#${s2})`}>
                <animate attributeName="cx" values="900;700;1100;900" dur="26s" repeatCount="indefinite" />
                <animate attributeName="cy" values="200;400;100;200" dur="32s" repeatCount="indefinite" />
                <animate attributeName="r" values="420;390;450;420" dur="24s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="640" r="340" fill={`url(#${s3})`}>
                <animate attributeName="cx" values="600;800;400;600" dur="34s" repeatCount="indefinite" />
                <animate attributeName="cy" values="640;500;700;640" dur="28s" repeatCount="indefinite" />
                <animate attributeName="r" values="340;380;320;340" dur="22s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>
      </div>
      <div className="bg-overlay"></div>
      <div className="bg-grain"></div>
    </>
  );
}
