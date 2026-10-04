---
layout: context-essay
title: "Building an AI Brain for Your Organization"
permalink: "building-an-ai-brain-for-your-organization"
date: 2026-10-04
categories: [essay, wip]
coauthored: "Astra (GPT-6) and Claude Opus 5.5"
coauthored_note: "I set the direction, examples, and boundaries, and we’ve revised the piece together over several rounds. Astra researched, drafted, and designed it; Opus 5.5 has worked with me on the concept and the writing, with access to my personal context."
teaser: "How people and agents can share direction, decide close to the work, and learn across an organization as it grows."
---

I’ve been talking with more and more companies interested in setting up their “AI brain.” Almost everyone I talk with who’s exploring how to use more AI at work is trying to figure this out, whether it’s for themselves or a whole team. How do we help agents understand our work and what’s going on around it?

That sounds familiar. At Enchant, we’ve been building something like this across our company handbook, our project handbooks, and our personal context repos. My [August post](https://www.paulmederos.com/how-i-work-with-claude-in-august-2026) covered the personal side. This one asks how it works when everyone has agents.

It’s tempting to picture one central brain that leadership fills and everyone’s agent reads. Some context belongs in the middle, but most of what an organization knows lives with the people doing the work. The setup I’m excited about looks more like a healthy organization: leadership keeps the direction and guardrails clear, people experiment and decide within their own work, and what they learn can travel to another team or change where the company is going.

We’re two people, so a mid-size organization will need more explicit ownership than we do. But I think the basic idea holds up: **AI can help more people make informed calls in their own work, while helping the org learn from what they find.**

## Shared direction, room to act
{: #human-judgment}

Leadership keeps the direction and guardrails clear: what we’re trying to accomplish, and what customers trust us for. Within that space, a researcher or support person can improve their own workflow without asking permission. They know things the founder doesn’t.

Guardrails answer two questions: where a decision belongs, and what stays with people even when an agent could do it. Each organization draws that second line around what its customers are actually trusting it for.

At Enchant, product taste stays with us. Agents help throughout, but Brittany and I have the final say on the experience—we’ll nitpick until we’re happy with it. Warm outreach is personal for me, too. An agent can help me prepare, but I write or personally edit every message before it goes out.

Some friends at a content company draw the line around writing. They create and curate work for an audience, and their writing is what readers come for. People write every article; agents help with strategy, research, and support. An editor can still try a better research process without asking leadership to invent it.

## How our context fits together
{: #shared-context}

At Enchant, our context sits in three layers: the studio handbook, project context for Coplay Club, Kasane, and consulting, and a personal repo for each of us. A mid-size organization needs the same idea, with named owners for company, team, project, and role. These are scopes, not a ladder every idea has to climb. My friend Nicholas Tolson’s [work on organizational context](https://www.linkedin.com/pulse/stop-re-explaining-your-company-ai-build-context-profile-tolson-0qlve/) makes a similar distinction between company, department, project, and individual context.

Most of what an organization learns should stay where it happened, with the people who can explain it. A shared index and the right access let a colleague’s agent find it and follow the evidence back. That lets people beyond leadership connect the dots: a support lead can ask what other teams have learned about a reader group. Leadership is still responsible for connecting signals across the company. It just isn’t the only one who can.

I’d separate three actions: **sharing a finding, trying it elsewhere, and changing company policy.** Anyone can record what they observed, with evidence, without declaring it true everywhere. Another team can test it within its own authority. A company-wide commitment goes to the person who owns it.

When agents divide the work, each needs a clear assignment and the relevant context. Their handoffs should carry findings, sources, open questions, and permitted actions. Shared understanding has to reach the agent doing the next part.

Decision rights belong to people. Agents get permissions, which should fit the task, stay within what the person they’re helping may do, and be enforced in the tools—an instruction file alone doesn’t enforce anything.

## The context problem grows with you
{: #growing-orgs}

Agents inherit an old problem: keeping people working from the same understanding as an organization grows. They can also multiply it, since a stale decision can now feed several streams of work at once. These stages are illustrative, not headcount laws:

- **At one person, context mostly lives in your head.** The job is remembering your own decisions so tomorrow doesn’t start over.
- **At two, you need a shared version of the story.** Which decisions belong to the company, and which are one person’s preferences? That’s where we are at Enchant.
- **Around ten, people stop hearing every conversation.** Clear briefs and decision rights let them act, and shared discovery helps them learn from work they missed.
- **Around fifty, teams develop their own context.** Local evidence needs a route to change shared direction without every lesson passing through leadership.

In a [P&G field experiment](https://www.library.hbs.edu/working-knowledge/when-ai-joins-the-team-better-ideas-surface), individuals using AI produced ideas comparable in quality to two-person teams without it. That was one product-innovation task, not proof that a company can halve its staff. Still, my bet is that we’ll see smaller organizations with more capability per person. We’ll have to try it and see.

## Strategy, work, reflection, repeat
{: #learning-loop}

If you already use OKRs or quarterly planning, you have most of this loop: set a direction, do the work, review what happened, and update the context where the next agent will read it.

Here’s how I picture it at the content company. A support person notices repeated questions from a reader group the company hasn’t focused on, and their agent records the pattern with permitted evidence. An editor’s agent finds that note and connects it to gaps in past coverage, and the editor starts a small pilot within the team’s scope. An agent gathers sources; a person checks the claims and writes the story.

The editor catches a forecast presented as an observed result and fixes the team’s research guidance. Another desk tries the lesson on its own work. By the end, the support person and editor think this reader group may deserve a place in the company’s priorities, so they take their evidence straight to the leaders who own that decision. Leadership’s agent can compare it with findings from other projects, preserving sources and competing explanations.

Those leaders owe them an answer: change course, run a test, or hold steady, with the reasoning written down. “Not yet, and here’s what would change my mind” is a perfectly good answer. Silence isn’t.

Agents add one risk of their own. If they all read the same summary, one mistake in it shows up everywhere, and their outputs agree for the wrong reason. Keep the shared layer small and well-sourced, and leave room for people to disagree. Keep experiments small enough that failures stay contained, and check whether each correction improves the next attempt.

## Give people a site they can use
{: #internal-home}

I’d have the agent build a small HTML site with its own navigation: Start here, Direction, AI boundaries, Teams, Projects, Roles, and What we’re learning. People should be able to browse it, share a link to a page, and see who maintains it. A repo can hold the source and edit history; the minisite is the front door people actually use. Link to existing source docs so you don’t create a second copy of everything.

Host it as a private internal site, with company SSO and access limited to the right groups. An access layer such as [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/) can sit in front of a hosted site. A private repo, an unlisted link, or a “noindex” tag doesn’t make the deployed site private. Check the actual pages and downloads while signed out, and as someone who shouldn’t have access.

If your team already lives in [Linear docs](https://linear.app/docs/documents), [Confluence alongside Jira](https://support.atlassian.com/jira-service-management-cloud/docs/restrict-access-to-knowledge-base-articles/), another wiki, or even [Google Docs](https://support.google.com/drive/answer/2494822), that can be the home instead. Give it a clear start page and linked navigation, then verify membership, guest access, and sharing settings. Keep personal or client material in separately restricted spaces. Agents need an authorized way to read the same sources; don’t make the site public to get around a login.

## For founders and teams: point your agent here
{: #begin}

If you run an org, you can give your agent this article and say, “I want to build this.” Start with the people doing the work. Together, agree on the current priority, what stays human, what people decide locally, how findings will travel, and who owns company commitments. Pick one recurring workflow, build its internal home, and connect one agent. Check what it can actually read and do. After a couple of weeks, compare the results with similar work done the usual way. We haven’t run this at a larger company yet, but it’s how I’d begin.

If you don’t run the company, you can still start inside your own work: build your own context, improve one workflow, and record what you learn where a colleague can find it.

Your agent can work through the [HTML setup guide and minisite starter](/downloads/org-context-starter/setup.html) with you, one step at a time. The starter is public and contains only blank templates. Build your organization’s version in a private workspace, then check access before sharing it internally. You can also [download the kit](/downloads/org-context-starter.zip) or [view its source on GitHub](https://github.com/paulmederos/pm17/tree/main/downloads/org-context-starter).

<details class="founder-guide" markdown="1">
<summary>A prompt to get started</summary>

```text
Read https://www.paulmederos.com/downloads/org-context-starter/setup.html
I want to build this with my team. Start by interviewing us about
our direction, human strengths, local decision rights, and one pilot.
Build an HTML minisite with its own navigation, or adapt our existing
internal knowledge base if that fits better. Keep it private, plan
SSO and group access, and verify human and agent permissions before
sharing. Work one step at a time; don't invent answers or publish
company information without the responsible person's authorization.
```

</details>

Through [Enchant](https://enchant.co/), we help organizations build this: clarify direction and decision rights, connect the context, and help people learn together through real work. If you’re figuring it out, we’d love to help you get the first useful loop running.
