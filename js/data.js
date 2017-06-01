
//Groups:
function group(name, oath, img, imgBanner, info) {
	this.name = name;
	this.oath = oath
	this.img = img;
	this.imgBanner = imgBanner
	this.info = info;
}

var greenLantern = new group(
	"Green Lanterns", 
	"In brightest day, in blackest night, No evil shall escape my sight, Let those who worship evil's might, Beware my power... Green Lantern's Light! ", 
	"imgs/portraits/corpsIcons/willicon.png",
	"imgs/corpsImg/willpowersmall.png", 
	"Chastened by the failure of The Manhunters, the Guardians decided that their newest force of soldiers for good would consist of living beings, ones who had free will and \
	strong moral character. To arm this new legion of celestial knights, the Guardians created the Power Rings, rings of inconceivably advanced technology that allowed their \
	wearers to project green beams of energy with which the bearer could conjure objects of any size or shape, limited only by his or her imagination and willpower. Although \
	the connection between the Guardian Oans and the origin of the Green Lantern symbol has yet to be clarified, it has been revealed that the lantern itself has its roots in\
	the first life in the universe. Allegedly, the first life in the galaxy emerged on an unnamed foggy world, and when they developed a police force the first in the universe \
	- the constabulary carried a lantern lit with a green chemical flame, hence a corp of Green Lanterns. It is believed that this ideal was adopted and spread throughout the \
	galaxy as a symbol for law and justice and its ability to pierce confusion and uncertainty, eventually resulting in the formation of the Green Lantern Corps, with \
	requisite power rings and lantern-shaped batteries along traditional lines."
)

var yellowLantern = new group(
	"Sinestro Corps",
	"In blackest day, in brightest night, Beware your fears made into light. Let those who try to stop what's right Burn like my power Sinestro's might!",
	"imgs/portraits/corpsIcons/fearicon.png",
	"imgs/corpsImg/fearsmall.png",
	"The Sinestro Corps is one of the nine Lantern Corps that draw power from the Emotional Electromagnetic Spectrum. They were created by the villain Sinestro to oppose \
	the Green Lantern Corps, and bring order to the universe in a way which the guardians never tried; though fear. Their color is \"yellow\" and their power rings are fueled \
	by fear, so their members are selected for their ability to inspire great fear in others. Their home planet is Qward and their representative entity is Parallax. "
)

var blueLantern = new group(
	"Blue Lanterns", 
	"In fearful day, in raging night, With strong hearts full, our souls ignite. When all seems lost in the War of Light, Look to the stars, for hope burns bright!" , 
	"imgs/portraits/corpsIcons/hopeicon.png",
	"imgs/corpsImg/hopesmall.png",
	"Created to bring hope to the future in the light of so much destruction, when good faces overwhelming odds. At the end of the war with the Sinestro Corps and after being \
	exiled from the Guardians of the Universe for their individuality, Ganthet and Sayd started the Blue Lantern Corps by creating a Blue Power Ring out of their hope for the \
	future. The Blue Lantern Power Rings are powered by the emotion of Hope. The Blue Lantern Corps recruitment is unique in that it takes a process of three days in which the \
	being in question is picked by the most recently recruited lantern. Then they are taken to the Blue Lantern Headquarters on Odym. Once on Odym they are explained to, in great \
	length what it means to wield the power of hope. They learn that it is a responsibility to give one's self to the universe. When they agree to the terms and conditions of \
	wielding such power, The Guardians of Hope bestow the ring upon them." 
)

var redLantern = new group(
	"Red Lanterns",
	"With blood and rage of crimson red, Ripped from a corpse so freshly dead, Together with our hellish hate, We'll burn you all--that is your fate!",
	"imgs/portraits/corpsIcons/wrathicon.png",
	"imgs/corpsImg/wrathsmall.png",
	"The Red Lantern Corps was formed by Atrocitus because of the rage he felt over being imprisoned and because due justice was not brought to the Guardians of the Universe, \
	whose Manhunters had slaughtered almost the entirety of his Space Sector. Given that a Red Lanterns's rage is centrally felt over loss, he likely feels rage specifically \
	over the loss of his sector, or the billions of years of his life lost because of his imprisonment. "
)

var violetLantern = new group(
	"Star Sapphire",
	"For hearts long lost and full of fright, For those alone in blackest night, Accept our ring and join our fight, Love conquers all-- with violet light!",
	"imgs/portraits/corpsIcons/loveicon.png",
	"imgs/corpsImg/lovesmall.png",
	"The Star Sapphire Corps is one of the Lantern Corps that harness the emotional spectrum. This all-female corps uses the violet light of love. They are occasional allies of \
	the Green Lantern Corps, but are primarily driven by their own agenda. The Star Sapphires hail from Sector 1416 and were founded and lead by the Zamarons: Oans who, after \
	migrating to Zamaron, found a parasitic crystal which they shaped into several Star Sapphires. These were used to empower females who had been loved and spurned, providing \
	them the opportunity for revenge. After realizing the power of the Star Sapphire was too great for them to control, the Zamarons forged a Violet Power Battery and power ring \
	out of the Star Sapphire gem. Violet power rings are fueled by the emotion of love, one of the two emotions, with the other being rage, that most influence their user. "
)
var indigoLantern = new group(
	"Indigo Tribe",
	"Tor lorek san, bor nakka mur, Natromo faan tornek wot ur. Ter Lantern ker lo Abin Sur, Taan lek lek nok--Formorrow Sur! ------ ------ In sorrowful day, in misfortunate night, \
	We help those, who need our might, With the lantern power of Abin Sur, We rid your misery-- With compassionate might!",
	"imgs/portraits/corpsIcons/compassionicon.png",
	"imgs/corpsImg/compassionsmall.png",
	"The Indigo Tribe was a mysterious group that had harnessed the power of the Indigo Light of Compassion from the Emotional Spectrum. Their creation was traced to the Green \
	Lantern Abin Sur during his service to the Green Lantern Corps. At some point, he came to the planet Nok that was being besieged by aggressive explorers that had enslaved \
	the native inhabitants. Amongst these was a being called Natromo who along with his people had uncovered a wellspring to the power of compassion within a cavern where it \
	emerged from an unknown source from deep within the planet. They coated their weapons in the Indigo Light, and realized that their attackers struck by it suddenly felt \
	remorse as well as regret over their actions. After their defeat, Abin Sur and Natromo decided to harness the Indigo Light of Compassion"
)

var guardians = new group(
	"Guardians",
	"",
	"imgs/portraits/guardians.png",
	"imgs/corpsImg/guardianbanner.png",
	"The Guardians of the Universe evolved on the planet Maltus, and were possibly the first intelligent life forms in the Universe. At this time they were tall grayish blue \
	humanoids with black hair. At some point they came into contact with symbiote beings that existed on Maltus, and became immortal, super intelligent, and gained inherent\
	God like abilities. They became scientists and thinkers, experimenting on the worlds around them. One experiment led to the creation of a new species, the Psions. In a \
	pivotal moment, billions of years ago, a Maltusian named Krona used time-bending technology to observe the beginning of the Universe, despite the legends regarding to \
	this. However, a cosmic lightning bolt hit the machine, causing an explosion. This experiment unleashed evil across the universe and created the Multiverse, and the evil \
	Anti Matter universe. It was later revealed that the same experiment flooded the beginning of the Universe with entropy causing it \"to be born old\". Feeling responsible \
	for Krona's actions, the Maltusians relocated to the planet Oa (at \"the center of the Universe\") and became the Guardians of the Universe. Their goal was simple: combat \
	evil and create an orderly universe. And they acted quickly on that goal. During this period they also changed to their current appearance. "
)

var whiteLantern = new group(
	"White Lanterns",
	"",
	"imgs/portraits/corpsIcons/lifeicon.png",
	"imgs/corpsImg/lifesmall.png",
	"The White Lantern Rings first appeared at the end of the Blackest Night saga, as the rings destroyed the Black Lantern Rings controlling the still living heroes, as well as \
	resurrecting certain heroes and villains that were previously dead. White Lantern Rings work just like any other rings, having the same powers. However, Sinestro and Hal Jordan \
	are the only ones shown using the rings' powers to form constructs. Since White is a neutral color in the Electromagnetic Spectrum, it can be assumed that White can overwrite \
	the powers of all other Power Rings if it chooses to. After Sinestro had the Entity removed from him and Hal Jordan took his place as host of the Entity, the White Light\
	overwrote his Green Lantern Ring, along with the rings of any other corps (including Black Lantern Corpsmen). The white rings act as a conduit for the power of the white\
	light of creation. As such they can project and manipulate the white light."
)

var orangeLantern = new group(
	"Agent Orange",
	"",
	"imgs/portraits/corpsIcons/greedicon.png",
	"imgs/corpsImg/greedsmall.png",
	"Millennia ago, (long even for beings as ancient as the Guardians) the Guardians of the Universe went to war with the Keeper of the Orange Light, in that war their forces were\
	nearly destroyed and peace was only reached by making a pact with the Keeper of the Orange Light, and it was covered by a peace treaty with the Spider Guild. The pact stipulated\
	that as long as the Keeper of the Orange Light kept it buried deep beneath the surface of Okaara, then the Vega system would be outside the jurisdiction of the Green \
	Lantern Corps. An Orange Lantern Ring is powered by avarice, or greed. The wielders of the Orange Power Rings are covered in a deeper aura than members of other Corps.\
	According to Ganthet, \"the orange light of avarice will be discovered and manipulated by a being whose greed knows no bounds\". The Controllers, an off-shoot of the Oan race,\
	were searching the Vega star-system for the orange light in order to create their own Corps"
)

var groups = [greenLantern, blueLantern, yellowLantern, redLantern, violetLantern, indigoLantern, guardians, whiteLantern, orangeLantern]

//* Locations */

function episode(name) {
	this.name = name;
}

var episode1 = new episode(
"Sinestros Law - Fordged"
)

var episode2= new episode(
"Sinestros Law part 1 - The Last Lantern"
)

var episode3 = new episode(
"Sinestros Law part 2 - Recon"
)

var episode4 = new episode(
"Sinestros Law part 3 - Innocents Lost"
)

var episode5 = new episode(
"Sinestros Law part 4 - The Fear Mechine"
)

var episode6 = new episode(
"Sinestros Law part 5 - Joining Forces"
)


var episode7 = new episode(
"Sinestros Law part 6 - World of War"
)

var episode8 = new episode(
"Conclusion - Final Flight"
)

var episodes = [episode1, episode2, episode3, episode4, episode5, episode6, episode7, episode8]



