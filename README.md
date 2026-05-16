# frank-firmware

Official page: **[frank.rh1.tech](https://frank.rh1.tech/)** — hub for all FRANK boards and firmware.

Single source of truth for FRANK firmware metadata and screenshots, consumed by
[rh1.tech](https://github.com/rh1tech/rh1.tech) and other public-facing sites.

## Layout

```
.
├── data.ts          ← canonical metadata for every firmware
├── images/
│   ├── frank-nes/   ← screenshots per firmware
│   ├── frank-snes/
│   └── ...
└── images/placeholder.svg  ← fallback when a firmware has no screenshots yet
```

`data.ts` is a TypeScript module that exports:

- `FIRMWARE` — a record keyed by firmware slug
- `FIRMWARE_ORDER` — display order for the index page
- `CATEGORY_LABELS_EN` / `CATEGORY_LABELS_RU` / `CATEGORY_LABELS_UK` /
  `CATEGORY_LABELS_BE` / `CATEGORY_LABELS_DE` — localised category headers
- `CATEGORY_ORDER` — display order for the categories

Image paths inside `data.ts` are **repo-relative** (`images/<slug>/<file>.png`).
Consumers are expected to rewrite them to whatever URL prefix they need.

## Localisation

Each firmware entry carries copy in five languages:

- `excerpt*`, `summary*`, `history*`, `highlights*` — `En`, `Ru`, `Uk`, `Be`,
  `De`
- `En` and `Ru` are **required**; `Uk`, `Be` and `De` are optional but should be
  kept populated for every public firmware. Consumers are expected to fall back
  from `Uk`/`Be` to `Ru` (or `En`) and from `De` to `En` when a translation is
  missing.

## Editing rules

1. Edit `data.ts` directly. Keep the EN, RU, UK, BE and DE fields in sync.
2. Place screenshots under `images/<slug>/`, with stable filenames so the data
   file does not need to be rewritten when you re-shoot.
3. Commit and push. Consumers will pick the change up on their next sync.

## Consumers

| Repo | Sync command |
|---|---|
| rh1.tech | `npm run sync-firmware` |

The sync script clones this repo, copies `data.ts` into the consumer's source
tree (rewriting image paths to the consumer's preferred URL prefix) and copies
`images/` into the consumer's static directory.

## License

MIT.
