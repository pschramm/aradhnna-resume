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
The unedited PDF extracted to markdown. This is the starting point — everything after this is an improvement. The original PDF is also included in the repo as `aradhnna-reddy-resume-original.pdf` so there is always a reference copy.

### Commit: Improved resume.md + PROCESS.md

Here is a walkthrough of every edit made and the reasoning behind each decision:

**1. Header — added LinkedIn and GitHub placeholders**
The original had no social links. For a CS graduate, a GitHub profile is table stakes — recruiters click it to verify that your project work is real and to see how you write code. LinkedIn is a second credibility signal. Both were added as placeholders (`[#]`) so you just need to fill in your URLs.

**2. Summary — rewritten to be specific and role-targeted**
Original: *"Computer Science graduate focus on cybersecurity and data analytics. Leveraging a minor in Psychology to bridge technical systems and human behavior..."*

This reads like an essay opener. A resume summary has one job: position you clearly in under three sentences. The new version names what you built, what program you're currently in, and what roles you're targeting. A recruiter should be able to read it and instantly know where you fit.

**3. Education — moved the UT Austin AI/ML program here from Involvement**
The McCombs post-graduate program is an educational credential, not a club activity. Listing it under "Involvement" buried one of your strongest differentiators. Moving it into Education gives it the weight it deserves and shows two institutions on your resume — that stands out for a new grad.

**4. Skills — removed soft skills, reorganized into categories**
Removed from the list: *"Flexible and adaptable," "Able to handle ambiguity," "Responsive"*

These do not belong in a technical skills section. Applicant tracking systems (ATS) and engineers scan this section for specific tools, languages, and platforms. Soft skills listed here actively hurt credibility — they signal you didn't know what to put. Soft skills are shown through your bullet points (led a team, volunteered 70+ hours) not stated as keywords.

Languages were also reordered to put Python first since you're targeting data science and AI/ML roles — Python is the first thing those recruiters look for.

**5. Renamed EXPERIENCE → PROJECTS**
Every item under that section was an academic project, not paid or internship work. Labeling it "Experience" is either naive or misleading to a recruiter — and they will notice. "Projects" is completely normal and respected for a new graduate. The projects themselves are strong; the label was the only problem.

**6. Reordered projects — strongest and most relevant first**
Original order had no clear logic. New order prioritizes impact and target-role relevance:
1. Sentiment Analysis (ML + NLP — directly relevant to data science/AI roles)
2. DWT Steganography Tool (security + Python — strong technical depth)
3. Music Shop Database (SQL + leadership)
4. AWS Web Deployment (cloud + full-stack)
5. RowdyBall (Java GUI — weakest, moved last)

Recruiters read top to bottom and often stop early. Lead with your best work.

**7. Rewrote project bullets — action verb + outcome format**
Before (Sentiment Analysis): *"Operates large datasets using natural language processing techniques (tokenization, lemmatization, vectorization). Built and evaluated five different models to gauge performance and accuracy..."* — one long run-on paragraph.

After: Three clean, scannable bullets each starting with an action verb and ending with a specific outcome or result.

The formula is: **[Action verb] + [what you built or did] + [why it mattered or what it demonstrated]**

**8. Fixed ACM name**
The original said "Association of Computational Machinery." The correct name is "Association for Computing Machinery." Small detail, but visible to anyone in the field.

### Commit: resume.json
Structured data version of the improved resume in JSON Resume format. This powers web rendering and PDF generation — the same approach used at patrickschramm.dev.

---

## Questions to Ask Before Each Application

When tailoring this resume for a specific job:

1. **Which 2-3 projects are most relevant to this role?** Lead with those.
2. **What keywords does the job description use?** Make sure those appear in your skills or project descriptions.
3. **Is the summary customized?** Even one sentence change to match the company or role makes a difference.
4. **Does your GitHub show active work?** Recruiters will click it.

---

## How the Automation Works

This repo uses **GitHub Actions** — a built-in automation tool on GitHub that runs tasks automatically when you push changes. You don't need to install anything or run any commands yourself.

### What happens when you push a change

Whenever you update `resume.md`, `resume.json`, or `index.html` and push to the `main` branch, GitHub automatically:

1. Spins up a temporary Linux machine in the cloud
2. Checks out your repo files
3. Runs the steps defined in [`.github/workflows/generate-pdf.yml`](.github/workflows/generate-pdf.yml)
4. Generates a fresh `resume.pdf` from your latest content
5. Commits the updated PDF back to the repo automatically

So after every edit, your PDF stays in sync without you having to do anything.

### How to watch it run

1. Go to your repo on GitHub
2. Click the **Actions** tab at the top
3. You'll see a list of workflow runs — green checkmark = success, red X = something failed
4. Click any run to see the full log of what happened

### The file pipeline (current → future)

Right now: `resume.md` → PDF (direct markdown conversion)

Once `resume.json` and `index.html` are added:
`resume.json` → `index.html` (rendered resume site) → `resume.pdf` (via Puppeteer, same as patrickschramm.dev)

That's when the resume will also be live as a webpage, not just a PDF.

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
