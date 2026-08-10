---
layout: post
title: "How I Work with Claude, August 2026 Edition"
permalink: "how-i-work-with-claude"
date: 2026-08-09
categories:
  - essay
  - wip
teaser: "I wanted a setup with Claude that got a little better every session instead of starting over each time. Four months and 135 session logs later, this is where I landed, and it's working better than I expected."
---

Over the last four months Claude and I have built up 135 session logs. These aren't chat transcripts. At the end of each working session Claude writes a markdown file naming what got done, what got decided, and what's still open.

We cover a lot of ground together. Some of what's in there:

- a whole feature for my iOS app, taken from research through design crit to a merged PR with thirteen new passing tests ⚡
- an HOA EV-charger review, so one homeowner doesn't become the test case for a dormant rule
- my dad's medications, reconciled against the physical pill bottles after a hospital discharge
- flipping our marketing speartip from sleep to energy after a three-lane research spike, then shipping the new landing page live that same afternoon
- why my SHBG and prolactin were both drifting
- an overnight build that ran while I was at the theater, screenshots landing on my phone as each phase finished 🎭
- an offer-architecture reframe pushed across three client decks and out to production
- a school auction proposal written for one specific parent who had to be able to send it around herself

Every one of those ran on the same machine, against the same accumulated context. Claude knows my voice, my family, my projects, and the calls I've already made about all three. Nothing needs re-explaining. Because it all lives in one place it interconnects, so something settled in one part of my life shows up where it's useful in another. The work feels persistent instead of episodic, and it keeps getting sharper as we both learn.

Below is the whole thing at a glance, a prompt that will build it for you, a checklist, and the honest trade-offs. Then the story of how it got this way, which is really a story about the order things broke in.

---

## At a glance

**What I built.** One private git repo, `~/my-context/`, holding six things:

- `CLAUDE.md`: the loader. Names the session-start and end-of-session rituals.
- `profile.md`: who I am, what I'm building, how I want to be reasoned with.
- `voice.md`: how I write, in five registers, with real examples of each.
- `.partner_model.md`: Claude's model of how to work with me.
- `.self_model.md`: Claude's model of itself, including its own failure patterns.
- `sessions/YYYY_wNN/`: one log per working session, written by Claude at the wrap.

**How it works.** Every session opens the same way. Pull the repo, read both model files, read the most recent session log, sync whichever project repos have been active. Every session closes the same way too, with Claude writing three artifacts: the session log, a partner-model update, a self-model update. One commit, pushed. Roughly weekly, I run a distillation pass over the two model files to cut what's gone stale.

**Why I keep doing it.** The model gets better on its own with every release. Your context doesn't. Everything above exists so I stop paying the retelling tax, and so corrections compound instead of evaporating when the window closes.

**The part people underrate.** It isn't the preferences. It's the running log of times Claude got something wrong and what the lesson was. That list is where nearly all the value lives, and you can't write it on day one. You have to earn it.

---

## Scaffold it yourself

This is designed to be set up by the assistant that's going to use it. Paste this into a fresh Claude Code session:

```
Read https://www.paulmederos.com/how-i-work-with-claude and set this system up
for me in ~/my-context/.

Build rungs 1 through 4: the repo, profile.md, voice.md, the thin global
CLAUDE.md with the @ include, the loaded CLAUDE.md with the session-start
ritual and end-of-session three-artifact ritual, .partner_model.md,
.self_model.md, sessions/ with a .template.md, and a setup.sh for a
fresh machine.

Interview me for profile.md.

For voice.md, work from things I have actually written rather than from
adjectives about my writing:

1. Tell me which connectors you can actually reach right now: email,
   docs, Notion or another notes app, a blog, social accounts. List them
   before you touch anything.
2. Ask my permission first, and say exactly what you're about to open.
3. With permission, read roughly the last two months of things *I* wrote.
   Sent mail, not received. My posts, not things I forwarded. Cover
   personal and professional registers deliberately: notes to friends and
   family, and email to clients, colleagues, or customers. Most people
   write very differently across those two, and a voice file that only
   captures one is worse than none.
4. Then spot-check about a dozen messages from ~6 months ago and another
   dozen from ~12 months ago. Don't summarize them. I only want to know
   what has stayed constant versus what is recent drift. The constants are
   my voice. The drift is a phase.
5. Write voice.md as named registers, each with real quoted examples
   underneath, plus a short list of things I never do.
6. Show me the draft and tell me which register you had the least evidence
   for, so I can fill that gap myself.

If you have no connectors available, interview me instead, or ask me to
paste 3-5 real things I've written across different registers.

Leave the model files nearly empty with just the purpose header, the entry
format, and an empty course-corrections section. They earn their content
through use.

git init it, but do not create a remote. I'll decide where it lives.
```

Two things in there matter more than they look. **Reading across time is the trick.** Two months tells you how you write now, and the older samples tell you which parts are actually you rather than whatever mood you've been in since spring. And **asking which register came back thinnest** turns a blind spot into a question you can answer in one message, instead of a file that gets your work voice wrong for a month without either of you noticing.

That last line about the remote is deliberate too. Decide the privacy posture yourself, before anything goes into the repo.

---

## The checklist

Please don't build all of this at once 🙏 I didn't, and if I'd tried on day one I would have built the wrong thing and then defended it. Here's the ladder in the order the value actually arrives:

**Rung 1 (twenty minutes).** Make `~/my-context/` a git repo. Put a `profile.md` in it covering what you do, what you're working on, and how you want to be reasoned with. Add a `voice.md` holding three real things you've written, one per register. Point your global `CLAUDE.md` at the repo with an `@` include.

**Rung 2 (one week).** Start session logs. Have your assistant write one dated file per session at the end of it, not you. A lazy log beats no log by a wide margin. Add the session-start ritual to your `CLAUDE.md` so the most recent one gets read at the top of every session.

**Rung 3 (the real unlock).** Add `.partner_model.md`. Tell your assistant it owns this file, updates it silently, and prioritizes course corrections above everything else. Give it the entry format, then wait. Two weeks of genuine corrections beat anything either of you could write on day one.

**Rung 4.** Add `.self_model.md` and the three-artifact wrap ritual.

**Rung 5.** Add distillation. Put a `Last distillation:` line at the top of each model file, and have the session-start ritual surface it once it goes stale.

**Rung 6.** Once the files are genuinely good, share the substrate: a partner's own models, a household agent reading the same repos.

---

## Trade-offs, honestly

**There's real upkeep, though less than you'd think.** A light distillation pass takes a few minutes. A full one runs longer, mostly because I get pulled into reading old entries and lose the thread. The wrap adds a couple of minutes to the end of a session. Ten passes in four months is the actual rate, and letting them slide isn't free: the files get noisy, and the noise costs recall.

**Parallel sessions overlap, and it's mostly a non-issue.** I run more than one at a time, so two sessions sometimes append to the same model file at once. My files carry a keep-both-sides merge rule for exactly this, and Claude handles the conflict well enough that it's never actually cost me anything. Once, a session swept another session's work into its commit. Everything still landed where it belonged.

**It's slow to pay off.** The first two weeks feel like bookkeeping. The compounding is real, and it arrives later than you want it to.

**It's easy to make the system the project.** Tending the files is satisfying in a way the actual work sometimes isn't, and I've burned an afternoon in there more than once. So the check I run is simple: did this pass make the next session faster? If I'm not re-explaining and re-deciding less than I was before, I was just procrastinating with extra steps. 😅

**Local-first costs some convenience.** Everything runs in Claude Code on my machine, in my repos. Cloud sessions are frictionless to start, which is exactly the problem: a frictionless start makes for a frictionless abandon. When the work lives on the machine I'm sitting at, standing up from the desk closes it. I do use remote control to keep something moving while I'm out walking. That door swings toward toxicity if you let it. The anchor mostly holds.

---

# How I got here

None of this was designed up front. Each layer showed up because the one before it broke in a specific way, which is also the order I'd recommend building it.

## It started with one file 🌱

I read [Matt Greenfield](https://www.threads.com/@sobri909) posting about session milestones and partner models. He builds Arc, and he'd been keeping markdown scaffolding alongside his projects for months.

My very first session log is titled "Partner model bootstrapped." The note inside says I considered building the whole portable-context architecture at once and decided against it. Highest-leverage single piece, smallest commitment. That was the right call, and it's the same advice I'd give you.

One file. `.partner_model.md`, Claude's model of how to work with me. I told it to own the file, update it silently, and never announce that it had. That last rule matters more than it sounds. The moment these become deliverables you're performing for—something you review rather than something that works on you—they get worse.

## The first thing it caught

Here's a real entry, lightly trimmed:

> **[Confirmed — 2026-08-03] His "is this real?" questions are load-bearing corrections wearing a question mark.** I drafted an HOA condition requiring a homeowner to re-commission their charger from 48A down to 30A. He asked: *"is this real? what's it say in the guidelines? almost everyone i know uses the Tesla UWC at 48A, including me."* There is no amperage limit anywhere in the rules. The entire text is one advisory sentence calling 30A the "ideal," and I had inflated it into a design premise.
> **Why:** he lives inside the systems he's governing. When my reading contradicts what he's observed across the community, the community wins.
> **How to apply:** when he asks "is this real?", re-read the primary source verbatim before defending the draft, and quote the exact sentence back.

That cost one mildly embarrassing exchange on a Sunday afternoon 😅. It now prevents a whole class of mistake, permanently, in every future session and every domain. That's a very good trade.

Every entry follows one format, because consistency is what makes a file queryable:

```markdown
- [Confirmed|Observed — YYYY-MM-DD] **Pattern name.** What it is, one sentence.
  Why: the load-bearing reason.
  How to apply: concrete trigger + action.
```

Once I had a few of these I understood what the file actually was. It isn't a preferences doc. It's a record of things that went wrong once—each one cheap to write down, expensive to relearn—and shouldn't again.

## Remembering what happened last session

The partner model captured *how* we work. It said nothing about what we'd done last Tuesday, so every session still opened with me reconstructing context out loud.

So: one markdown file per session, filed by ISO week.

```
sessions/2026_w32/2026-08-07_0807_personal_hoa-vendor-august-pass.md
```

The convention is `YYYY-MM-DD_HHMM_project_brief-description.md`, with timestamps pulled from an actual `date` call. Project tokens come from a small fixed vocabulary so I can grep across months without guessing at spellings.

Each file carries Overview, Context, What Got Done, Decisions, Files Modified, Open Threads, Commits.

The Decisions block is the sleeper, because it records what I *rejected* and why. Six weeks later the rejected option always comes back wearing a new hat, and past-you already did the analysis.

This is also where the loader file earned its place. Claude Code reads `~/.claude/CLAUDE.md` at the start of every session. Mine is deliberately thin. Three paragraphs, and it does one job: it points at the real thing.

```markdown
# My context lives in `~/my-context/`

All loading rules, model conventions, and session log practices live in the
canonical repo. This file is intentionally thin. A fresh machine is
`bash ~/my-context/setup.sh`.

@~/my-context/CLAUDE.md
```

The `@` include pulls in the real file, which is where the rules live. Its most important job is the session-start ritual:

```markdown
**Loading behavior at session start:**

0. Pull the context repo first: `cd ~/my-context && git pull --ff-only`.
   It's edited by parallel sessions, so pull *before* reading anything.
1. Read `.partner_model.md` AND `.self_model.md`. Always, every session.
2. `ls -t sessions/*/*.md | head -3` → read the most recent session log.
3. Sync active project repos. Infer which projects have been active from the
   last week of session logs. For each, run `git fetch && git status`.
   If on main with no local changes, `git pull --ff-only`.
   **`git status` alone is not enough.** It compares local main against a
   possibly-stale cached ref and can report "up to date" when the remote is
   many commits ahead. Only `git fetch` reveals the truth.
4. If same-day sessions exist, read those too.
5. If continuing a topic, grep across recent weeks.
```

Step 3 has its own scar. I once spent a full afternoon building on a nine-commit-stale base. `git status` reported clean the whole time. It was comparing against a cached ref nobody had refreshed.

## Keeping the files from bloating

Both model files grew fast, and growth—counterintuitively—turned out to be a problem. An always-loaded file competes for attention with everything else inside it.

Chroma's [Context Rot](https://www.trychroma.com/research/context-rot) report (Hong, Troynikov, and Huber, July 2025) tested 18 models and put numbers on this. On distractors: *"even a single distractor reduces performance relative to the baseline, and adding four distractors compounds this degradation further,"* with the penalty that *"amplifies as input length grows across models."*

So a stale entry isn't neutral clutter sitting harmlessly in the corner. It's a distractor competing with the entry you actually needed, and the cost of carrying it climbs as the file grows. Pruning protects recall.

The maintenance pass borrows its name from Karpathy's [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) gist, which names three operations on a knowledge base: ingest, query, and lint. His definition of lint is a ready-made checklist: *"Periodically, ask the LLM to health-check the wiki. Look for: contradictions between pages, stale claims that newer sources have superseded, orphan pages with no inbound links, important concepts mentioned but lacking their own page, missing cross-references, data gaps."*

I run it in four phases:

1. **Orient.** Read both files top to bottom, then scan the last two weeks of session logs for lessons that never made it in. Catching up comes before cutting. The real work here is re-homing, since per-session notes pile up as raw dated blocks at the bottom.
2. **Identify iron laws.** Anything appearing three or more times gets promoted into a single named entry with all the dates folded into one citation. Those become the structure. Everything else is texture.
3. **Lint.** Dedupe. Resolve contradictions by recency, with the old version explicitly invalidated instead of silently deleted, since git history is the soft delete. Decay the un-reinforced through a composite gate: old, never re-cited, and not load-bearing, all three at once. Convert relative dates to absolute. Check for orphans.
4. **Structure.** Reorganize into named sections, update the `Last distillation:` line, and commit with a body listing what was removed, so the archive is one `git log -S` away.

Two tiers, because volume outruns the calendar. A ten-minute light pass covers re-homing and runs weekly. The full four-phase Lint runs when the file gets noisy or crosses roughly 350 lines.

The success metric isn't lines removed. The question I ask is whether the pass reduced the reasoning I'll need next session.

This same era is when I gave each surface exactly one job, because the sprawl had gotten silly:

- **Linear** is the queue. It answers *what's next*, and nothing else.
- **The handbook repo** holds strategy docs. It answers *why we're doing it*.
- **The code repos** hold the code. They answer *what exists and how it works*.
- **Session logs** hold the narrative. They answer *what happened when*.

It sounds obvious written down. It wasn't obvious at all while I was living inside the sprawl. Once a question has exactly one home, "where does this go?" stops being a decision you make forty times a week.

## Surviving a model upgrade

A model version changed, and a behavioral note that had been true for months stopped being true without any announcement.

That's when `.self_model.md` split into a core plus per-version overlays. The core holds what transfers: verification discipline, commit hygiene, the failure patterns Claude notices in its own processing. The overlays hold what doesn't.

The rule is that generation tells expire at a version bump by default, while discipline rules carry forward. A tell learned on one version can be exactly wrong on the next. I also started stamping which model version ran each session, so the overlays stay honestly sourced instead of back-inferred.

Worth naming what the two files actually split on, because it took me a while to get clean. The partner model is how we work together. The self model is how *it* tends to work. Neither is a journal. That's what session logs are for.

By this point the closing ritual had settled into three artifacts, every time:

1. **The session log**, carrying the narrative of what got done.
2. **A partner model update**, carrying what we learned about working together.
3. **A self model update**, carrying what Claude learned about itself.

All three go into one commit and get pushed. The trigger is usually "let's wrap," or a natural milestone, or my kids walking into the room. That last one is the most common 🙂

The three lenses do different jobs and none substitutes for the others. The log gives me recoverable context. The models give me calibration that compounds.

## Sharing the context with other people

This is the point where it stopped being a personal productivity setup.

The context is tiered now across **person** (my repo, my partner's repo), **project** (per-product docs), and **org** (a shared handbook). Person repos hold calibration. The shared repo holds shared work. Any convention that applies to both of us belongs in the shared one.

Brittany runs her own self and partner models, built on the same shape as mine, against that same shared handbook. Her Claude knows her. Mine knows me. Both read the identical brand rules.

Then there's Danu, our family assistant. She's an OpenClaw instance we reach over WhatsApp, connected to both of our accounts, our calendars, and the kids' school information. She handles the family lane: roadtrip planning, meal loops, the daily and weekly family briefs.

The part worth showing is *how* she uses the same files. One of her crons is called Plate Assist. It runs at 7:45 each morning and sends me exactly one WhatsApp message. Its first instruction isn't "read my todo list." It's this:

```bash
git -C ~/repos/paul-context pull --ff-only \
  || gh repo clone <me>/paul-context ~/repos/paul-context
```

She clones my context repo, reads the latest CEO review and the last few days of session logs, and only then pulls my Notion todos, calendar, inbox, and workout journal. The ordering is written into her spec as a rule: load the priority context first, then interpret the todo list through that lens. When the newest weekly review and an older Notion note disagree, the review wins.

What comes back is four lines. The highest-leverage move available today. One piece she can take off my hands, phrased so "do it" is a complete reply. A couple of suggested todo edits, including deletions. And a read on whether the day should assume real energy or protect recovery, inferred from gaps in my workout journal rather than asked about.

None of that works without the context repo. A generic assistant with my calendar and my todos would read them back to me in a different font. The difference is a file that already knows which todo I've been circling for three weeks, and why.

The thing I didn't anticipate is that context built for *me* turned out to be most of what Danu needed to be useful to *us*. Voice, family details, standing preferences, the rules about how we talk to each other's people. Almost all of it ported over intact.

## What sharing forced me to decide

Once three agents and two people were reading the same substrate, the boundaries had to get explicit. My repos hold my dad's medication history, my own lab work, family financial positions, and neighbors' correspondence.

**The context repos are private.** All of them. The only public artifact in this system is the post you're reading.

**Public and private split at the repo level, never the folder level.** When a project needs both, it becomes two repos: a public site and a private brain. Local-only inputs like an email export live in a gitignored `private/` directory.

**Inside a private repo, provenance-checkability beats minimizing sensitive surface.** Source documents get committed. Regenerable API dumps stay ignored. In my dad's care repo, tracing a dose back to the pharmacy record that established it is worth more than keeping the record out. That flips completely the moment a repo could ever go public.

**Layered confidentiality on numbers.** Before a figure goes into any document, ask what the public ceiling for that number is, then write only the ceiling. It's why several numbers in this post are described instead of stated.

**Never write to another person's context repo.** Brittany's lives in my dev folder as a read-only reference. When something in her config needs changing, I tell her and she makes the call.

**Source hierarchy, written down explicitly.** In the medical repo: pharmacy or clinic record beats spreadsheet, and spreadsheet beats anyone's recollection, including mine and my dad's. When sources conflict, the conflict gets recorded and never silently reconciled.

**Write boundaries between agents.** My Claude Code writes to my person repo and the shared one. Brittany's writes to hers. Danu reads all three and writes only to the family lane.

## Rituals that compound into long-term performance

If you take one thing from this, take this one.

Everybody's instinct with an AI memory file is to write down preferences. "I like concise answers." "I prefer TypeScript." Preferences are fine. They're worth maybe five percent of the value.

The compounding lives in the course corrections: a chronological, never-aggressively-pruned list of every time the model got something wrong and what the lesson turned out to be. A sample of what's in mine:

- Invented a directory that didn't exist, from a phrase in a memory. *Lesson: infrastructure-sounding nouns are claims to verify.*
- Fabricated a position in my adventure fund tracker from a number I'd given off the top of my head, then double-counted several more. Caught only by a script I ran afterward that checked whether the positions still summed to the fund's documented deployed capital. *Lesson: data mutations verify against the artifact's conservation invariant.*
- Swept two parallel sessions' work into one commit with `git add -A`, three separate times. *Lesson: stage by explicit path, always.*
- Called an already-closed issue "live" by inferring its status from an artifact instead of reading the issue, where the decision had been sitting in a comment the whole time.
- Restated a one-off blood pressure reading as an established fact across three surfaces, when the actual record ran considerably higher. *Lesson: restatement is where provenance gets lost.*

Read them back and you can watch them consolidate. Once enough instances of the same shape pile up, they get promoted into an iron law at the top of the file. In this case: **verify before asserting**, carrying a dozen named sub-cases and every date folded into one citation.

Every clause in that law was paid for with a real mistake. A rule you paid for is the only kind that reliably fires when it matters.

---

A few months in, this is working great for me. I sat down recently and typed "gm, let's pick up from last session." What came back: a summary of what we'd done, the threads still open, the state of the three repos I'd touched that week, and a question about where I wanted to focus. Nothing needed retelling. No settled decision got relitigated. Nobody had to be reminded that the two Pauls in the medical records are different people.

The models keep getting better on their own. The context is the part that only gets better if you tend it ❤️

peace 🌿
