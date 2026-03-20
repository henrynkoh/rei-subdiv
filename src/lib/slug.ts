/** Slug for HTML ids and URL hashes; keep in sync with nav generation. */
export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function tableAnchorId(categoryId: string, tableTitle: string) {
  return `tbl-${categoryId}-${slugify(tableTitle)}`;
}
