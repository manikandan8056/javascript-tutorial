# JavaScript Tutorial and Interview Preparation

This repository is a practical JavaScript learning and interview-preparation workspace. It progresses from fundamental language exercises to common data-structure problems and advanced browser and asynchronous concepts. The examples are intentionally small, focused, and executable so learners can study the logic, experiment with variations, and verify their solutions quickly.

It is designed for JavaScript developers who want to strengthen problem-solving skills, understand how JavaScript behaves at runtime, and prepare for technical interviews. Topics include arrays, strings, objects and maps, recursion, promises, `async/await`, closures, polyfills, the DOM, and the browser and Node.js event loops.

The repository also contains shorter collections of frequently asked interview questions, earlier practice notes, and examples covering array and object operations. The [complete interview roadmap](complet_interview_roadmap/studyPlan.md) brings these subjects together as a structured checklist, showing completed exercises and areas available for further practice.

## Start Here

- [Complete interview roadmap](complet_interview_roadmap/studyPlan.md) - topic checklist and two-week study plan
- [Array problems](complet_interview_roadmap/Arrays/)
- [String problems](complet_interview_roadmap/Strings/)
- [Objects and Maps](complet_interview_roadmap/Objects%20%26%20Maps/)
- [Recursion](complet_interview_roadmap/Recursion/)
- [Promises and async/await](complet_interview_roadmap/Promises%20%26%20Async%20and%20Await/)
- [Closures](complet_interview_roadmap/Closures/)
- [Polyfills](complet_interview_roadmap/Polyfills/)
- [DOM](complet_interview_roadmap/DOM/)
- [Event Loop](complet_interview_roadmap/Event%20Loop/)

## Repository Layout

| Path | Contents |
| --- | --- |
| `complet_interview_roadmap/` | Structured interview exercises grouped by topic |
| `top 10 JS/` | Small solutions for common JavaScript questions |
| `top 8 JS/` | Additional interview exercises and output-prediction questions |
| `Old_notes/` | Earlier practice notes and beginner exercises |
| `Working with Array and Obj/` | Array and object examples |
| `spread-operater.js` | Spread syntax examples |

The roadmap is the source of truth for exercise coverage. Checked items have an implementation in the repository; unchecked items are opportunities for future practice.

## Run an Example

This repository does not require a build step or package installation. With Node.js installed, run any script from the repository root:

```bash
node "complet_interview_roadmap/Arrays/Find_pair_with_given_sum.js"
```

Some DOM examples expect a browser document rather than Node.js. Open those files in a browser-based HTML page or run them from the browser console. Most other scripts print their result directly with `console.log`.

## Suggested Workflow

1. Follow the [study plan](complet_interview_roadmap/studyPlan.md) from arrays and strings through the advanced topics.
2. Read an existing solution, then rewrite it without looking at the implementation.
3. Try the unchecked roadmap items and add a focused script in the matching topic folder.
4. Run the script with Node.js and test edge cases such as empty input, duplicates, and invalid values.

## Notes

- File names describe the problem being demonstrated; spaces and underscores are part of the existing layout.
- Examples are educational scripts, not a published npm package or production library.
- Prefer standard JavaScript features unless an exercise specifically asks for a manual implementation.
