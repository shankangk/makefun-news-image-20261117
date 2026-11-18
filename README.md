# makefun-news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/shankangk/makefun-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/shankangk/makefun-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

A newspaper front page summing up Tuesday, November 17, 2026: U.S. jets strike an Iranian missile site on Qeshm Island as the Gulf crisis deepens, Ukraine hits the Kerch Bridge again, Trump lands in Shenzhen for APEC, plus Nvidia's record $115B quarter.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## What the image shows

- **Lead story — the Gulf:** U.S. jets hit a missile site on Qeshm Island after Iranian drones struck a U.S. radar base in Bahrain (the third attack in five days). A fourth tanker hit a mine in the Strait of Hormuz, Iran seized a U.S. drone, and a third U.S. carrier group deployed.
- **Ukraine:** Ukraine hit the Kerch Bridge again — a road span fell into the strait. Russia struck bridges in Kyiv, and 40 were killed in Zaporizhzhia.
- **Shenzhen:** Trump flew in for APEC; a first Xi–Trump–Putin summit is set for Thursday, November 19.
- **Also:** Nvidia posted record revenue above $115 billion as the U.S. tightened AI-chip export bans on China; the UK, Australia, Canada and Italy urged Israel to open Gaza crossings for aid; Japan scrambled jets after Russian aircraft entered its airspace.

## How it was built

Three editorial illustrations were generated with AI image tools (Gulf strikes at dusk, the broken Kerch Bridge, the Shenzhen skyline), then composed into one 1024×1024 poster with Python (PIL). Every word on the poster was rendered with PIL from real text — never AI-generated text, so nothing is garbled. `main.ts` copies the finished `entry.png` to `/output/entry.png`, deterministically, with no network.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
