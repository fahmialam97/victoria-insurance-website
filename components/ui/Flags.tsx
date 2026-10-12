import { useId, type SVGProps } from "react";

/** Bendera sebagai SVG (emoji bendera tidak tampil di Windows). */
export function FlagIndonesia(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 2" aria-hidden="true" {...props}>
      <rect width="3" height="1" fill="#ce1126" />
      <rect y="1" width="3" height="1" fill="#ffffff" />
    </svg>
  );
}

export function FlagUnitedKingdom(props: SVGProps<SVGSVGElement>) {
  // id unik per instance agar clipPath tidak bentrok bila bendera tampil lebih dari sekali
  const id = useId();
  const clip = `${id}-clip`;
  const diag = `${id}-diag`;
  return (
    <svg viewBox="0 0 60 30" aria-hidden="true" {...props}>
      <clipPath id={clip}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={diag}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${diag})`} stroke="#c8102e" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
      </g>
    </svg>
  );
}
