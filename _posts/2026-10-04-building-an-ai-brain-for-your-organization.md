---
layout: context-essay
title: "Building an AI Brain for Your Organization"
permalink: "building-an-ai-brain-for-your-organization"
date: 2026-10-04
categories: [essay, wip]
coauthored: "Astra (GPT-6) and Claude Opus 5.5"
coauthored_note: "I supplied the direction, examples, and boundaries; Astra helped research, draft, and design the piece, and Opus 5.5 reviewed its structure, sentences, and voice with access to my personal context."
essay_version: full
teaser: "How we share context at Enchant, how it changes as an organization grows, and how people and agents can learn from the work together."
---

Some friends at an editorial company recently told me they wanted to build an “AI brain.” They wanted somewhere their agents could learn what’s going on, understand the business, and help without needing the whole backstory every time.

That sounded familiar. At Enchant, we’ve been building something like this across our company handbook, our project handbooks, and our personal context repos.

In August, I wrote about [how I work with Claude](https://www.paulmederos.com/how-i-work-with-claude-in-august-2026): persistent context, session logs, and learning from corrections. That post touched on sharing context with Brittany. This one picks up the bigger question: how does it work when everyone has agents?

We’re two people. A mid-size organization needs more explicit ownership than we do. But I think the underlying pattern travels well: **people and agents define a strategy, act on it, review what happened, and update the shared context.**

Most of that is management. The repository gives it somewhere to live.

{% include context-essay-cover.html %}

<div class="chapter-marker" aria-hidden="true">01 / Human judgment</div>

## Leadership decides where AI belongs
{: #human-judgment}

Before anyone picks a tool, leadership needs to decide how AI fits the company’s strengths. What do customers come to you for? Where can agents help? Which decisions and kinds of work should people own directly?

At Enchant, product taste stays with us. We use agents throughout the work, but we have the final say on the experience, and we’ll nitpick a detail until we’re happy with it. That judgment is part of what we’re selling.

Warm outreach is personal for me, too. An agent can help me understand someone’s work or remember where our last conversation left off. Before anything goes out, I write or personally edit the message. Owning the relationship is my job.

For an editorial company like my friends’, the choice looks different. Its writing is what readers come for, so people write every article. Agents help with strategy, research, and support. That still leaves plenty of room for AI.

These choices belong in the company context, with examples of what they mean. “Use AI thoughtfully” leaves everyone guessing. “Prepare a source brief for our writers; don’t draft the article” gives people and agents something they can act on.

<div class="chapter-marker" aria-hidden="true">02 / Shared context</div>

## How our context fits together
{: #shared-context}

At Enchant, our context sits in three connected layers:

- **Organization:** the Enchant handbook holds our shared direction and how the studio works.
- **Team and project:** Coplay Club, Kasane, and our consulting work each have their own context, decisions, and constraints.
- **Personal:** `paul-context` and `brittany-context` hold the context for working with each of us.

An agent working on Kasane needs the relevant studio direction, the project’s current decisions, and the personal context appropriate to whoever it’s helping. It doesn’t need every document we’ve ever written.

We give each source a job. The handbook explains why we’re doing something. Linear holds what’s next. The project repos hold what exists and how it works. Personal context stays in our own repos. That way the handbook never has to keep a copy of every task’s status.

My friend Nicholas Tolson has written about [four layers of organizational context](https://www.linkedin.com/pulse/stop-re-explaining-your-company-ai-build-context-profile-tolson-0qlve/): company, department, project, and individual. His [workshop with Amir Feizpour](https://maven.com/p/c7e995/the-killer-app-of-ai-is-context) covers implementation and upkeep. His split is a useful way to separate what we currently group together as team and project context.

{% include context-essay-layers.html %}

In a mid-size organization, I’d make the ownership explicit:

| Layer | What belongs here | Who owns it |
| --- | --- | --- |
| Company | Purpose, customers, strategy, priorities, AI boundaries | Leadership |
| Team | Team goals, standards, recurring workflows | Team lead |
| Project | Brief, evidence, decisions, open questions, next review | Project owner |
| Role | Responsibilities, decision authority, collaborators | The person, with their manager where relevant |
{: .context-ownership}

The shared role profile is deliberately small. Private coaching notes and personal life don’t belong in a company folder. My own context system is much broader than what a colleague’s agent needs to know about me.

Evidence travels back up, too. A writer might discover something that changes the team’s priorities, and the editor can bring that into the company’s next strategy discussion.

<div class="chapter-marker" aria-hidden="true">03 / Growing organizations</div>

## The context problem grows with you
{: #growing-orgs}

Organizations have always struggled to keep people working from the same understanding as they grow. Agents inherit that problem. They can also multiply it: a stale decision can now inform several streams of work before someone notices.

I think about the familiar startup transitions roughly like this. These are illustrative stages, not headcount laws:

- **At one person, the context mostly lives in your head.** The first job is remembering your own decisions well enough that tomorrow's session doesn't start over.
- **At two, you need a shared version of the story.** Which decisions belong to the company, and which are one person's preferences? That's the distinction we're working with at Enchant.
- **Around ten, people no longer hear every conversation.** You need project owners and current briefs so the founder doesn't become the person who explains everything to everyone.
- **Around fifty, teams develop their own context.** A mid-size organization needs a way to connect those local decisions to company direction, resolve contradictions, and make changes visible across teams.

Molly Graham describes a similar transition in her [account of scaling startups](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups/): around 30–50 people, communication that used to happen naturally starts needing deliberate work. That's an operator's experience, not a universal threshold. The broader idea is older still: Jay Galbraith's [information-processing view of organization design](https://pubsonline.informs.org/doi/10.1287/inte.4.3.28) connects organizational structure to uncertainty and the limits of what people can process.

That makes the “AI brain” idea feel a little less exotic, hah. We're organizing what the organization knows, who decides, and how everybody finds out when something changes.

Agents may also change how much a small team can take on. In the [P&G field experiment on AI and teamwork](https://www.library.hbs.edu/working-knowledge/when-ai-joins-the-team-better-ideas-surface), individuals using AI produced ideas comparable in quality to two-person teams without it, and crossed technical/commercial boundaries more readily. Teams with AI were especially strong at producing top-tier ideas. This was a product-innovation task, not evidence that a whole company can halve its staff.

There's a useful counterweight, too. A [six-month randomized study of knowledge workers](https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/) found that AI changed how individuals handled email and documents, without significantly changing time spent in meetings.

My bet is that we'll see smaller organizations with more capability per person, and different combinations of specialists and generalists. That's a design possibility to test. A team of ten running many agents may already need the explicit context and decision ownership we'd associate with a larger company. Headcount alone stops telling us how much coordination the work needs.

<div class="chapter-marker" aria-hidden="true">04 / The learning loop</div>

## Strategy, work, reflection, repeat
{: #learning-loop}

If you already use OKRs or quarterly planning, you have most of this loop. What changes is that agents take part in every step, and the lessons get written down where the next agent will read them.

In August, I described a small version of this: ending a session with a log and a note on what went wrong, so the lesson is available next time. A company needs the same habit, with someone who owns each layer.

{% include context-essay-loop.html %}

**Define the strategy together.** People bring judgment, commitments, and knowledge of the business. Agents can gather evidence, compare options, expose assumptions, and challenge the plan. A person still makes the call. Write down what you chose, why, what you ruled out, and what evidence would make you reconsider.

**Turn it into work.** Each project brief names the objective it supports, the question it answers, the owner, and what a useful result looks like. Agents get that brief alongside the relevant company and team context.

**Review what happened.** Compare the result with what you expected. What surprised you? What did someone have to correct? Was the strategy wrong, the evidence weak, or the execution incomplete?

**Update the right layer.** A project discovery goes into the project. A reusable research lesson might become a team standard. A proposed change in company direction goes to leadership for a decision. At Enchant, a lesson that applies to both of us belongs in the shared handbook, where Brittany’s agent can read it too.

Nicholas also writes about [using reflection to turn individual AI conversations into reusable systems](https://www.linkedin.com/pulse/what-ai-mindset-looks-like-turn-conversations-systems-tolson-4vdie). I like applying that habit to the whole organization’s work. A correction should have somewhere useful to go.

The cadence can follow the meetings you already have: a short review when a task finishes, a weekly team check, and a strategy review when results or conditions call for one. Agents can prepare the comparison and propose updates. The person who owns that layer approves the change.

Watch the summaries, too. An agent writing “we decided” doesn’t make something a decision. Label proposals, approved decisions, and superseded plans so nobody has to guess.

<div class="chapter-marker" aria-hidden="true">05 / Agents at work</div>

## Give every agent a reliable starting point
{: #agents-at-work}

Brittany’s agents and mine already share a starting point. Each knows its own person, and both read the same handbook. For a larger company, I’d make that a short front door: current priorities, firm boundaries, and an index pointing to the right team and project documents.

The technical guidance points the same way. Anthropic’s [context engineering guide](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) emphasizes selecting useful information within a limited context budget. OpenAI’s [practical agent guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) recommends starting with a simple system and adding complexity when it’s needed. Load what the task needs, and fetch detailed sources when a question calls for them.

A research agent’s starting instructions might read:

> Read the current company strategy and AI boundaries, then the editorial research standards and this project brief. Identify the versions you used and any conflicts. Produce a source brief with links, dates, uncertainties, and questions for a human writer. Don’t write publishable editorial copy. Propose changes to shared guidance for the editor to review.

Wire that front door into each tool people actually use. An `AGENTS.md` or `CLAUDE.md` file works for tools that support it; others need project instructions or a connector. Then check that the documents actually loaded. A file sitting in a repo doesn’t make every agent aware of it.

When several agents work together, give each a bounded assignment and a handoff the next one can inspect: the question, sources, findings, open issues, and what it’s allowed to do. Anthropic’s account of its [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) is useful here: delegation needs clear tasks and output expectations, and separate research questions can benefit from parallel work. You don’t need a swarm to maintain a handbook.

YC’s [“Multiplayer AI” request for startups](https://www.ycombinator.com/rfs) describes teams watching, redirecting, and handing off agent work. OpenAI’s [Frontier announcement](https://openai.com/index/introducing-openai-frontier/) similarly emphasizes shared context, onboarding, feedback, and permissions. Those are signals of where the tools are going. Ownership and review are things you can start now.

### Enforce permissions in the tools

Anyone should be able to suggest a correction in their area of work. Fewer people should be able to change an approved company strategy. Writing “only leadership may edit this” in an instruction file states a rule, but it doesn’t enforce one. In a Git setup, GitHub’s [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) route review by folder, and protected branches or rulesets with required reviews make the approval stick.

A folder in a shared repository isn’t a private room, either. People who can read the repo can generally read its contents. Keep restricted client, financial, or personal material in separately permissioned locations, and give agents only the access their task requires, including through search indexes and handoffs. The [setup guide](https://github.com/paulmederos/pm17/blob/main/downloads/org-context-starter/SETUP.md) covers the rest: document owners, conflicts, and concurrent changes.

<div class="chapter-marker" aria-hidden="true">06 / Start small</div>

## How I’d start in a mid-size organization
{: #start-small}

Back to the editorial company. Leadership wants help with strategy, research, and support, and its writers will keep writing every article themselves.

I built my own context one file at a time, and I’d start at a company the same way: one editor and a few volunteers on one recurring research workflow, for about two weeks. We haven’t run this rollout. It’s how I’d begin.

**First, write a page of direction.** Leadership and an agent work through the intended audience, the current business priority, how the company wins, and its AI boundaries. Missing facts stay as questions until someone answers them.

**Next, give the team a small private home for context.** I’d use a repo because it gives us history and reviewable changes. Staff should be able to read it and suggest edits through a familiar interface; they don’t all need to learn Git. An existing document system can work too, if ownership, versions, permissions, and agent access are clear.

A starting structure can be this small:

```text
START_HERE.md
org/strategy.md
org/ai-boundaries.md
teams/editorial/research-standards.md
projects/research-pilot/brief.md
projects/research-pilot/review.md
roles/editor.md
```

Link to existing authoritative documents wherever you can. Copying everything into the new folder creates another maintenance job.

**Then choose one real question.** Suppose the team is deciding whether to spend more reporting time serving a particular kind of reader. The editor defines the question and the decision it will inform. An agent reviews permitted audience feedback, retrieves relevant past coverage, and gathers public primary sources. It can prepare interview questions and flag gaps for a reporter to investigate.

The result is an internal research brief. Every material claim has a source and date. Announcements are kept apart from independent evidence, and anything unverified is marked. A person checks the load-bearing claims, decides what deserves reporting, and writes the story.

Support agents can retrieve approved answers or group recurring reader questions, and those themes can feed the next planning discussion. Customer replies still follow the team’s approval rules. It’s the same rule I use for outreach: finding a useful answer doesn’t authorize sending it.

**Finally, run a review and change something.** Imagine the agent treated a press release’s projection as an observed result. The editor catches it and corrects the brief, then proposes a research-standard update: distinguish forecasts, claims, and measured outcomes. Once it’s approved, future research agents get that instruction. Check on the next assignment that it helped.

Compare the pilot with a few similar tasks done the usual way. Look at research quality, time spent checking and correcting, and total effort, including maintaining the context. Did writers arrive better prepared? Did the strategy discussion improve? Did any agent cross the agreed boundaries? Fix those failures before expanding.

The warning from my August post applies here too: it’s easy to make the system the project. Add the next workflow once this one is making real work better.

<div class="chapter-marker" aria-hidden="true">07 / Build it with your agent</div>

## For founders: point your agent here
{: #begin}

If you run an organization, you can give your agent this article and say, “I want to build this.” You don’t need to arrive with a finished strategy or a tidy handbook.

Your job is to make the business decisions. Your agent’s job is to ask useful questions, turn your answers into a small working system, and show you where it still needs your judgment or access.

<details class="founder-guide" markdown="1">
<summary>The six-step setup <span>Founder + agent walkthrough</span></summary>

<ol class="setup-steps" markdown="1">
<li markdown="1">
**Name the purpose and the human edge.**
Have the agent interview you about your customers, current priority, and what makes your work distinctive. Pick one recurring task that could improve. Decide what the agent may do on its own, what needs review, and what stays with people. The output is a one-page strategy and an AI boundaries document, with unknowns labeled as questions.
</li>
<li markdown="1">
**Find the context you already have.**
Ask it to inventory the sources you authorize: existing plans, handbooks, project briefs, and tools. For each, record the owner, who may read it, and whether it’s current. Resolve contradictions with the relevant person. Choose one authoritative home for each topic and link to it from the new index.
</li>
<li markdown="1">
**Make the smallest useful home.**
Create a private repo or an equivalent shared document space. Start with an index, strategy, AI boundaries, one team guide, one project brief, and one role profile. Give each document an owner, status, and review date; the starter kit below has templates. Keep sensitive personal or client material separately permissioned.
</li>
<li markdown="1">
**Connect one agent and verify its access.**
Point that tool’s startup instructions at the index and relevant documents. Then start a fresh session and ask it to explain the current priority, name its sources and versions, describe what it may do, and identify missing access. A person checks the answers. Configure real permissions for reading, editing, and external actions; instruction files can’t enforce them on their own.
</li>
<li markdown="1">
**Run a bounded pilot.**
Pick an owner, a review date, and a few real tasks. Write the expected output and quality criteria before you start. Record which sources the agent used, what it produced, and what a person corrected. If one agent hands work to another, pass along the brief, permitted actions, source references, and unresolved questions, and check that restrictions survive the handoff.
</li>
<li markdown="1">
**Review, update, and decide whether to expand.**
Compare quality and total effort with similar work done the usual way. Have the agent propose changes to the project brief or team guidance, each with evidence and an owner. Approve the useful ones and archive superseded guidance. Try the revised instructions on the next task. Expand when the workflow earns it; simplify or stop if it doesn’t.
</li>
</ol>
</details>

<div class="starter-download">
  <div>A small context starter kit<small>Versioned instructions + plain-text templates</small></div>
  <div class="starter-links"><a href="https://github.com/paulmederos/pm17/tree/main/downloads/org-context-starter">Setup guide on GitHub ↗</a><a href="/downloads/org-context-starter.zip" download>Download the kit ↓</a></div>
</div>

The kit includes an index, strategy and boundaries templates, a source inventory, an access plan, team and role context, a pilot brief, and a review. Optional `AGENTS.md` and `CLAUDE.md` entry points both point to the same index, so the instructions have one home. The [full setup instructions](https://github.com/paulmederos/pm17/blob/main/downloads/org-context-starter/SETUP.md) live alongside the templates, so they can evolve with a readable history. You’ll still need to configure and test how each tool loads them.

Paste this into your agent to begin:

```text
Read https://www.paulmederos.com/building-an-ai-brain-for-your-organization#begin
and follow its linked setup guide. I want to build this for my
organization. Start by interviewing me about our direction,
our human strengths, and one workflow to pilot. Work through
one step at a time; don't invent answers or change shared
policy or access without the responsible person's approval.
```

If your agent can’t read the links, download the kit and give it `SETUP.md`. The files are templates. Your organization’s actual decisions and permissions still get worked out together.

We’ll keep changing our own setup as we learn. Enchant’s version fits two people building products and helping clients. An editorial team’s version should fit its writers, its standards, and the judgment its readers trust.

Through [Enchant](https://enchant.co/), we help organizations build this: clarify where AI belongs, organize the context, and put it to work in a real workflow. If you’re figuring it out, we’d love to help you get the first useful loop running.
