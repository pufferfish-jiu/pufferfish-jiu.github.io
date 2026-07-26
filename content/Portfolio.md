### Coral Island

![[491ae5_33d5c4960dbb4dd5b790028df179b98f~mv2.png]]

I'm the game designer of Coral Island. My duty includes:
 - Owning features and subsystems from initial design through implementation and iteration.
 - Setting up world environment such as tiles, POIs, spawn logic, and location areas
 - Maintaining NPC systems including heart events, hangout events, dating & marriage, and dialogues
 - Creating GDDs, technical specs, and UI/UX wireframes
 - Conducting integration audits and sanity checks
 - Troubleshooting logic and gameplay issues
 - Collaborating closely with producer, programmers, writers, animators, artists, etc

---
###### Fishing & Catching Minigame

Fishing and catching minigame are one of my contribution to Coral Island. Player can obtain fish through fishing, and insects alongside ocean critter through catching minigame. All creature caught by player can be donated to museum, offering for temple, and sold for profit.

When I got the task of populating the catchable species for the fishing and catching minigames, I wanted to make sure the spawning for all species was reflected as authentically as possible, matching their real-life behavior so players wouldn't feel it was out of sync with the environment. 

Based on the data that I collected, then I determined the capture difficult of each species by configuring the data tables for fishing and the blueprints of insects and ocean critters, which were well-implemented by the programmers, giving me the tools I needed to achieve the design.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1ZB7prOldME" allow="autoplay" allowfullscreen></iframe>

I also designed the bamboo net and insect trap as passive resource-gathering tools to help reducing gameplay repetitive. 

---
###### Dynamic Dialogue

I also contributing for Coral Island's dynamic dialogue. Player can witness the specific line of dialogue spoken from NPC if the requirements are met.

My main part are to set up the logics and rules for when this dynamic dialogue should or shouldn't appear, as well as the priority queue for which dynamic dialogue takes precedence if player are able to trigger multiple dynamic dialogue simultaneously. I'm also the one who maintaining the feature and resolving any issues that arise.

Even though I was the one who maintaining this feature, it wouldn't have been possible without the collaborative effort by the writers, programmers, and assistant project managers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/e0oRWe8RAFQ" allow="autoplay" allowfullscreen></iframe>

- ***Day before harvest festival***
	Before the festival day, NPC will acknowledge and reveal their excitement for the upcoming harvest festival.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ey3s2qzSnKI" allow="autoplay" allowfullscreen></iframe>

- ***Day after tree planting, but didn't attend***
	After tree planting festival date has passed but player didn't attend, NPC will express their disappointment about the event cancellation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cb5zw58lUfc" allow="autoplay" allowfullscreen></iframe>

- ***Aaliyah back from space*** 
	Aaliyah's related family and space enthusiast are expressing their joy about her return from the space.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xX5XU_DQTQI" allow="autoplay" allowfullscreen></iframe>

- ***Appearance shark costume***
	NPC commenting on shark outfit if player wear it.

---
###### Quest

I also took part in quest system, covering on Main quest, Side quest, Invisible tracking quest, and errand quest.

When I got the task of working on the quest system, I wanted to make sure each quest gave player clear direction while also contributing to the story and world-building, so that the experience felt purposeful rather than just a list of tasks.

Based on the design I planned, I scripted the quest by defining it into steps using the system's built-in tools, which serve as the building blocks for the experience. Inside each step, I configured the requirements that the player must clear for the step to be considered complete, and wrote both visible task descriptions and narrative text as well as invisible tracking logic where needed. 

I also determined the rewards for each quest, such as mail, items, or unlocks, then playtest it and iterated on the entire flow directly inside UE4.

As Coral Island expanded into multiplayer, I audited the existing single-player quest systems and redesigned them for multiplayer compatibility. I determined whether each quest's progression should be shared or tracked individually per player, then documented and implemented the logic accordingly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3_RVcfU2aQ0" allow="autoplay" allowfullscreen></iframe>

- *The Last Giant* (main quest)
	To get `The Last Giant` quest, player must complete `The petrified perpetrator` quest. This main quest will automatically trigger once the cutscene tied to `The petrified perpetrator` quest trigger, it tells about `The Last Giant` that they haven't found yet.
	
	Each quest step below are tied to the cutscene, if player accomplished the step they will witness a cutscene telling a tale. 
	 - Reach the Savannah
	 - Enter the Cave of Memories
	 - Gort's memory fragment (0/5)
		 - There are 5 memory fragment that needs to be found inside Cave of Memories.
	 - Go to Cave of Memories Lobby
	
	For multiplayer, this main quest is count as shared progress.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cZs7tfXs-KM" allow="autoplay" allowfullscreen></iframe>

- *Flower, please - Leah 2* (side quest)
	To get `Flower, please` quest, player must reach heart level 2 first with Leah and trigger her heart event 2 cutscene. The side quest will automatically trigger once the cutscene ends. 
	
	To complete it, bring any 2 flowers to Leah. Once you do, she will say thank you and the quest will be complete.

	For multiplayer, this side quest is count as individual progress.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NF_lp1plCT4" allow="autoplay" allowfullscreen></iframe>

- *Nina Summer/Winter* (invisible tracking quest)
	In Year 1, player will get a one-time cutscenes introducing NPC dateable name Nina. These are set up to fire first thing in the morning, before any other cutscene can trigger.
	- **Summer 1st** -> Nina arrives at starlet town for the summer. This cutscene officially introduces her, unlocking her character portrait in the UI and replacing her grayed-out silhouette.
	- **Winter 1st** -> Nina returns to the starlet town permanently after absent during the fall in year 1. This cutscene reveals she is moving to town, for good.

	For multiplayer, this invisible tracking quest is count as shared progress.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RjuUaqTUViQ" allow="autoplay" allowfullscreen></iframe>

- *Emily looking for 2 chards* (errand - dynamic quest)
	The system will dynamically spawns errand quest by checking the availability item. If an item is in season, the quest have a chance to fire; if not, it is skipped.
	- In the video, Emily request for Chard during spring season, which matches the plant's growing season.

	For multiplayer, this errand quest is count as individual progress.
