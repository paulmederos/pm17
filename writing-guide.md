### Avoid Generic AI-Copy Patterns

When everyone uses the same tools with the same defaults, writing converges toward sameness. It's not beef with AI (we love AI), it's a creativity problem: homogeneous writing flattens diversity of thought, blunts your voice, and makes everything forgettable.

These constraints exist to force differentiation. Unique voice → spiky (outside of local maxima) thinking → better outcomes.

**Binary contrast framing: "It's not X. It's Y."**
- Overused to the point of cliché. Sounds like a TED talk on autopilot.
- ✅ Just state the thing directly. "Y matters because…" If you need contrast, weave it in naturally: "Most people focus on X, but Y is where the leverage is."

**Staccato adjective sentences: "Bold. Intentional. Transformative."**
- Nobody talks like this. It reads like a landing page hero section.
- ✅ Use a natural phrase — "it's a bold, intentional approach" — or just pick the one adjective that actually matters and let it breathe.

**Sentence fragment + question mark as transition: "And honestly?" / "The result?" / "Now?"**
- Fine occasionally, but way overused as a pacing crutch.
- ✅ Use normal transitions or just let the next sentence follow. "Honestly, I think…" or drop the transition entirely — the reader can follow.

**Em dashes with spaces: "something — like this — everywhere"**
- A hallmark of LLM prose. Real writers either use tight em dashes (something—like this) or don't em-dash every other sentence.
- ✅ Use em dashes sparingly and without spaces. Or use commas, parentheses, or just break into two sentences.
- **This rule is about grammar, not layout.** A spaced em dash used as a *formatting* device is fine and often the right call: label separators (`#1 — Reading across time`), list lead-ins, table cells, entry markers (`[Confirmed — 2026-08-03]`), key–value pairs. What's banned is the em dash as a sentence-structure crutch, mid-clause, over and over.
- Practical test before "fixing" one: is it joining two parts of a sentence, or separating a label from its content? Only the first counts.

**Overused "vibe" words**
Words like "quietly," "intentional," "shift," "corner," "landscape," "navigate," "straightforward," "leverage," "delve," "tapestry" — not wrong individually, but suspiciously overrepresented in AI copy.
- ✅ Use concrete, specific language. "Navigate the landscape" → "figure out how X works." "A quiet shift" → say what actually changed.

**Throat-clearing openers: "Look," / "Here's the thing:" / "Let's be honest:"**
- Filler that adds nothing and delays the point.
- ✅ Just start with the actual point.

**Verbless fragments used as pacing: "Not prompting. Context." / "Three lenses, none replaces the others."**
- Short sentences are fine and this site uses a lot of them. The problem is fragments with *no subject and no verb*, stacked for rhythm. They scan as punchy in isolation and as a nervous tic in aggregate.
- The test is the read-aloud one: "This isn't fringe" and "That's what brains do" are short *sentences* someone would actually say. "Not prompting. Context." is two nouns in a trench coat.
- Watch the appositive pile too — "Not chat transcripts, actual logs, one markdown file per session, filed by week" defers the verb so long the sentence never arrives.
- ✅ Keep it short, but give it a subject and a verb. Single-word intensifiers you'd genuinely say out loud ("Literally." "Honestly.") are the exception, not the pattern.

**Genteel contrast: "rather than" / "instead of" / "X, never Y"**
- The sibling of the binary-contrast rule above, and it slips the scan clean because each instance reads as correct English. The tell is density: if "rather than" shows up a dozen times in one piece, the reflex is defining everything by what it isn't.
- ✅ Count them before shipping. Most can just be stated positively. "Pruning is recall protection rather than tidiness" → "Pruning protects recall."
- Inline contrast ("candor, not code") is fine and is genuinely part of the voice here. The banned shape is the two-sentence TED version and the every-paragraph habit.

### Rhythm targets (measured from this site's own posts)

Useful when editing, and especially when an LLM drafted the first pass. Numbers are from the prose in `_posts/`, excluding code blocks, tables, and block quotes.

| Metric | Target | Why |
|---|---|---|
| Mean sentence length | **13–16 words** | The essays here run 13–14. Anything north of 20 has drifted into report voice. |
| Short sentences (≤4 words) | **~15–20%** of sentences | They're a real feature of the voice. Just make them complete sentences. |
| Spaced em dashes | **0** | Tight only. |
| Tight em dashes | Generous | The evolution post has 27 and they carry it. |

A quick check worth running on any long draft before publishing:

```bash
python3 - <<'EOF'
import re,sys
body=open(sys.argv[1] if len(sys.argv)>1 else '_posts/draft.md').read().split('---',2)[-1]
p=re.sub(r'```.*?```','',body,flags=re.S)
p=re.sub(r'^[|>].*$','',p,flags=re.M)
s=[x.strip() for x in re.split(r'(?<=[.!?])\s+',p) if x.strip() and not x.strip().startswith(('-','*','#'))]
w=[len(x.split()) for x in s]
print('mean %.1fw | short %d%% | spaced-emdash %d | rather-than %d'
      % (sum(w)/len(w), 100*len([x for x in w if x<=4])//len(w),
         p.count(' — '), p.lower().count('rather than')))
EOF
```

### Register: long-form vs. comms

The five voice modes in `paul-voice.md` cover messages to people. Posts on this site are a sixth register and differ in two specific ways:

- **Capital "I".** Lowercase "i" belongs to texts, email, Discord, and Threads. Essays use standard capitalization.
- **Still casual underneath.** Contractions, "hah," the occasional 😅 or 🌿 at an emotional beat, and a willingness to say "I got this wrong." Long-form doesn't mean corporate.

**Cliché closers: "At the end of the day…" / "In a world where…"**
- ✅ End with something specific and concrete, or just stop when you're done.


### Write Like a Human, Not a Brand
Instantly better writing with these principles:

**Make it active** → start with a verb
- ❌ "Our products support childhood development"
- ✅ "Watch your toddler discover new textures"

**Write with precision** → be specific
- ❌ "Loved by parents everywhere"
- ✅ "Part of 50,000+ bedtimes"

**Keep it short** → ruthlessly edit
- ❌ "Our solution gives parents the ability to monitor their baby's sleep patterns and get detailed insights"
- ✅ "See exactly when your baby stirs"

**Read it out loud** → if it sounds weird, rewrite it
- Would you actually say "transform meal planning" to someone? No. You'd say "figure out dinner with no meltdowns."
