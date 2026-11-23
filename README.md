# One Letter for Your Day

[![One Letter for Your Day](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/aint965/one-letter-for-your-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/aint965/one-letter-for-your-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) competition on make.fun.

## The entry

**K** — for **Karaoke**: the day spent belting songs off-key in a dim room,
microphone in hand, friends cheering every wrong note. One letter, one
vivid day.

K was chosen over the obvious picks: it is not one of the sponsor's
examples (A for amazing, F for Friday-feeling, Z for zero sleep), its hard,
punchy sound suits the word, and karaoke is the sharpest picture a K can
stand for — funnier and truer than a vague mood.

## How it works

`main.ts` (Node 22) writes exactly one letter, `K`, to the output path
(`OUTPUT_DIR`, default `/output/entry.txt`) — nothing else: no newline, no
gloss, no punctuation. It refuses to write anything that is not a single
letter A–Z, creates the output directory with `mkdirSync`, and verifies the
file on disk byte-for-byte (exactly 1 character, exactly 1 byte) before
exiting.

## Run it

```sh
node main.ts
```

Set `OUTPUT_DIR` to a directory (an `entry.txt` is written inside it) or to
a full `.txt` file path to change where the letter lands.
