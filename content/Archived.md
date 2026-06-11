###### Catching 
`Many things I had to check before integrating them into the game world.`
`When do they usually appear? What does their habitat look like? Are they active during the daytime, nighttime, or both? What is the official record of their length, from the smallest to the biggest one caught? Are they categorized as endangered species?`
##### **Design Walkthrough** [not this one]

*__Dynamic Dialogue & Quest Integration__ - Sam's Local Produce from the beginning to the end*
	- **Identification:**
		- Identify what to trigger and its condition for the quest setup so the dynamic dialogue system can rely on.
	- **Implementation:**
		- **Dynamic Dialogue related**
			- Bronze one
			- Animal product one
			- Osmium one
		- **Quest related**
			- Bronze one
			- Animal product one
			- Osmium one
	- **Iteration:**
		- Test out the feature before it could be said `done`
	- **Outcome:**
		- All quest setup done.
		- All dynamic dialogue setup done.

##### **Problem Solving** [not this one either]

- **Multiplayer Quest Logic Migration**

	- **The Problem:** 
		- The existing quest architecture was design-minded for a single-player state, creating "progression desync" in a multiplayer environment.
	- **The Solution:** 
		- I performed a full audit of all existing quests and categorized them into a new dual-stream logic:
			- **Shared Quests:** For world-state changes related.
			- **Personal Quests:** For individual character growth and skill progression related.
	- **The Impact:** 
		- Successfully migrated entire quest library to multiplayer without compromising the core narrative beats. 
		- Prevented players from "skipping" vital story while allowing friends to impact the world together.

- **Recipe Mail Data Conflict**

	- **The Problem:**
		- Conflicting data entries from multiple developers during branch pushes caused **asset desynchronization**, resulting in missing or overwritten recipe mail data within the project repository.
	- **The Solution:**
		- Acted as the **Technical Mediator** to investigate the data discrepancy and identify  text-based conflicts within the recipe mail and invisible state-tracking quests system.
		- **Manually reconciled asset conflicts** using proprietary in-house tools, ensuring all narrative, recipe mail system, and invisible state-tracking quests were correctly formatted and delivered to the game engine.
	- **The Impact:** 
		- **Validated system-wide delivery** by using invisible state-tracking quests as a diagnostic layer, ensuring 100% accuracy for all mail triggers across various player progression states.
		- **Restored data integrity** for the main branch, preventing narrative progression breaks and ensuring a seamless experience for the player.

##### **Quest Designer**

- **Multiplayer Quest Logic Migration**

	- **The Problem:** 
		- The existing quest architecture was design-minded for a single-player state, creating "progression desync" in a multiplayer environment.
	- **The Solution:** 
		- I performed a full audit of all existing quests and categorized them into a new dual-stream logic:
			- **Shared Quests:** For world-state changes related.
			- **Personal Quests:** For individual character growth and skill progression related.
	- **The Impact:** 
		- Successfully migrated entire quest library to multiplayer without compromising the core narrative beats. 
		- Prevented players from "skipping" vital story while allowing friends to impact the world together.

**Quest Designer** (Credited as Game Designer) | Stairway Games
Coral Island 
Dec 2021 - Present

- Architected and implemented **110+ narrative quest lines**, including Main, Side, and Invisible state-tracking quests, utilizing complex branching logic to synchronize with player progression and dynamic world-states.
- Navigated technical bottlenecks regarding quest system stability by identifying systemic trigger conflicts and designing high-level logic workarounds where proprietary tools reached their functional limits.
- Engineered quest-generation logic for the errand system, establishing strict validation rules to maintain narrative and mechanical consistency across in-game seasons.
- Spearheaded a comprehensive audit of legacy single-player quest systems to architect a dual-stream progression logic for multiplayer integration.
- Worked cross-functionally with programmer to optimize design workflows.