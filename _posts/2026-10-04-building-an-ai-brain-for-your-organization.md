---
layout: context-essay
title: "Building an AI Brain for Your Organization"
permalink: "building-an-ai-brain-for-your-organization"
date: 2026-10-04
categories: [essay, wip]
coauthored: "Astra (GPT-6) and Claude Opus 5.5"
coauthored_note: "I set the direction, examples, and boundaries, and we’ve revised the piece together over several rounds. Astra researched, drafted, and designed it; Opus 5.5 has worked with me on the concept and the writing, with access to my personal context."
essay_version: full
teaser: "How we share context at Enchant, how it changes as an organization grows, and how people and agents can learn from the work together."
---

I’ve been talking with more and more companies interested in setting up their “AI brain.” Almost everyone I talk with who’s exploring how to use more AI at work is trying to figure this out, whether it’s for themselves or a whole team. How do we help agents understand our work and what’s going on around it?

That sounds familiar. At Enchant, we’ve been building something like this across our company handbook, our project handbooks, and our personal context repos.

In August, I wrote about [how I work with Claude](https://www.paulmederos.com/how-i-work-with-claude-in-august-2026): persistent context, session logs, and learning from corrections. That post touched on sharing context with Brittany. This one picks up the bigger question: how does it work when everyone has agents?

It’s tempting to picture one central brain that leadership fills and everyone’s agent reads. Some context does belong in the middle. Most of what an organization knows, though, lives with the people doing the work, and the people there can explain its context. The setup I’m excited about looks more like a healthy organization: leadership keeps the direction and guardrails clear, people experiment and decide within their own work, and what they learn can travel to a neighboring team or change where the company is going.

We’re two people, so a mid-size organization will need more explicit ownership than we do. But I think the basic idea holds up: **AI can help more people make informed calls in their own work, while helping the org learn from what they find.**

{% include context-essay-cover.html %}

<div class="chapter-marker" aria-hidden="true">01 / Human judgment</div>

## Shared direction, room to act
{: #human-judgment}

Leadership is responsible for keeping the direction and guardrails clear. What are we trying to accomplish? What do customers trust us for? Which commitments should everyone work within? People need those answers to make good decisions without asking permission for every useful experiment.

Within that space, everyone should be able to explore how AI helps their work. A researcher can improve a research workflow. A support person can find a better way to understand recurring questions. They know things the founder doesn’t, and the company needs ways to learn from them.

Guardrails answer two different questions. One is where a decision belongs: with the company, a team, or the person doing the work. The other is what stays with people even when an agent could do it. Each organization draws that second line around whatever its customers are actually trusting it for.

At Enchant, product taste stays with us. Agents help throughout the work, but Brittany and I have the final say on the experience. We’ll nitpick until we’re happy with it. That judgment is part of what we’re selling.

Warm outreach is personal for me, too. An agent can help me prepare, but before anything goes out, I write or personally edit the message. Owning the relationship is my job.

Some friends at a content company draw the line around writing. They create and curate work for an audience, and their writing is what readers come for. People write every article. Agents help with strategy, research, and support. An editor can try a better research process within that boundary without asking leadership to invent it.

These choices belong in the context at the right scope. The editorial promise applies across the company. My outreach preferences apply to my relationships. A useful guardrail makes the freedom around it clear: “Prepare and improve source briefs; people write the articles.”

Leadership also has to keep the direction revisable. The people closest to the work are often the first to see that a company assumption is wrong, and their evidence needs a real route to change the plan. Most of this essay is about building that route.

<div class="chapter-marker" aria-hidden="true">02 / Shared context</div>

## How our context fits together
{: #shared-context}

At Enchant, our context sits in three connected layers:

- **Organization:** the Enchant handbook holds our shared direction and how the studio works.
- **Team and project:** Coplay Club, Kasane, and our consulting work each have their own context, decisions, and constraints.
- **Personal:** `paul-context` and `brittany-context` hold the context for working with each of us.

An agent working on Kasane needs the relevant studio direction, the project’s current decisions, and the personal context appropriate to whoever it’s helping. It doesn’t need every doc we’ve ever written.

We give each source a job. The handbook explains why we’re doing something. Linear holds what’s next. The project repos hold what exists and how it works. Personal context stays in our own repos. That way the handbook never has to keep a copy of every task’s status.

My friend Nicholas Tolson has written about [four layers of organizational context](https://www.linkedin.com/pulse/stop-re-explaining-your-company-ai-build-context-profile-tolson-0qlve/): company, department, project, and individual. His [workshop with Amir Feizpour](https://maven.com/p/c7e995/the-killer-app-of-ai-is-context) covers getting it set up and keeping it useful. His split is a useful way to separate what we currently group together as team and project context.

{% include context-essay-layers.html %}

In a mid-size organization, I’d make the ownership explicit:

| Scope | What belongs here | Who maintains it |
| --- | --- | --- |
| Company | Purpose, customers, strategy, priorities, AI boundaries | Leadership |
| Team | Goals, standards, recurring workflows, local decision rights | Named team steward |
| Project | Brief, evidence, decisions, open questions, next review | Project owner |
| Role | Responsibilities, decision authority, collaborators | The person and relevant collaborators |
{: .context-ownership}

The shared role profile is deliberately small. Private coaching notes and personal life don’t belong in a company folder. My own context system is much broader than what a colleague’s agent needs to know about me.

These are scopes of context, not a chain every idea has to climb. A maintainer keeps a document accurate and gives people someone to ask. A decision owner is accountable for a commitment, like a team standard or a company priority. Sometimes that’s the same person. Neither role comes with a veto over what someone else records about their own work.

### Keep knowledge near its source, and make it findable

Most of what an organization learns should stay where it happened, with the people who can explain it. A shared index and the right access let another team’s agent find it, follow the evidence, and see where it applies. Copying everything into one central place mostly creates a second version to keep in sync.

That lets people beyond leadership connect the dots, as long as they have the right access. A support lead can ask what other teams have learned about a reader group. An editor can check whether anyone has already tried a research method. Leadership’s job includes connecting signals across the company, because it’s accountable for shared direction and usually has access to more of the work. That’s a responsibility, not a monopoly. People see different slices, so any summary should say what it drew from and what it couldn’t see.

I’d separate three actions: **sharing a finding, trying it elsewhere, and changing company policy.** Anyone can record what they observed, with evidence, without declaring it true everywhere. Another team can test it within its own authority. A company-wide commitment goes to the responsible decision owner.

Two teams can also reach different conclusions and both be right for their own work. A disagreement needs resolving when it collides with a shared commitment, or when one team’s practice affects another’s. Until then, it’s useful information.

### What the bees get right

There’s a useful natural analogy in [Thomas Seeley’s research on honeybee nest-site selection](https://news.cornell.edu/stories/2006/04/honeybee-decision-making-ability-rivals-any-department-committee). Scouts explore different locations and communicate promising finds through dance. Other scouts go inspect those sites for themselves, and support builds through those visits until the swarm chooses a home.

I’m interested in the combo: independent exploration, communication, and checking by others before a discovery shapes the whole.

I wouldn’t turn that into an org chart. Deborah Gordon [warns against stretching analogies between biological systems](https://web.stanford.edu/~dmgordon/old2/Gordon2007_Nature_Essay.pdf); understanding the actual interactions matters. For us, the question is concrete: how does something one person learns become available for someone else to question, test, or use?

<div class="chapter-marker" aria-hidden="true">03 / Growing organizations</div>

## The context problem grows with you
{: #growing-orgs}

Organizations have always struggled to keep people working from the same understanding as they grow. Agents inherit that problem. They can also multiply it: a stale decision can now inform several streams of work before someone notices.

I think about the familiar startup transitions roughly like this. These are illustrative stages, not headcount laws:

- **At one person, the context mostly lives in your head.** The first job is remembering your own decisions well enough that tomorrow’s session doesn’t start over.
- **At two, you need a shared version of the story.** Which decisions belong to the company, and which are one person’s preferences? That’s the distinction we’re working with at Enchant.
- **Around ten, people no longer hear every conversation.** Current briefs and clear decision rights let people act, while shared discovery helps them learn from work they weren’t part of.
- **Around fifty, teams develop their own context.** A mid-size organization needs ways to learn across teams, resolve conflicting commitments, and let local evidence change shared direction without routing every lesson through leadership.

Molly Graham describes a similar transition in her [account of scaling startups](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups/): around 30–50 people, communication that used to happen naturally starts needing deliberate work. That’s an operator’s experience, not a universal threshold.

The broader idea is older still. Jay Galbraith’s [information-processing view of organization design](https://pubsonline.informs.org/doi/10.1287/inte.4.3.28) connects organizational structure to uncertainty and the limits of what people can process. Agents could make it easier for people to solve problems directly across teams, as long as the knowledge is findable and people have the authority to act. That’s something I want to try.

That makes the “AI brain” idea feel a little less exotic, hah. We’re organizing what the organization knows, who decides, and how everybody finds out when something changes.

Agents may also change how much a small team can take on. In the [P&G field experiment on AI and teamwork](https://www.library.hbs.edu/working-knowledge/when-ai-joins-the-team-better-ideas-surface), individuals using AI produced ideas comparable in quality to two-person teams without it, and crossed technical/commercial boundaries more readily. Teams with AI were especially strong at producing top-tier ideas. This was a product-innovation task, not evidence that a whole company can halve its staff.

There’s a useful counterweight, too. A [six-month randomized study of knowledge workers](https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/) found that AI changed how individuals handled email and documents, without significantly changing time spent in meetings.

My bet is that we’ll see smaller organizations with more capability per person, and different mixes of specialists and generalists. We’ll have to try it and see. A team of ten running many agents may already need the explicit context and decision ownership we’d associate with a larger company. Headcount alone stops telling us how much coordination the work needs.

<div class="chapter-marker" aria-hidden="true">04 / The learning loop</div>

## Strategy, work, reflection, repeat
{: #learning-loop}

If you already use OKRs or quarterly planning, you have most of this loop. What changes is that agents take part in every step, and the lessons get written down where the next agent will read them.

In August, I described a small version of this: ending a session with a log and a note on what went wrong, so the lesson is available next time. Now imagine connected loops at the personal, project, team, and company level. A local review can improve tomorrow’s task and uncover a question for the next strategy discussion.

{% include context-essay-loop.html %}

**Define the strategy together.** People bring judgment, commitments, and knowledge of the business. Agents can gather evidence, compare options, expose assumptions, and challenge the plan. A person still makes the call. Write down what you chose, why, what you ruled out, and what evidence would make you reconsider.

**Turn it into work.** Each project brief names the objective it supports, the question it answers, the owner, and what a useful result looks like. Agents get that brief alongside the relevant company and team context.

**Review what happened.** Compare the result with what you expected. What surprised you? What did someone have to correct? Was the strategy wrong, the evidence weak, or the execution incomplete?

**Share what changed.** Keep the finding with its evidence in the project, where relevant colleagues can discover it. Another team may try it before it becomes a shared standard. At Enchant, a lesson useful to both of us can become shared guidance that Brittany’s agent reads too.

Nicholas also writes about [using reflection to turn individual AI conversations into reusable systems](https://www.linkedin.com/pulse/what-ai-mindset-looks-like-turn-conversations-systems-tolson-4vdie). I like applying that habit to the whole organization’s work. A correction should have somewhere useful to go.

### How local evidence changes company direction

When a finding challenges company direction, the person who found it shouldn’t have to wait for someone above them to notice. They can bring the evidence straight to the decision owner, with their agent’s help assembling it. The owner is accountable for an answer: change course, run a test, or hold steady, with the reasoning written where people can see it. “Not yet, and here’s what would change my mind” is a perfectly good decision. Silence isn’t.

Leadership’s agents can help compare findings across the organization: what keeps coming up, where do teams disagree, and which assumptions look weaker now? That’s part of leadership’s job, and teams can run the same comparisons within their access. Nobody needs a monopoly on connecting the dots.

A summary should preserve links to the sources and disagreements worth investigating. Five agents repeating the same source are still drawing on one source. An agent writing “we decided” doesn’t make something a decision.

### Learning from small failures

Nassim Taleb uses [*antifragile*](https://www.fooledbyrandomness.com/Antifragile.htm) for systems that benefit from disorder and stressors. That’s what I’m after, and decentralization doesn’t make it happen on its own. A decentralized organization can just as easily fail in more places at once.

Three conditions seem to matter. Failures need to stay small, so an experiment can go wrong without taking a customer relationship or a company commitment with it. Perspectives need to stay independent, so a pattern seen by three teams reflects three real looks at the evidence. And corrections need testing, so we know whether the next attempt actually improved.

Agents add a specific risk. If every agent reads the same summary, one mistake in it can show up in a dozen streams of work at once, and everyone’s output starts agreeing for the wrong reason. That’s another reason to keep the shared layer small and well-sourced, keep local knowledge with its evidence, and leave room for people to disagree.

<div class="chapter-marker" aria-hidden="true">05 / Agents at work</div>

## Give every agent a reliable starting point
{: #agents-at-work}

Brittany’s agents and mine already share a starting point. Each knows its own person, and both read the same handbook. For a larger company, I’d make that a short front door: current priorities, firm boundaries, and an index pointing to the right team and project docs.

The technical guidance points the same way. Anthropic’s [context engineering guide](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) emphasizes selecting useful information within a limited context budget. OpenAI’s [practical agent guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) recommends starting with a simple system and adding complexity when it’s needed. Load what the task needs, and fetch detailed sources when a question calls for them.

A research agent’s starting instructions might read:

> Read the current strategy, AI boundaries, research standards, and project brief. Find relevant findings from other teams that you’re permitted to access. Identify sources, versions, and disagreements. Prepare a source brief for a human writer; don’t write editorial copy. Record what we learn where colleagues can find it, and mark whether it’s a local finding, a tested practice, or approved policy.

Wire that front door into each tool people actually use. An `AGENTS.md` or `CLAUDE.md` file works for tools that support it; others need project instructions or a connector. Then check that the docs actually loaded. A file sitting in a repo doesn’t make every agent aware of it.

When several agents work together, give each a bounded assignment and a handoff the next one can inspect: the question, sources, findings, open issues, and what it’s allowed to do. Anthropic’s account of its [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) is useful here: delegation needs clear tasks and output expectations, and separate research questions can benefit from parallel work. You don’t need a swarm to maintain a handbook.

YC’s [“Multiplayer AI” request for startups](https://www.ycombinator.com/rfs) and OpenAI’s [Frontier announcement](https://openai.com/index/introducing-openai-frontier/) both point toward teams sharing context, redirecting agents, and handing off their work. Those are signals of where the tools are going. Ownership and review are things you can start now.

### Enforce permissions in the tools

Configure permissions to match the decision rights you agreed on. Recording a finding should be easy for anyone within their scope; a review gate there just rebuilds the bottleneck. Changing company commitments has a different approval path. Writing “only leadership may edit this” in an instruction file states a rule, but it doesn’t enforce one. In a Git setup, GitHub’s [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) route review by folder, and protected branches or rulesets with required reviews make the approval stick.

A folder in a shared repo isn’t a private room, either. People who can read the repo can generally read its contents. Keep restricted client, financial, or personal material in separately permissioned locations, and give agents only the access their task requires, including through search indexes and handoffs. The [setup guide](https://github.com/paulmederos/pm17/blob/main/downloads/org-context-starter/SETUP.md) covers the rest: document owners, conflicts, and concurrent changes.

<div class="chapter-marker" aria-hidden="true">06 / Start small</div>

## How I’d start in a mid-size organization
{: #start-small}

Back to the content company. People want help with strategy, research, and support, and its writers will keep writing every article themselves.

I built my own context one file at a time, and I’d start at a company the same way: one editor and a few volunteers on one recurring research workflow, for about two weeks. We haven’t run this rollout. It’s how I’d begin.

**First, agree on direction and room to act.** Leadership and the pilot participants work through the audience, current priority, and AI boundaries with an agent. Name what people may change locally, what needs coordination, and who decides on company commitments. Missing facts stay as questions.

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

Link to the docs that are already the source of truth wherever you can. Copying everything into the new folder creates another maintenance job.

**Then follow a question across teams.** A support person notices repeated questions from a reader group the company hasn’t focused on. Their agent helps record the pattern with links to permitted evidence, what’s uncertain, and who can discuss it. Personal reader information stays protected.

An editor’s agent finds that observation and connects it to gaps in past coverage. Within the team’s agreed scope, the editor starts a research pilot. An agent gathers primary sources and prepares an internal brief; a person checks the important claims and writes the story. Support and editorial learn from each other without waiting for a new company strategy.

**Review locally, then share sideways.** Perhaps the editor catches a forecast presented as an observed result. They correct the brief, update the team’s research guidance, and check whether the next assignment improves. Another desk finds that lesson and tries it on its own assignments.

**Bring the bigger question to its owner.** By the end of the pilot, the support person and the editor think this reader group may deserve a place in the company’s priorities. They bring their evidence to the leaders who own that decision. Leadership’s agent adds what other projects have seen and prepares a comparison with sources, uncertainties, and competing explanations. Leadership decides with the relevant teams, and the decision goes back into shared context with the reasoning, whichever way it goes.

That’s the loop I want: people improve the work near them, learn from one another, and have a real route to change the direction of the company.

Compare the pilot with a few similar tasks done the usual way. Look at research quality, time spent checking and correcting, and total effort, including maintaining the context. Did writers arrive better prepared? Could another team find and use a lesson? Did local evidence reach a wider decision, and did it get an answer? Did any agent cross the agreed boundaries? Fix those failures before expanding.

The warning from my August post applies here too: it’s easy to make the system the project. Add the next workflow once this one is making real work better.

<div class="chapter-marker" aria-hidden="true">07 / Build it with your agent</div>

## For founders and teams: point your agent here
{: #begin}

If you run an organization, you can give your agent this article and say, “I want to build this.” You don’t need to arrive with a finished strategy or a tidy handbook.

Bring in the people doing the pilot work. Together, agree on the direction, delegated decisions, and how findings will circulate. Your agent can ask useful questions and assemble a first version. It should also make clear whose judgment or access is still missing.

If you don’t run the company, you can still start inside your own work. Build your own context, improve one workflow, and record what you learn somewhere a colleague can find it. That’s the smallest version of the whole idea.

<details class="founder-guide" markdown="1">
<summary>The six-step setup <span>Founder, team + agent walkthrough</span></summary>

<ol class="setup-steps" markdown="1">
<li markdown="1">
**Name the purpose and the human edge.**
Have the agent interview you and the people who’ll run the pilot about your customers, current priority, and what makes your work distinctive. Pick one recurring task that could improve. Agree on what people decide locally, what needs coordination, what stays a company decision, and what agents may do without human review. Record the direction, boundaries, and open questions.
</li>
<li markdown="1">
**Find the context you already have.**
Ask it to inventory the sources you authorize: plans, handbooks, project briefs, and tools. For each, note the owner, who may read it, and whether it’s current. Keep authoritative sources with their owners, link them through an index, and decide how colleagues will discover findings across teams.
</li>
<li markdown="1">
**Make the smallest useful home.**
Create a private repo or an equivalent shared space with an index, strategy, AI boundaries, one team guide, one project brief, and one role profile. Give each document an owner, status, and review date; the starter kit below has templates.
</li>
<li markdown="1">
**Connect one agent and verify its access.**
Point the tool’s startup instructions at the index. In a fresh session, ask it to explain the current priority, name its sources, describe what it may do, and identify missing access. Check that a colleague’s agent can find an authorized finding and follow its evidence. Configure real read, write, and action permissions before running these checks.
</li>
<li markdown="1">
**Run a bounded pilot.**
Pick an owner, a review date, and a few real tasks. Write the expected output and quality criteria first. Record which sources the agent used, what it produced, and what a person corrected. If one agent hands work to another, check that the brief and restrictions survive the handoff.
</li>
<li markdown="1">
**Review, update, and decide whether to expand.**
Compare quality and total effort with similar work done the usual way. Sort what you learned into local findings, practices worth testing elsewhere, and proposed company changes, and send each to the right owner. Archive superseded guidance and try the revised instructions on the next task. Expand when the workflow earns it; simplify or stop if it doesn’t.
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
our human strengths, local decision rights, and one workflow to
pilot, then help me bring in the people doing that work. Work
through one step at a time; don't invent answers or change shared
policy or access without the responsible person's approval.
```

If your agent can’t read the links, download the kit and give it `SETUP.md`. The files are templates. Your organization’s actual decisions and permissions still get worked out together.

We’ll keep changing our own setup as we learn. Enchant’s version fits two people building products and helping clients. An editorial team’s version should fit its writers, its standards, and the judgment its readers trust.

Through [Enchant](https://enchant.co/), we help organizations build this: clarify direction and decision rights, connect the context, and help people learn together through real work. If you’re figuring it out, we’d love to help you get the first useful loop running.
