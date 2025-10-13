---
layout: post
permalink: "behavior-design-playbook"
title: "Designing for Motivation Momentum"
subtitle: "A product playbook for health & wellness software that actually changes behavior"
date: 2025-10-13
categories: journal
teaser: "Awareness + compounding 1% stacks = better healthspan; Pair just-enough visibility with one believable action, aimed at the most important lever you can pull today. Then compound."

---

## A product playbook for health & wellness software that actually changes behavior

A single data point can change behavior — a lab result, a new diagnosis, a watch alert, a race registration. Most apps don’t capitalize on that window. They either hand you a dashboard and hope for the best, or they prescribe a plan that ignores your actual week.

My approach is straightforward: design for **motivation momentum**. Pair *just-enough* visibility with *one believable action*, aimed at the most important lever you can pull **today**. Then compound over a long time horizon; work _with_ time.

Below is the mental model I use when I’m building health software (what matters, what to ignore, and how to translate theory into product choices.)

---

## Foundations

I lean heavily on a handful of behavior change frameworks that I've spend time with over my career:

- **B=MAP ((BJ Fogg))[https://www.behaviormodel.org]:** Behavior = Motivation × Ability × Prompt. It’s “prompt,” not “trigger,” because prompts have flavors:  
  - **Spark** when motivation is present: ride the momentum.
  - **Facilitator** when motivation is low: make it easier.  
  - **Signal** when the action is already easy: find the right time.  
  👆 most nudging mistakes come from picking the wrong flavor.

- **Identity-based habits ((James Clear))[https://jamesclear.com/atomic-habits]:** Tiny actions are **evidence**. The goal is not to "do more"... the goal is to accumulate proof that "I'm the kind of person who... (keeps promises to future-me.)"

- **Self-determination theory ((Deci & Ryan))[https://selfdeterminationtheory.org/theory/]:** Preserve **autonomy** (my choice), **competence** (gotta be doable), and **relatedness** (i’m not alone.) If a prompt erodes any of these, motivation decays.

- **COM-B ((Decision Lab))[https://thedecisionlab.com/reference-guide/organizational-behavior/the-com-b-model-for-behavior-change]:** When something that's expected to work isn’t happening, it’s usually because the  **Opportunity** (time, tools, environment, social context) isn't available. Everyone has a different environment and set of circumstances. 

These four line up cleanly with how I build: prompts pick the moment and shape; identity sets direction; SDT guards tone; COM-B checks reality.

---

## The flexible loop

**See → Reflect → Act → See again.**

- **See:** passive sensing and one clean summary. Not twenty charts—one that changes a decision.  
- **Reflect:** given who I’m becoming, which **lever** matters next?  
- **Act:** the smallest believable step, matched to ability.  
- **See again:** show compounding and offer one next move.

Prompts are the on-ramps into this loop:

- **Spark** when a motivation spike hits (abnormal lab, watch feature, a friend challenge).  
- **Facilitator** when the day is cramped (reduce scope, swap context).  
- **Signal** at routine windows (you usually walk now; want to start?).

The product job is to pick the right prompt type at the right time with the right-sized step. Fewer prompts, smarter prompts.

---

## Aiming: Top-100 → Top-5

Health is a long tail. If you listed every lever (sleep regularity, protein, Z2 minutes, strength, alcohol, sunlight, stress practice, community, environment), you’d hit **100+** quickly. That list is useful, but it can paralyze.

I work it like this:

1. **Light intake** to build a rough Top-100 map (a few labs, 1–2 wearables, lifestyle constraints).  
2. Identify the **Top-5** levers that would move the most weight **this week**.  
3. If the user is cold, allow **easy wins** to build momentum; then re-aim toward the Top-5 as confidence and capacity grow.

Every week: a short **zoom-out** to ask “what changed?” and swap a lever if needed. Momentum first, optimization later.

---

## Product rules (the ones I actually use)

- **Automate collection. Distill meaning. Offer one action.** If the user has to interpret five charts to figure out what to do, we failed the handoff.
- **Personalize *ability*, not just content.** Everyone personalizes articles. The win is sizing the next step so it’s doable *today*.
- **Soft streaks.** Protect identity momentum. Let people pause, down-shift, or switch levers without losing the throughline of “I’m someone who shows up.”
- **Design for Opportunity shifts.** Travel mode, sick-day mode, caregiver mode. Prepack the swaps so action remains possible.
- **Consent and tone.** Defaults do the heavy lifting; “not now” is visible; language sounds like a coach, not a cop.

---

## Interface patterns I keep reusing

- **Identity evidence log.** A short feed that reads like: “✅ Kept a promise to future-me (10 min Z2).” It’s micro-journal as proof, not diary.
- **Progression ladders.** 5 → 10 → 15 → 30 → 45. Down-shifts keep the streak alive. You don’t pay a tax for an honest day.
- **Prompt palette tied to context.**  
  - Motivation spike → **Spark** + one meaningful action.  
  - Low ability → **Facilitator** that reduces scope or friction.  
  - Routine window → **Signal** with a one-tap start.
- **Weekly re-aim.** One screen: “What changed?” → “Swap this lever.” → “Here’s the smallest next step.”

---

## Case studies (why these patterns matter)

**Omada Health — digital DPP done like a system**  
Omada pairs human coaching with graduated goals and well-timed prompts, then measures outcomes in the open (weight loss, HbA1c). The interesting thing isn’t the app shell—it’s the choreography: low-friction on-ramps, ability-matched targets, actual humans when it matters. Translation: if you want clinical impact, design adherence on purpose and prove it.

**Gentler Streak — humane cadence in the wild**  
They meet you where you are, model readiness, and protect a compassionate streak. That’s SDT in product form: autonomy (you choose), competence (doable progressions), relatedness (tone that sounds like a coach). It’s a live example of **Facilitator** prompts instead of guilt.

**Apple Rings + health notifications — clarity and timing**  
Rings are visibility that turns into action. No energy-model lecture, just “close the ring.” On the clinical side, sleep-apnea and hypertension notifications are **Signals** attached to high-leverage actions: the watch notices, summarizes, and nudges you to escalate. That’s the loop at population scale: notice for you, reflect with you, suggest one step.

These three cover the spectrum: human + digital choreography (Omada), compassionate ability-matching (Gentler Streak), and large-scale detect-and-prompt (Apple).

---

## Measuring what matters

I ignore most metrics and track four:

1. **Momentum:** did something today advance the identity? (Down-shifts count.)  
2. **Adherence:** 7/30/90-day follow-through to *some* ability-matched plan.  
3. **Re-aim velocity:** time from life change → plan change (hours, not weeks).  
4. **Movement on current Top-5:** sleep regularity, protein at breakfast, Z2 minutes, strength sessions, etc.

What I avoid: vanity streaks that block adaptation; nudge spam; dashboards that explain instead of decide.

---

## A simple 0 → 1 choreography

- **Day 0:** ask for an **identity** (“consistent sleeper,” “building aerobic base,” “strong, pain-free parent”). Offer 4–6 defaults; let them write their own.  
- **Day 1:** propose one step they can do *now*. Explain the why in one sentence.  
- **Week 1:** protect momentum with **Facilitator** prompts; make every day winnable.  
- **Weeks 2–4:** escalate the progression if adherence is good; otherwise reduce friction (time/place/environment).  
- **Weekly:** re-aim one lever.  
- **Quarterly:** upgrade the identity claim based on actual behavior.

This is boring by design. Boring is sustainable.

---

## Ethics (guardrails I won’t skip)

- **Language:** “Want to try…?” beats “You should…”.  
- **Consent:** make data use legible; ask before switching modes on someone’s behalf.  
- **Inclusivity:** design for shift work, caregiving, limited equipment, limited time.  
- **Shame is a bug.** If a prompt makes someone feel worse about themselves, motivation just got taxed.

---

## When I get stuck (personal checklist)

- Shrink the step. Change time. Change place.  
- Swap to a different Top-5 lever for a week.  
- Re-state the identity with smaller words.  
- Check Opportunity (COM-B) before I blame motivation.

---

## Short truths I want to keep near the surface

- Small today, compounding tomorrow.  
- Evidence beats intention.  
- Make the right thing the easy thing.  
- Momentum first, optimization later.  
- If it feels like control, motivation dies.

---

### References & examples (for further reading)
- BJ Fogg — Behavior Model (B=MAP); Prompt types: Spark, Facilitator, Signal.  
- James Clear — Identity-based habits and “votes” for the type of person you are.  
- Deci & Ryan — Self-Determination Theory (autonomy, competence, relatedness).  
- Michie et al. — COM-B model (capability, opportunity, motivation).  
- Case studies: Omada Health (digital DPP outcomes), Gentler Streak (Apple Design Award; humane streaks), Apple Watch rings + health notifications (sleep apnea, hypertension).
