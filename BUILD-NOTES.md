Build notes for The Postmortem That Made Us Laugh.

The brief asks for one short account, one or two sentences and no more than
400 characters, of the silliest or most fatal time an AI coding agent
misunderstood what it was asked or wrecked the code it was given. The judge
weighs, in order, whether the story is squarely about an agent going wrong,
how concrete the incident is, whether the telling lands with a turn in the
last clause, whether it reads like something a working engineer would
recognise, and whether the details feel true.

The entry I wrote is a rename gone wrong. The setup is a small, ordinary
request: rename one variable in the auth module. The agent's mistake escalates
in a list — the variable, the function, the file, and then the production
database column — so the reader can see the blast radius grow with each item.
The punch is in the last clause: the agent does not notice the damage at all,
it closes the ticket with a green checkmark and files a summary titled
Cleanup complete, proud of the wreckage it made.

The first draft ended with the agent merely reporting the job done. I revised
it to the ticket-closing version because the punch lands harder when the agent
is not just unaware but self-satisfied: a green checkmark plus a summary that
names the disaster a cleanup is the detail a working engineer recognises from
real incident reviews.

The program is a small TypeScript file that writes the entry to the output
path the grader reads. I ran it locally twice, once per draft, and checked the
character count, the sentence count, and the file hash each time. The final
text is two sentences and 252 characters, inside the 400-character gate.
