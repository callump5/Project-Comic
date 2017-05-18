// Characters:
function character(name, group, imgicon, img, info) {
	this.name = name;
	this.group = group;
	this.imgicon = imgicon;
	this.img = img
	this.info = info;
}

var halJordan = new character(
	"Hal Jordan",
	"Green Lantern",
	"imgs/portraits/halicon.png", 
	"imgs/image/hal.png",
	"Hal Jordan was born in Coast City to Martin Jordan and Jessica Jordan, The middle child of three children. He lived with his older brother Jack and a younger brother Jim. As a young child, he idolized his father, a test pilot who worked for Ferris Aircraft. At a very young age, he had to face his greatest fears when his father died in a plane crash right before his eyes. Despite his family's wishes, he followed in his father's footsteps and eventually joined the United States Air Force on his 18th birthday, turning up that very morning outside the Armed Forces Career Center, before it had even opened"
)

var sinestro = new character(
	"Sinestro", 
	"Yellow Lantern",
	"imgs/portraits/sinestro.png", 
	"imgs/image/sinestro.png",
	"haal Sinestro of Korugar is the arch-nemesis of Green Lantern. At one point the greatest member of the Green Lantern Corps, he was corrupted by his power and exiled for crimes against his own people. He now seeks to impose his own order and control onto the universe, employing a yellow power ring to combat the green he has grown to despise. His prowess and ruthlessness have made him one of the most feared villains in existence, and eventually he establishes his own Sinestro Corps. "
)

var saintWalker = new character(
	"Saint Walker", 
	"Blue Lantern",
	"imgs/portraits/StWalker.png",
	"imgs/image/walker.png",
	"The Saint"
)

var carolFarris = new character(
	"Carol Farris",
	"Pink Lanterns",
	"imgs/portraits/carolicon.png",
	"imgs/image/carol.png",
	""
)

var lyssa = new character(
	"Lyssa",
	"",
	"imgs/portraits/lyssaicon.png",
	"imgs/image/lyssa.png",
	""
)

var kilowog = new character(
	"Kilowog",
	"",
	"imgs/portraits/kilowogicon.png",
	"imgs/image/kilowog.png",
	""
)

var kyleRayner = new character(
	"Kyle Rayner",
	"White Lantern",
	"imgs/portraits/kyleicon.png",
	"imgs/image/kyle.png",
	""
)

var jonStuart = new character(
	"Jon Stuart",
	"Green Lantern",
	"imgs/portraits/johnicon.png", 
	"imgs/image/john.png",
	""
)

var guyGardener = new character(
	"Guy Gardener",
	"Green Lantern",
	"imgs/portraits/guyicon.png",
	"imgs/image/guy.png",
	""
)

var ganthet = new character(
	"Ganthet",
	"Guardian",
	"imgs/portraits/gantheticon.png",
	"imgs/image/ganthet.png",
	""
)

var sayd = new character(
	"Sayd",
	"Guardian",
	"imgs/portraits/saydicon.png",
	"imgs/image/sayd.png",
	""
)

var jessicaCruz = new character(
	"Jessica Cruz",
	"Green Lantern",
	"imgs/portraits/jessicon.png",
	"imgs/image/jess.png",
	""
)

var paralax = new character(
	"Paralax Entity",
	"",
	"imgs/portraits/paraicon.png",
	"imgs/image/para.png",
	""
)

var indigo1 = new character(
	"Indigo 1",
	"Indigo Tribe",
	"imgs/portraits/indigoicon.png",
	"imgs/image/indigo.png",
	""
)

var larfleeze = new character(
	"Larfleeze",
	"Agent Orange",
	"imgs/portraits/larfleezeicon.png",
	"imgs/image/larfleeze.png",
	""
)

var soranik = new character(
	"Soranil",
	"Yellow Lantern",
	"imgs/portraits/sorinakicon.png",
	"imgs/image/sorinak.png",
	""
)

var adminLash = new character(
	"Administer Lash",
	"The Sacrement",
	"imgs/portraits/lashicon.png",
	"imgs/image/lash.png",
	""
)

var arkillo = new character(
	"Arkillo",
	"Yellow Lantern",
	"imgs/portraits/arkillo.png",
	"imgs/image/arkillo.png",
	""
)

var mogo = new character(
	"Mogo",
	"Green Lantern",
	"imgs/portraits/mogoicon.png",
	"imgs/image/mogo.png",
	""
)

var characters = [halJordan, sinestro, saintWalker, carolFarris, lyssa, kilowog, kyleRayner, jonStuart, guyGardener, ganthet, sayd, jessicaCruz, paralax, indigo1, larfleeze, soranik, adminLash, arkillo, mogo]

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
	"Led by the a group of immortals known as the guardians, the Green Lanterns are bound to protect the universe from evil. Each Green Lantern is given a power ring, a weapon granting the use of incredible abilities that are directed by the wearer's own willpower."
)
var yellowLantern = new group(
	"Yellow Lanterns",
	"In blackest day, in brightest night, Beware your fears made into light. Let those who try to stop what's right Burn like my power Sinestro's might!",
	"imgs/portraits/corpsIcons/fearicon.png",
	"imgs/corpsImg/fearsmall.png",
	"Born out of fear and championed by the greatest Green Lantern - Sinestro. The yellow Lanterns use their power rings to harness fear and spread it across the cosmos"
)

var blueLantern = new group(
	"Blue Lantern", 
	"In fearful day, in raging night, With strong hearts full, our souls ignite. When all seems lost in the War of Light, Look to the stars, for hope burns bright!" , 
	"imgs/portraits/corpsIcons/hopeicon.png",
	"imgs/corpsImg/hopesmall.png",
	"When hope seemed to be no more, two guardians by the name of ganeth and sayd, created a blue power ring out of their hope for the future. The ring sought out Saint Walker, who then procedded to build the Blue Lantern corp"
)

var redLantern = new group(
	"Red Lantern",
	"With blood and rage of crimson red, Ripped from a corpse so freshly dead, Together with our hellish hate, We'll burn you all--that is your fate!",
	"imgs/portraits/corpsIcons/wrathicon.png",
	"imgs/corpsImg/wrathsmall.png",
	"The Red Lantern Corps was formed by Atrocitus because of the rage he felt over being imprisoned and because due justice was not brought to the Guardians of the Universe, whose Manhunters had slaughtered almost the entirety of his Space Sector. Given that a Red Lanterns's rage is centrally felt over loss, he likely feels rage specifically over the loss of his sector, or the billions of years of his life lost because of his imprisonment. "
)

var violetLantern = new group(
	"Star Sapphire",
	"For hearts long lost and full of fright, For those alone in blackest night, Accept our ring and join our fight, Love conquers all-- with violet light!",
	"imgs/portraits/corpsIcons/loveicon.png",
	"imgs/corpsImg/lovesmall.png",
	"Formed by the Zamarons, the Violet Lanterns chose Carol Farris of Earth to be their champion after showing her undying love for Hal Jordan even in the face of death"
)

var indigoLantern = new group(
	"Indigo Tribe",
	"Tor lorek san, bor nakka mur, Natromo faan tornek wot ur. Ter Lantern ker lo Abin Sur, Taan lek lek nok--Formorrow Sur! ------ ------ In sorrowful day, in misfortunate night, We help those, who need our might, With the lantern power of Abin Sur, We rid your misery-- With compassionate might!",
	"imgs/portraits/corpsIcons/compassionicon.png",
	"imgs/corpsImg/compassionsmall.png",
	""
)

var guardians = new group(
	"Guardians",
	"",
	"imgs/portraits/guardians.png",
	"imgs/corpsImg/guardianbanner.png",
	""
)

var whiteLantern = new group(
	"White Lantern",
	"",
	"imgs/portraits/corpsIcons/lifeicon.png",
	"imgs/corpsImg/lifesmall.png",
	""
)

var orangeLantern = new group(
	"Agent Orange",
	"",
	"imgs/portraits/corpsIcons/greedicon.png",
	"imgs/corpsImg/greedsmall.png",
	""
)






var groups = [greenLantern, blueLantern, yellowLantern, redLantern, violetLantern, indigoLantern, guardians, whiteLantern, orangeLantern]

//* Locations */

function episode(name, img, info) {
	this.name = name;
	this.img = img;
}

var episode0 = new episode(
)
