// ────────────────────────────────────────────────────────────────────────────
// ELA media manifest — curated from the Instagram dumps and compressed offline.
// Paths point at /media/** in public/. One player alive at a time on the wall.
// ────────────────────────────────────────────────────────────────────────────

export type Channel = "ELA" | "ECL" | "AYTP"

export interface VideoItem {
  src: string
  poster: string
  channel: Channel
  date: string
  caption: string
  likes: number
  postUrl: string
}

export interface PhotoItem {
  src: string
  channel: Channel
  date: string
  caption: string
  postUrl: string
}

export const VIDEOS: VideoItem[] = [
  {
    src: "/media/video/v00_ela.mp4",
    poster: "/media/video/v00_ela.jpg",
    channel: "ELA",
    date: "2026-06-07",
    caption:
      "ELA organized its very first Run and Makan session at the Perdana Botanical Garden, Kuala Lumpur!",
    likes: 65,
    postUrl: "https://www.instagram.com/p/DZSCjldlEtA/",
  },
  {
    src: "/media/video/v01_ela.mp4",
    poster: "/media/video/v01_ela.jpg",
    channel: "ELA",
    date: "2025-11-06",
    caption: "Leadership evolves. But its essence stays human.",
    likes: 57,
    postUrl: "https://www.instagram.com/p/DQs786kj8nh/",
  },
  {
    src: "/media/video/v02_ela.mp4",
    poster: "/media/video/v02_ela.jpg",
    channel: "ELA",
    date: "2025-08-11",
    caption: "Pickleball, conversations, and connections that cross every level of leadership!",
    likes: 82,
    postUrl: "https://www.instagram.com/p/DNNnGwpyZcI/",
  },
  {
    src: "/media/video/v03_ela.mp4",
    poster: "/media/video/v03_ela.jpg",
    channel: "ELA",
    date: "2025-07-03",
    caption:
      "AI is more than just prompting on ChatGPT. With tools like n8n, we're able to automate our workflows to free up time for what truly matters.",
    likes: 18,
    postUrl: "https://www.instagram.com/p/DLoCwANyC1m/",
  },
  {
    src: "/media/video/v04_ela.mp4",
    poster: "/media/video/v04_ela.jpg",
    channel: "ELA",
    date: "2025-06-27",
    caption:
      "On 10 May, Emerging Leaders Asia served up more than just Pickleball — we brought the community together to connect, compete, and chill.",
    likes: 16,
    postUrl: "https://www.instagram.com/p/DLZQzyVy_jv/",
  },
  {
    src: "/media/video/v05_ecl.mp4",
    poster: "/media/video/v05_ecl.jpg",
    channel: "ECL",
    date: "2025-05-21",
    caption:
      "A big thank you to Luqman Ramli from CIMB Bank for an engaging session on data analytics in our In Frequency series.",
    likes: 29,
    postUrl: "https://www.instagram.com/p/DJ6v4ZYhmF0/",
  },
  {
    src: "/media/video/v06_ela.mp4",
    poster: "/media/video/v06_ela.jpg",
    channel: "ELA",
    date: "2025-03-13",
    caption:
      "A shoutout to our speakers, Rahayu Ramli (PETRONAS) and Suresh Srinivasan (Axiata Group Berhad), for shedding light on the evolving landscape.",
    likes: 14,
    postUrl: "https://www.instagram.com/p/DHJMG3_paOB/",
  },
  {
    src: "/media/video/v07_ela.mp4",
    poster: "/media/video/v07_ela.jpg",
    channel: "ELA",
    date: "2025-01-19",
    caption:
      "A round of applause to our inspiring speakers, Datuk Captain Chester and Intan Shahira from AirAsia, for sharing their careers.",
    likes: 30,
    postUrl: "https://www.instagram.com/p/DFAwgDMSEx4/",
  },
]

export const PHOTOS: PhotoItem[] = [
  { src: "/media/gallery/p00_ela.jpg", channel: "ELA", date: "2026-06-22", caption: "Trading Teams notifications for a hot latte and a room full of people teaching you their favourite hobbies.", postUrl: "https://www.instagram.com/p/DZ4d9zDlK5A/" },
  { src: "/media/gallery/p01_ela.jpg", channel: "ELA", date: "2026-06-10", caption: "Feeling the pressure? Come swap your laptop for a latte.", postUrl: "https://www.instagram.com/p/DZZQCO5D01L/" },
  { src: "/media/gallery/p02_ela.jpg", channel: "ELA", date: "2026-06-07", caption: "ELA's very first Run and Makan session at the Perdana Botanical Garden, Kuala Lumpur!", postUrl: "https://www.instagram.com/p/DZSCjldlEtA/" },
  { src: "/media/gallery/p03_aytp.jpg", channel: "AYTP", date: "2026-03-25", caption: "The standard is high. Your preparation starts here.", postUrl: "https://www.instagram.com/p/DWSqPhEASnh/" },
  { src: "/media/gallery/p04_ela.jpg", channel: "ELA", date: "2026-03-21", caption: "From the ELA family to yours — Eid Mubarak.", postUrl: "https://www.instagram.com/p/DWIrlX1D1Lh/" },
  { src: "/media/gallery/p05_ela.jpg", channel: "ELA", date: "2026-03-20", caption: "The search is over.", postUrl: "https://www.instagram.com/p/DWFgU9YgVJN/" },
  { src: "/media/gallery/p06_aytp.jpg", channel: "AYTP", date: "2026-03-18", caption: "The wait is over. Your leadership era starts now.", postUrl: "https://www.instagram.com/p/DWAvfzbASTq/" },
  { src: "/media/gallery/p07_ela.jpg", channel: "ELA", date: "2026-02-25", caption: "Emerging Leaders Asia is recruiting new committee members!", postUrl: "https://www.instagram.com/p/DVK2w-_D3d3/" },
  { src: "/media/gallery/p08_ela.jpg", channel: "ELA", date: "2026-02-17", caption: "Happy Chinese New Year, ELA!", postUrl: "https://www.instagram.com/p/DU2BKh_j0bL/" },
  { src: "/media/gallery/p09_ela.jpg", channel: "ELA", date: "2026-02-03", caption: "Dear ELA Members.", postUrl: "https://www.instagram.com/p/DUS5qkbD_Q2/" },
  { src: "/media/gallery/p10_ecl.jpg", channel: "ECL", date: "2026-01-01", caption: "Happy New Year 2026!", postUrl: "https://www.instagram.com/p/DS84j8DjIEb/" },
  { src: "/media/gallery/p11_ecl.jpg", channel: "ECL", date: "2025-12-24", caption: "Merry Christmas and Happy New Year to our Emerging Leaders!", postUrl: "https://www.instagram.com/p/DSpGSUwCs5p/" },
  { src: "/media/gallery/p12_ela.jpg", channel: "ELA", date: "2025-12-03", caption: "Dear Members.", postUrl: "https://www.instagram.com/p/DRyCSZAgXKY/" },
  { src: "/media/gallery/p13_ela.jpg", channel: "ELA", date: "2025-11-24", caption: "Dear ELA Members.", postUrl: "https://www.instagram.com/p/DRblxhpj_vQ/" },
  { src: "/media/gallery/p14_ela.jpg", channel: "ELA", date: "2025-10-31", caption: "ELA, with Wellness Omakase and brioHR, is hosting a workshop to co-create the ultimate wellbeing playbook.", postUrl: "https://www.instagram.com/p/DQd2IIDj1Qv/" },
  { src: "/media/gallery/p15_ecl.jpg", channel: "ECL", date: "2025-10-20", caption: "Wishing you and your family a Happy Deepavali!", postUrl: "https://www.instagram.com/p/DQA3dQkjwee/" },
  { src: "/media/gallery/p16_ecl.jpg", channel: "ECL", date: "2025-10-14", caption: "Getting ready for internships? Join our CV & LinkedIn Workshop.", postUrl: "https://www.instagram.com/p/DPyrXipCNHS/" },
  { src: "/media/gallery/p17_ecl.jpg", channel: "ECL", date: "2025-10-08", caption: "Learn how to showcase your skills at our CV & LinkedIn Workshop.", postUrl: "https://www.instagram.com/p/DPi7zrODwtU/" },
  { src: "/media/gallery/p18_ecl.jpg", channel: "ECL", date: "2025-09-18", caption: "InFrequency: Life in Management Consulting.", postUrl: "https://www.instagram.com/p/DOut2EWCKxT/" },
  { src: "/media/gallery/p19_ela.jpg", channel: "ELA", date: "2025-08-24", caption: "We brought together HR professionals and leaders to explore what development truly means.", postUrl: "https://www.instagram.com/p/DNuaahq3nwS/" },
  { src: "/media/gallery/p20_ela.jpg", channel: "ELA", date: "2025-08-23", caption: "What happens when high-energy people meet on the court? Magic.", postUrl: "https://www.instagram.com/p/DNsVrKM3hm6/" },
  { src: "/media/gallery/p21_ela.jpg", channel: "ELA", date: "2025-08-22", caption: "A meetup at Mukha Cafe for more than just good food — great company and conversation.", postUrl: "https://www.instagram.com/p/DNpJeFFv1Rb/" },
  { src: "/media/gallery/p22_ela.jpg", channel: "ELA", date: "2025-08-04", caption: "Ready to supercharge your lead generation?", postUrl: "https://www.instagram.com/p/DM6qNISyQwU/" },
  { src: "/media/gallery/p23_aytp.jpg", channel: "AYTP", date: "2025-04-25", caption: "Future-Ready Starts Now.", postUrl: "https://www.instagram.com/p/DI3cyKOBK-y/" },
  { src: "/media/gallery/p24_ela.jpg", channel: "ELA", date: "2025-03-13", caption: "A shoutout to our speakers, Rahayu Ramli (PETRONAS) and Suresh Srinivasan (Axiata Group Berhad).", postUrl: "https://www.instagram.com/p/DHJMG3_paOB/" },
]

// One curated, text-free hero per page — no baked-in captions, so the hero's own
// title overlay never collides with promo graphics. Sourced from the ELA/ECL feeds.
export const HERO_PHOTOS = {
  home: "/media/gallery/hero-community.jpg", // full community + ELA banners, KL
  ecosystem: "/media/gallery/hero-briefing.jpg", // Run & Makan community briefing
  initiatives: "/media/gallery/hero-forum.jpg", // Coffee Circle forum in session
  insights: "/media/gallery/hero-speaker.jpg", // In Frequency speaker, corporate
  partnerships: "/media/gallery/hero-panel.jpg", // In Frequency fireside panel
  media: "/media/gallery/hero-run.jpg", // morning run in the park
  join: "/media/gallery/hero-connect.jpg", // café one-on-one conversation
  leadership: "/media/gallery/hero-cafe.jpg", // the committee gathered indoors
  // Legacy aliases (kept so older references keep resolving).
  runAndMakan: "/media/gallery/p02_ela.jpg",
  runAndMakanPoster: "/media/video/v00_ela.jpg",
  pickleball: "/media/gallery/p20_ela.jpg",
  cafe: "/media/gallery/hero-cafe.jpg",
  panel: "/media/gallery/hero-panel.jpg",
} as const

// Life-at-ELA cluster — clean lifestyle photography (café labels cropped out).
export const LIFE_GALLERY = [
  { src: "/media/gallery/life-picnic.jpg", caption: "Run & Makan spreads at Perdana Botanical Garden, KL." },
  { src: "/media/gallery/life-guitar.jpg", caption: "Coffee Circle — swapping laptops for a latte and a tune." },
  { src: "/media/gallery/life-chat.jpg", caption: "Warm-downs and catch-ups after the morning run." },
  { src: "/media/gallery/life-craft.jpg", caption: "Show & Tell — members sharing the hobbies they love." },
  { src: "/media/gallery/life-talk.jpg", caption: "A member walking the room through her favourite game." },
] as const
