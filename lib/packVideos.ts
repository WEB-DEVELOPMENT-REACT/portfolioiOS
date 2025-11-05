export const PACK_VIDEO_SOURCES = [
  "/20251105_2257_New Video_simple_compose_01k9b0craye83rckxxc82v6cmq.mov",
  "/20251105_2301_New Video_simple_compose_01k9b0jzpdf75rw8m56dh2nmq7.mov",
  "/20251105_2302_New Video_simple_compose_01k9b0nh44exnbz8vntxz83dar.mov",
  "/20251105_2303_New Video_simple_compose_01k9b0qcxve9aakpykkps4kzn3.mov",
  "/20251105_2306_New Video_simple_compose_01k9b0w25cfdz8mat7hf3qh3dn.mov",
  "/20251105_2307_New Video_simple_compose_01k9b0z9c9e6razsejj3m7kcfg.mov",
  "/20251105_2308_New Video_simple_compose_01k9b114cee0dttz1bq09w1zj0.mov",
  "/20251105_2310_New Video_simple_compose_01k9b13tfmfmbtgdx2bk7cz2bs.mov",
];

export const DEFAULT_PACK_VIDEO = "/firstsoft.mp4";
export const PACK_VIDEO_STORAGE_KEY = "pack-video-assignments";

export type PackVideoAssignments = Record<string, string>;

export const generatePackVideoAssignments = (
  slugs: string[],
  usedVideos: string[] = []
): PackVideoAssignments => {
  const used = new Set(usedVideos);
  const available = PACK_VIDEO_SOURCES.filter((video) => !used.has(video));
  const assignments: PackVideoAssignments = {};

  slugs.forEach((slug) => {
    if (available.length === 0) {
      assignments[slug] = DEFAULT_PACK_VIDEO;
      return;
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const [selected] = available.splice(randomIndex, 1);

    assignments[slug] = selected ?? DEFAULT_PACK_VIDEO;
    if (selected) {
      used.add(selected);
    }
  });

  return assignments;
};

export const loadAssignmentsFromStorage = (): PackVideoAssignments | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawValue = window.sessionStorage.getItem(PACK_VIDEO_STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const parsed = JSON.parse(rawValue) as PackVideoAssignments;
    return parsed;
  } catch {
    return null;
  }
};

export const saveAssignmentsToStorage = (assignments: PackVideoAssignments) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(
      PACK_VIDEO_STORAGE_KEY,
      JSON.stringify(assignments)
    );
  } catch {
    // Ignore storage failures (e.g., private mode or quota exceeded)
  }
};
