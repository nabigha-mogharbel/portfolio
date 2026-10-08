import type {
  FooterConfig,
  LinkConfig,
  ProfileConfig,
  PublicationConfig,
  SiteConfig,
} from "@/types"

export const SITE: SiteConfig = {
  title: "Nabigha MOGHARBEL",
  description:
    "Research in computational social science, open methods, and responsible computing.",
  href: "https://nabigha-mogharbel.github.io/portfolio/",
  author: "Nabigha MOGHARBEL",
  dir: "ltr",
  defaultPageImage: "/img/social-preview.png",
  defaultPostImage: "/img/social-preview.png",

  locale: {
    lang: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  // Table of contents depth shared by blog posts and project detail pages.
  tocMaxDepth: 3,

  blog: {
    featuredPostCount: 3,
    postsPerPage: 8,
    shareActions: ["x"],
  },

  home: {
    careerHighlightCount: 4,
    educationHighlightCount: 3,
    updateCount: 3,
    publicationCount: 3,
  },

  favicon: "/favicon.ico",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",

  license: {
    label: "CC-BY-4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
  },
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  othernames: "نابغة مغربل | /na\u02D0bi\u0263a mu\u0263arbil/",
  tagline: "Interdisciplinary biologist",
  email: "nabigha.mogharbel@outlook.com",
  pronouns: "she/her",
  links: {
    github: "https://github.com/nabigha-mogharbel/",
    cv: "/assets/Nabigha_Mogharbel_CV.pdf",
    googleScholar:
      "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Nabigha+Mogharbel+&oq=nabigha",
  },
  highlightLinks: [],
  linksPlacement: {
    header: ["email", "github", "googleScholar"],
    about: false,
    footer: false,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  // { href: "/projects", label: "Skills" },
  { href: "/publications", label: "Publications" },
  // { href: "/teaching", label: "Teaching" },
  // { href: "/blog", label: "Blog" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Nabigha",
    lastName: "Mogharbel",
    aliases: ["N. Mogharbel"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

export const FOOTER: FooterConfig = {
  credits: true,
  // sourceCode: "https://github.com/nabigha-mogharbel/Portfolio",
  footerLinks: [],
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const {
    FooterConfigSchema,
    ProfileConfigSchema,
    PublicationConfigSchema,
    SiteConfigSchema,
  } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  FooterConfigSchema.parse(FOOTER)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
