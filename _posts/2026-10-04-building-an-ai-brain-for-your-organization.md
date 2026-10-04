---
layout: context-essay
title: "Building an AI Brain for Your Organization"
permalink: "building-an-ai-brain-for-your-organization"
date: 2026-10-04
categories: [essay, wip]
coauthored: "GPT-6 via Codex (exact version unavailable)"
coauthored_note: "I supplied the direction, examples, and boundaries; GPT-6 helped research, draft, and design this evolving piece with my feedback."
teaser: "How we share context at Enchant, and how I’d set it up for a company of thirty: shared direction, clear ownership, and a loop that learns from the work."
---

Some friends recently told me they wanted to build an “AI brain” for their company. Somewhere their agents could learn what’s going on, understand the business, and help without needing the whole backstory every time.

That sounded familiar. At Enchant, we’ve been building something like this across our company handbook, project handbooks, and personal context repos.

In August, I wrote about [how I work with Claude](https://www.paulmederos.com/how-i-work-with-claude-in-august-2026): persistent context, session logs, and learning from corrections. That post touched on shared context. This is the next question: how does it work when everyone has agents?

We’re two people. A company of thirty needs more explicit ownership than we do. But I think the underlying pattern travels well: **people and agents define a strategy, act on it, review what happened, and update the shared context.**

The repository gives that loop somewhere to live.

<div class="chapter-marker" aria-hidden="true">01 / Human judgment</div>

## Leadership decides where AI belongs
{: #human-judgment}

Before choosing a tool, leadership needs to decide how AI fits the company’s strengths. What do customers come to you for? Where can agents help? Which decisions and kinds of work do you want people to own directly?

At Enchant, product taste stays with us. We use agents throughout the work, but we have final say on the experience. We’ll nitpick a detail until we’re happy with it. That judgment is part of what we’re selling.

Warm outreach is personal for me, too. I do it manually. An agent doesn’t get to draft and send a message on my behalf without me editing it. Helping me understand someone’s work or recall our last conversation is useful; owning the relationship is my job.

An editorial company might make a different choice: its writing is the differentiator, so humans write the actual content. Agents help with strategy, research, and support. You can build a substantial AI practice around that boundary.

These choices belong in the company context, with examples of what they mean. “Use AI thoughtfully” leaves everyone guessing. “Prepare a source brief for our writers; don’t draft the article” gives both people and agents something they can act on.

<div class="chapter-marker" aria-hidden="true">02 / Shared context</div>

## How our context fits together
{: #shared-context}

At Enchant, I think about three connected layers:

- **Organization:** our Enchant handbook holds shared direction and how the studio works.
- **Team and project:** Coplay Club, Kasane, and consulting work have their own context, decisions, and constraints.
- **Personal:** `paul-context` and `brittany-context` hold the context for working with each of us.

An agent working on Kasane needs the relevant studio direction, the project’s current decisions, and the personal context appropriate to the person it’s helping. It doesn’t need every document we’ve ever written.

Our setup uses several formats. Some handbook pages are HTML, readable by humans. Instructions and indexes tell agents where to look. Execution lives in tools such as Linear and the project repos. Personal context stays separate. The handbook doesn’t need another copy of every task’s status.

My friend Nicholas Tolson has written about [four layers of organizational context](https://www.linkedin.com/pulse/stop-re-explaining-your-company-ai-build-context-profile-tolson-0qlve/): company, department, project, and individual. His [workshop with Amir Feizpour](https://maven.com/p/c7e995/the-killer-app-of-ai-is-context) covers implementation and upkeep. That’s a useful way to separate what we currently group together as team and project context.

{% include context-essay-layers.html %}

For a larger company, I’d make the ownership explicit:

| Layer | What belongs here | Who owns it |
| --- | --- | --- |
| Company | Purpose, customers, strategy, priorities, AI boundaries | Leadership |
| Team | Team goals, standards, recurring workflows | Team lead |
| Project | Brief, evidence, decisions, open questions, next review | Project owner |
| Role | Responsibilities, decision authority, collaborators | The person, with their manager where relevant |
{: .context-ownership}

The shared role profile is deliberately small. Someone’s private coaching notes or personal life don’t belong in a company-wide folder. My personal context system is much broader than what a colleague’s agent needs to know about me.

Direction travels down through these layers. Evidence and proposed changes travel back up. A writer can discover something that changes the team’s priorities; the editor can bring that evidence into the company’s next strategy discussion.

<div class="chapter-marker" aria-hidden="true">03 / The learning loop</div>

## Strategy, work, reflection, repeat
{: #learning-loop}

This feels a lot like management. If you already use OKRs or quarterly planning, you have somewhere to start.

{% include context-essay-loop.html %}

**Define the strategy together.** People bring judgment, commitments, and knowledge of the business. Agents can collect evidence, compare options, expose assumptions, and challenge the plan. A person remains responsible for the decision. Record what you chose, why, what you ruled out, and what evidence would make you reconsider.

**Turn it into work.** Each project brief names the objective it supports, the question being answered, the owner, and what a useful result looks like. Agents receive that brief alongside the relevant company and team context.

**Review what happened.** Compare the result with the expectation. What surprised us? What did we have to correct? Was the strategy wrong, the evidence weak, or the execution incomplete?

**Update the right layer.** A project discovery goes into the project. A reusable research lesson might become a team standard. A proposed change in company direction goes to leadership for a decision.

Nicholas also writes about [using reflection to turn individual AI conversations into reusable systems](https://www.linkedin.com/pulse/what-ai-mindset-looks-like-turn-conversations-systems-tolson-4vdie). I like applying that habit to the whole organization’s work. A correction should have somewhere useful to go.

The cadence can follow your existing meetings: a short review when a task finishes, a weekly team check, and a strategy review when results or conditions warrant it. Agents can prepare the comparison and propose updates. The person responsible for that layer approves the change.

Be especially careful with summaries. An agent writing “we decided” doesn’t make something a decision. Label proposals, approved decisions, and superseded plans clearly.

<div class="chapter-marker" aria-hidden="true">04 / Agents at work</div>

## Give every agent a reliable starting point
{: #agents-at-work}

Across the technical guidance, a few ideas keep recurring. Anthropic’s [context engineering guide](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) emphasizes selecting useful information within a limited context budget. OpenAI’s [practical agent guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) recommends starting with a simple system and adding complexity when it’s needed.

I’d translate that into a short front door for the organization: current priorities, firm boundaries, and an index pointing to the right team and project documents. Load the material needed for the task. Fetch detailed sources when a question calls for them.

For example, a research agent’s starting instructions might be:

> Read the current company strategy and AI boundaries, then the editorial research standards and this project brief. Identify the versions you used and any conflicts. Produce a source brief with links, dates, uncertainties, and questions for a human writer. Don’t write publishable editorial copy. Propose changes to shared guidance for the editor to review.

Wire this into each tool people actually use. An `AGENTS.md` or `CLAUDE.md` file can provide an entry point for tools that support it; other tools may need project instructions or a connector. Verify that the documents were actually loaded. A file existing in a repo doesn’t make every agent aware of it.

When several agents collaborate, give each a bounded assignment. A handoff should include the question, approved context versions, sources, findings, unresolved issues, permitted actions, and where to put the result. The next agent needs something it can inspect.

Anthropic’s account of its [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) is useful here: delegation needs clear tasks and output expectations. Separate research questions can benefit from parallel work. You don’t need a swarm to maintain a handbook.

YC’s [“Multiplayer AI” request for startups](https://www.ycombinator.com/rfs) describes teams watching, redirecting, and handing off agent work. OpenAI’s [Frontier announcement](https://openai.com/index/introducing-openai-frontier/) similarly emphasizes shared context, onboarding, feedback, and permissions. Those are signals of where the tools are going; the ownership and review practices are things you can start now.

## Set permissions outside the prose

Anyone should be able to suggest a correction within their area of work. Fewer people should be able to change an approved company strategy.

For a Git-based setup, use proposed changes and named reviewers. GitHub’s [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) can route review by folder. To enforce approval, configure protected branches or rulesets with required reviews and appropriate bypass restrictions.

Writing “only leadership may edit this” in an instruction file expresses a rule. Actual permissions must enforce the restriction when it matters. A folder in a shared repository also isn’t a private room: people who can read the repo can generally read its contents. Put restricted client, financial, or personal material in separately permissioned locations. Give agents only the access their task requires, including through search indexes and handoffs.

Each important document should name its owner, approval status, last review date, and source. Keep current decisions easy to find; move superseded ones into history. If two documents disagree, surface the conflict to the owner.

For concurrent work, let agents propose separate changes and have one owner reconcile them. Before acting on a long-running task, check whether the strategy or brief changed. Version history helps explain what an agent knew when it did the work.

<div class="chapter-marker" aria-hidden="true">05 / Start small</div>

## How I’d start with thirty people
{: #start-small}

Imagine an editorial business with around thirty people. Leadership wants help with strategy, research, and support. Its writers will continue writing every article themselves.

I’d start with one editor and a few volunteers on one recurring research workflow. Two weeks is a reasonable first pilot. These are proposed steps, not a claim that we’ve already run this rollout.

**First, write a page of direction.** Leadership and an agent work through the intended audience, current business priority, how the company wins, and its AI boundaries. Any missing facts stay questions until someone answers them.

**Next, give the team a small private home for context.** I’d use a repo because it gives us history and reviewable changes. Staff should be able to read it and suggest edits through a familiar interface; they don’t all need to learn Git. An existing document system can work too, if ownership, versions, permissions, and agent access are clear.

A starting structure could be this small:

```text
START_HERE.md
org/strategy.md
org/ai-boundaries.md
teams/editorial/research-standards.md
projects/research-pilot/brief.md
projects/research-pilot/review.md
roles/editor.md
```

Keep private personal context elsewhere. Link to existing authoritative documents where possible. Copying everything into the new folder creates another maintenance job.

**Then choose one real question.** Suppose the team is deciding whether to spend more reporting time serving a particular kind of reader. The editor defines the question and the decision it will inform. An agent examines permitted audience feedback, retrieves relevant past coverage, and gathers public primary sources. It can prepare interview questions and identify gaps for a reporter to investigate.

The result is an internal research brief. Every material claim has a source and date. It distinguishes a company’s announcement from independent evidence and marks anything unverified. A human checks the load-bearing claims, decides what deserves reporting, and writes the story.

Support agents can help retrieve approved answers or group recurring reader questions. Those themes can feed the next planning discussion. Customer replies still follow the team’s chosen approval rules; finding a useful answer doesn’t automatically authorize sending it.

**Finally, run a review and change something.** Imagine the agent treated a press release’s projection as an observed result. The editor catches it. Correct the brief, then propose a research-standard update: distinguish forecasts, claims, and measured outcomes. Once approved, future research agents get that instruction. Recheck it on the next assignment.

Compare the pilot with a few similar tasks done the usual way. Look at research quality, time spent checking and correcting, and total effort including maintaining the context. Did writers arrive better prepared? Did the strategy discussion improve? Did any agent cross the agreed boundaries? Fix those failures before expanding.

The next workflow earns its place by making real work better.

<div class="chapter-marker" aria-hidden="true">06 / Build it with your agent</div>

## For founders: point your agent here
{: #begin}

If you run an organization, you can give your agent this article and say, “I want to build this.” The work below is a starting sequence you can do together. You don’t need to arrive with a finished strategy or a tidy handbook.

Your job is to make the business decisions. Your agent’s job is to ask useful questions, turn your answers into a small working system, and show you where it still needs judgment or access.

<details class="founder-guide" markdown="1">
<summary>The six-step setup <span>Founder + agent walkthrough</span></summary>

<ol class="setup-steps" markdown="1">
<li markdown="1">
**Name the purpose and the human edge.**
Have the agent interview you about your customers, current priority, and what makes your work distinctive. Pick one recurring task that could improve. Decide what the agent may do independently, what requires review, and what stays with people. The output is a one-page strategy and an AI boundaries document. Unknowns stay labeled as questions.
</li>
<li markdown="1">
**Find the context you already have.**
Ask it to inventory the sources you authorize: existing plans, handbooks, project briefs, and tools. For each, record the owner, who may read it, and whether it is current. Resolve contradictions with the relevant person. Choose one authoritative home for each topic; link to it from the new index.
</li>
<li markdown="1">
**Make the smallest useful home.**
Create a private repo or an equivalent shared document space. Start with an index, strategy, AI boundaries, one team guide, one project brief, and one role profile. Give each document an owner, status, and review date. Use the templates below if helpful. Keep sensitive personal or client material separately permissioned.
</li>
<li markdown="1">
**Connect one agent and verify its access.**
Configure that tool’s startup instructions to read the index and relevant documents. Then start a fresh session. Ask it to explain the current priority, name its sources and versions, describe what it may do, and identify missing access. A human checks the answers. Configure real permissions for reading, editing, and external actions; instruction files alone cannot enforce them.
</li>
<li markdown="1">
**Run a bounded pilot.**
Pick an owner, a review date, and a few real tasks. Write the expected output and quality criteria before running them. Record which sources the agent used, what it produced, and what a person corrected. If you delegate to another agent, pass the brief, permitted actions, source references, and unresolved questions. Check that restrictions survive the handoff.
</li>
<li markdown="1">
**Review, update, and decide whether to expand.**
Compare quality and total effort with similar work done the usual way. Have the agent propose changes to the project brief or team guidance, each with evidence and an owner. Approve useful changes and archive superseded guidance. Try the revised instructions on the next task. Expand when the workflow earns it; simplify or stop if it doesn’t.
</li>
</ol>
</details>

<div class="starter-download">
  <div>A small context starter kit<small>Versioned instructions + plain-text templates</small></div>
  <div class="starter-links"><a href="https://github.com/paulmederos/pm17/tree/main/downloads/org-context-starter">Setup guide on GitHub ↗</a><a href="/downloads/org-context-starter.zip" download>Download the kit ↓</a></div>
</div>

The kit includes an index, strategy and boundaries templates, a source inventory, an access plan, team and role context, a pilot brief, and a review. It also includes optional `AGENTS.md` and `CLAUDE.md` entry points. They point to the same index so the instructions have one home. You still need to configure and test each tool’s loading behavior.

The [full setup instructions](https://github.com/paulmederos/pm17/blob/main/downloads/org-context-starter/SETUP.md) live alongside the templates, so they can evolve with a readable history. They cover source discovery, document ownership, access checks, a fresh-session test, agent handoffs, and the pilot review.

Paste this into your agent to begin:

```text
Read https://www.paulmederos.com/building-an-ai-brain-for-your-organization#begin
and follow its linked setup guide. I want to build this for my
organization. Start by interviewing me about our direction,
our human strengths, and one workflow to pilot. Work through
one step at a time; don't invent answers or change shared
policy or access without the responsible person's approval.
```

If your agent can’t read the links, download the kit and give it `SETUP.md`. The files are templates; your organization’s actual decisions and permissions still need to be worked out together.

We’ll keep changing our own setup as we learn. Enchant’s version fits two people building products and helping clients. An editorial team’s version should fit its writers, its standards, and the judgment its readers trust.

Through [Enchant](https://enchant.co/), we help organizations build this: clarify where AI belongs, organize the context, and put it to work in a real workflow. If you’re figuring it out, we’d love to help you get the first useful loop running.
