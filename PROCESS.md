# Resume Review Process

This document explains how this resume was reviewed and improved. Every change is tracked as a git commit so you can read the diff and understand exactly what changed and why. This is your guide to understanding the decisions — not just the outcome.

---

## How to Read the Changes

Each improvement is its own commit. To see what changed:

```bash
# See all commits
git log --oneline

# See what changed in a specific commit
git show <commit-hash>

# Compare any two versions
git diff <older-hash> <newer-hash>
```

On GitHub, you can click any commit to see a color-coded diff: red = removed, green = added.

---

## The Core Principles

### 1. Recruiters scan before they read
Most resumes get 6–10 seconds of attention before a recruiter decides to keep reading. The structure, section headers, and first line of each entry have to earn that attention. Dense paragraphs lose before they're read.

### 2. Projects are not Experience — but they still count
"Experience" means paid or internship work. Calling academic projects "Experience" looks naive. The fix is simple: rename the section "Projects." Recruiters understand new grads have projects, not jobs — but they need accurate labeling to trust you.

### 3. Technical skills and soft skills don't live together
Putting "Flexible and adaptable" in the same list as Python and SQL signals you don't know the difference. Technical skills are scanned by applicant tracking systems (ATS) and hiring engineers. Soft skills belong in your summary or cover letter, not a keyword list.

### 4. Every bullet should answer "so what?"
"Utilized object-oriented programming and GUI design principles" tells a reader what you used, not what you achieved or learned. Strong bullets follow this pattern:
> **[Action verb] + [what you built/did] + [why it mattered or what you learned]**

### 5. The header is your business card
If there's no GitHub link, a technical recruiter has nowhere to verify your work. If there's no LinkedIn, you lose a second credibility signal. These are table stakes for CS candidates.

### 6. Lead with your strongest work
Projects should be ordered by impact and relevance to the role you're targeting, not chronology. The steganography tool and sentiment analysis are stronger than the Magic 8-Ball app — they should come first.

### 7. The AI/ML post-grad program is a differentiator — feature it
A UT Austin McCombs post-grad AI/ML certificate while job hunting shows initiative. It belongs in Education or its own Certifications section, not buried under "INVOLVEMENT."

---

## What We Changed and Why

Each commit below corresponds to a specific improvement. Read the diffs alongside these explanations.

### Commit: Raw baseline
The unedited PDF extracted to markdown. This is the starting point — everything after this is an improvement.

### Commit: Structural fixes
- Renamed `EXPERIENCE` → `PROJECTS` — accurate labeling for academic work
- Moved the UT Austin AI/ML program out of `INVOLVEMENT` into `EDUCATION`
- Separated soft skills from the technical skills list entirely
- Added placeholder for GitHub and LinkedIn links in the header

### Commit: Content improvements
- Rewrote project bullets using action-verb + outcome format
- Cut or condensed the weakest project entries
- Tightened the summary to be specific and positioning-focused
- Reordered projects by strength (cybersecurity + ML first)
- Split skills into clearly labeled categories

### Commit: resume.json
Structured data version of the improved resume in JSON Resume format. This powers web rendering and PDF generation.

---

## Questions to Ask Before Each Application

When tailoring this resume for a specific job:

1. **Which 2-3 projects are most relevant to this role?** Lead with those.
2. **What keywords does the job description use?** Make sure those appear in your skills or project descriptions.
3. **Is the summary customized?** Even one sentence change to match the company or role makes a difference.
4. **Does your GitHub show active work?** Recruiters will click it.

---

## What's Still Missing

These are items that would strengthen the resume but require input from Aradhnna:

- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] GPA (include if 3.5+)
- [ ] Any AWS certifications in progress or completed
- [ ] Links to project repos or demos on GitHub
- [ ] Any internship, part-time, or freelance work not on the original resume
- [ ] What SAP Hana / Joule exposure was (class project? internship? self-study?)
- [ ] What Sitaara is (cultural org? conference? — context helps a reader understand the leadership scope)
