// Characters:
function character(name, group, img, info) {
	this.name = name;
	this.group = group;
	this.img = img;
	this.info = info;
}


var halJordan = new character("Hal Jordan", "Green Lantern", "imgs/portraits/hal.png", "Hal Jordan was born in Coast City to Martin Jordan and Jessica Jordan, the middle child of three children. He lived with his older brother Jack and a younger brother Jim. As a young child, he idolized his father, a test pilot who worked for Ferris Aircraft. At a very young age, he had to face his greatest fears when his father died in a plane crash right before his eyes. Despite his family's wishes, he followed in his father's footsteps and eventually joined the United States Air Force on his 18th birthday, turning up that very morning outside the Armed Forces Career Center, before it had even opened")
var sinestro = new character("Sinestro", "Yellow Lantern", "imgs/portraits/sinestro.png", "haal Sinestro of Korugar is the arch-nemesis of Green Lantern. At one point the greatest member of the Green Lantern Corps, he was corrupted by his power and exiled for crimes against his own people. He now seeks to impose his own order and control onto the universe, employing a yellow power ring to combat the green he has grown to despise. His prowess and ruthlessness have made him one of the most feared villains in existence, and eventually he establishes his own Sinestro Corps. ")
var saintWalker = new character("Saint Walker", "Blue Lantern", "imgs/portraits/StWalker.png", "The Saint")
var carolFarris = new character("Carol Farris", "Purple Lantern", "", "The Lover")
var razor = new character("Razor", "Red Lantern", "", "The Hated")
var ganeth1 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth2 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth3 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth4 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth5 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth6 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth7 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth8 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth9 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth10 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth11 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth12 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth13 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth14 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth15 = new character("Ganeth", "guardian", "", "The Wise")
var ganeth16 = new character("Ganeth", "guardian", "", "The Wise")



var characters = [halJordan, sinestro, saintWalker, carolFarris, razor, ganeth1, ganeth2, ganeth3, ganeth4, ganeth5, ganeth6, ganeth7, ganeth8, ganeth9, ganeth10, ganeth11, ganeth12, ganeth13, ganeth14, ganeth15, ganeth16]

//Groups:
function group(name, oath, img, info) {
	this.name = name;
	this.oath = oath
	this.img = img;
	this.info = info;
}

var greenLantern = new group("Green Lanterns", "Beware Green Lanterns Light", "imgs/portraits/hal.png", "Will Power")
var blueLantern = new group("Blue Lantern", "Blue Lanterns Light!", "imgs/portraits/StWalker.png", "The Saint")
var groups = [greenLantern, blueLantern]
