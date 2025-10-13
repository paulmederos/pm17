---
layout: post
permalink: "behavior-design-playbook"
title: "Designing momentum: a product approach to accessible health"
subtitle: "A product playbook for health & wellness software that actually changes behavior"
date: 2025-10-13
categories: journal
teaser: "How I turn awareness into compounding health: prompts that respect autonomy, tiny steps that fit today, and a bias toward fundamentals (movement, nutrition, and sleep.)"

---

These are my notes-to-self re. a product playbook for health & wellness software that actually changes behavior.

My approach is straightforward: design for **motivation momentum**. Pair *just-enough* visibility with *one believable action*, aimed at the most important lever you can pull **today**. Then compound over a long time horizon; work *with* time.

Below is the mental model I use when I’m building health software... what matters, what to ignore, and how to translate theory into product choices.

---

## Foundations

I lean on a handful of behavior-change frameworks that I’ve spent time with over my career. I bias toward **risk-adjusted, high-leverage levers** (movement, sleep, nutrition) and I measure by **functional capacity over a long horizon**, not short-term vanity metrics.

- **B=MAP ([BJ Fogg](https://www.behaviormodel.org))** — Behavior = Motivation × Ability × Prompt; most nudging mistakes come from picking the wrong flavor of Prompt 👇
  - **Spark** when motivation is present: ride the momentum.  
  - **Facilitator** when motivation is low: make it easier.  
  - **Signal** when the action is already easy: find the right time.  
  

- **Identity-based habits ([James Clear](https://jamesclear.com/atomic-habits))** — tiny actions are **evidence**. The goal isn't to "do more"… it's to accumulate proof that *"I'm the kind of person who... (eg. keeps promises to future-me; works out in the morning; pays attention to my diet; loves good sleep and prioritizes it.)"*

- **Self-Determination Theory (SDT; [Deci & Ryan](https://selfdeterminationtheory.org/theory/))** — preserve **autonomy** (my choice), **competence** (doable), and **relatedness** (I'm not alone.) If a prompt erodes any of these, motivation decays.

- **COM-B ([Decision Lab overview](https://thedecisionlab.com/reference-guide/organizational-behavior/the-com-b-model-for-behavior-change))** — when something that "should" work isn’t happening, it’s usually a case of mismatched **Opportunity** (lacking time, tools, environment, social context.) Everyone has different context, environments, and constraints.

---

## The flexible loop

👀 See → 🧘‍♀️ Reflect → 💪 Act → 🔄 See again.

- 👀 **See:** passive sensing and one clean summary. Not twenty charts — one that changes a decision.  
- 🧘‍♀️ **Reflect:** given who I’m becoming, which **lever** matters next?  
- 💪 **Act:** the smallest believable step, matched to ability (e.g., **Zone 2 (Z2)** as low-intensity aerobic work).  
- 🔄 **Looooop:** show compounding impact, offer one next move.

Prompts (see [Foundations](#foundations)) act as on-ramps into the loop:

- **Spark** prompt when a motivation spike hits (abnormal lab, streak success, a friend challenge) 
- **Facilitator** prompt when the day is cramped (reduce scope, swap context)  
- **Signal** prompt at routine windows ("you usually walk now; want to start?")

Our job as designers (of programs + apps) is to pick the right prompt type, at the right time, with the right-sized step. Fewer, smarter prompts is the goal.

---

## Aiming: winnowing a ~top-100 down to a Top-5 highest leverage behaviors

Health is a long tail of tiny habits that people stack over _many_ years.

An athlete is easily primed to do a workout (give them the program and they’re off) because they’ve stacked hundreds of tiny bits over time. Someone without that background may not have those pieces yet... *how many reps, why, push-up vs. pull-up, what does a good push-up feel like*, etc.

If you listed every tiny habit that someone could take that would contribute to improving their health (eg. sleep regularity, protein, Z2 minutes, resistance training, no alcohol, better sunlight, stress practice, community, environmental), you’d hit **100+** quickly. Useful, but paralyzing without a lens.

My POV:

1. **Light intake** to build a rough Top-100 holistic map (lifestyle, family history, med history, a few labs, movement/sleep wearables, constraints.) 
  - Minimum amount of data here... you don't need a 100+ panel biomarker testing w/ full scans to build a successful behavior change program.
  - But... labs do act as a Prompt to spark motivation at some point. More visibility _can_ be good, but without support it _can_ be bad, eg. health anxiety ot over-optimizing on low leverage behaviors.)
2. Identify the **Top-5** levers that would move the most weight in the near term (**this week**, this month).
3. If starting "cold", allow **easy wins** (e.g., “okay, do #72 — take a B-complex vitamin; it’s easy, helpful, and starts building that updated health-oriented identity”) to build momentum; then re-aim toward the Top-5 as confidence and capacity grow.

Every week: a short **zoom-out** to ask “what changed?” and swap a lever if needed. Momentum first, optimization later.

> **Default levers I bias toward**  
> - **Aerobic base (Z2):** build a big engine before you redline.  
> - **Strength & stability:** preserve muscle and joints you’ll need decades from now.  
> - **Protein anchors:** ~30–50 g per main meal to make everything else easier.  
> - **Micronutrient density:** crucifers/greens, fatty fish, eggs, berries, beans; fill obvious gaps first.  
> - **Sleep regularity & morning light:** circadian wins compound.  
> - **Heat & cold (opportunistically):** sauna/contrast when recovery and schedule allow.

---

## Product rules (the ones I actually use)

- **Automate collection. Distill meaning. Offer one tiny action.** If the user has to interpret five charts to know what to do, we failed the handoff.  
- **Personalize *ability* and future function.** Bias toward engines, muscle, and joints you’ll still want in 20 years. Size the next step so it’s doable *today*.  
- **Soft streaks.** Protect identity momentum. Let people pause, down-shift, or switch levers without losing the throughline of “I’m someone who shows up.”  
- **Design for Opportunity shifts.** Travel mode, sick-day mode, caregiver mode — with **home fallbacks** (ruck, bands, bodyweight, walking meetings) so function survives travel.  
- **Consent and tone.** Defaults do the heavy lifting; “not now” is visible; language sounds like a compassionate coach, not a bootcamp drill sergeant.  
- **Nutrition note:** default to **food-first** micronutrients and protein anchors; add supplements only to close a clear gap.

---

## Interface patterns I keep reusing

- **Identity evidence log.** A short feed that reads like: “✅ Kept a promise to future-me (10 min Z2).” It’s micro-journal as proof, not diary.  
- **Progression ladders.** 5 → 10 → 15 → 30 → 45. Down-shifts keep the streak alive. You don’t pay a tax for an honest day.  
- **Prompt palette tied to context.**  
  - **Spark →** abnormal lab pattern? Offer a single, high-yield lever (protein at breakfast + Z2 walk).  
  - **Facilitator →** low-sun weeks? Suggest vitamin-D-aware food swaps and a 10-minute morning-light walk.  
  - **Signal →** post-training window? Nudge a protein anchor rather than generic calories.  
- **Weekly re-aim.** One screen: “What changed?” → “Swap this lever.” → “Here’s the smallest next step.”


---

## Case studies (why these patterns matter)

**Omada Health — digital DPP done like a system**  
Omada pairs human coaching with graduated goals and well-timed prompts, then measures outcomes in the open (weight loss, HbA1c). The interesting thing isn’t the app shell — it’s the choreography: low-friction on-ramps, ability-matched targets, and actual humans-in-the-loop when it matters. Translation: if you want clinical impact, design adherence on purpose and prove it.

**Gentler Streak — humane cadence in the wild**  
They meet you where you are, model readiness, and protect compassionate streaks. It’s SDT in product form: autonomy (you choose), competence (doable progressions), relatedness (tone that sounds like a compassionate coach). A live example of well-designed **Facilitator** prompts instead of guilt or shame.

**Apple Rings + health notifications — clarity and timing**  
Rings are visibility that turns into action. No energy-model lecture, just “close the ring.” On the clinical side, sleep-apnea and hypertension notifications are **Signals** attached to high-leverage actions: the watch notices, summarizes, and nudges you to escalate. That’s the loop at population scale: detect early, prompt simply, **escalate appropriately**. That’s prevention productized. Some health optimizers shit on Apple for a “slow pace” or “not deep enough” support. I think Apple already is (and will continue to be) the most influential health company of the century because of their well-crafted, population-scale behavior patterns.

These three cover the spectrum: human + digital choreography (Omada), compassionate ability-matching (Gentler Streak), and large-scale detect-and-prompt (Apple).

---

## Measuring what matters

I ignore most metrics and track four:

1. **Momentum:** did something today advance the identity? (Down-shifts count.)  
2. **Adherence:** 7/30/90-day follow-through to *some* ability-matched plan.  
3. **Re-aim velocity:** time from life change → plan change (hours, not weeks).  
4. **Movement on current Top-5:** sleep regularity, protein at breakfast, Z2 minutes, strength sessions, etc.

**Functional outputs I care about:** Z2 power/pace at the same HR; weekly ruck distance without soreness; number of strict pulls/pushes; loaded carry time; balance/stance work. Track function, not just graphs.

---

## A simple 0 → 1 choreography

- **Day 0:** ask for an **identity** (“consistent sleeper,” “building aerobic base,” “strong, pain-free parent”). Offer 4–6 defaults; let them write their own.  
- **Day 1:** propose one step they can do *now*. Explain the why in one sentence.  
- **Week 1:** protect momentum with **Facilitator** prompts; make every day winnable.  
- **Weeks 2–4:** escalate the progression if adherence is good; otherwise reduce friction (time/place/environment).  
- **Weekly:** re-aim one lever.  
- **Quarterly:** upgrade the identity claim based on actual behavior.

Design the plan you’d still be glad you followed at 80: carry groceries, get off the floor, walk fast without gasping, pick up a grandkid safely. This is boring by design. Boring is sustainable.

---

## Ethics (guardrails I won’t skip)

- **Language:** “Want to try…?” beats “You should…”.  
- **Consent:** make data use legible; ask before switching modes on someone’s behalf.  
- **Inclusivity:** design for shift work, caregiving, limited equipment, limited time.  
- **Scope:** lifestyle coaching ≠ medical care. Escalate to clinical evaluation when patterns persist or risk is high.  
- **No shaming.** If a prompt makes someone feel worse about themselves, motivation gets taxed. Don't do this.

---

## When I get stuck (personal checklist to embed at product-level)

- Shrink the step. Change time. Change place.  
- Swap to a different Top-5 lever for a week.  
- Re-state the identity with smaller words.  
- Check "Opportunity" (COM-B) before judging motivation/ability.

---

## Short truths / reminders to self

- Small today, compounding tomorrow.  
- Evidence beats intention.  
- Make the right thing the easy thing.  
- Momentum first, optimization later.  
- If it feels like control, motivation dies.

---

> **Builder’s note ([Hematica](https://hematica.app)):** 
> - The current iOS build reflects my "short truths" above: Journal for fast capture, Focus Plans for weekly re-aim, Health Documents + HealthKit ingestion to contextualize Top 100, and Coach Conversations cued off Focus Plan implementation steps for loop flexibility.
> - The **Journal** doubles as an identity-evidence log; **Coach Conversation** suggestions write back as tiny, ability-matched actions; the **Focus Plan** runs a weekly re-aim ritual that updates the next step.
> - **Health Documents** ingestion extracts biomarkers from PDFs and lab images to inform the rough Top-100; **HealthKit** surfaces sleep/HR/steps as low-friction inputs; 
> - HealthKit pulls (sleep, HR, steps) and Journal give low-noise signals; Focus Plan progression levels encode down-shifts so adherence isn’t brittle; AI Coach explains *why* the metric matters in one sentence.
> - **Focus Plan** cards (At-a-Glance, Fitness, Nutrition, At-Home, Holistic, Care Team) surface the one next step and integrate with Coach prompts and Journal entries.
