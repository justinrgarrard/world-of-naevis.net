///////////////////////////////////////////////////////////////////////////////
// Globals ////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Items
ITEMS = {
  ammunition: { weight: 1, value: 1, title: "ammunition (20)" },
  backpack: { weight: 5, value: 2, title: "backpack" },
  battleaxe: { weight: 1, value: 10, title: "battleaxe" },
  boots_of_leaping: { weight: 1, value: 50, title: "<i>boots of leaping</i>" },
  breastplate: { weight: 20, value: 50, title: "breastplate" },
  bullseye_lantern: { weight: 2, value: 5, title: "bullseye lantern" },
  chainmail: { weight: 55, value: 50, title: "chain mail" },
  chainshirt: { weight: 20, value: 25, title: "chain shirt" },
  dagger: { weight: 1, value: 1, title: "dagger" },
  dagger2: { weight: 2, value: 2, title: "dagger (2)" },
  dagger5: { weight: 5, value: 5, title: "dagger (5)" },
  darts: { weight: 5, value: 1, title: "darts (20)" },
  flintlock_pistol: { weight: 2, value: 50, title: "flintlock pistol" },
  halberd: { weight: 6, value: 10, title: "halberd" },
  holy_symbol: { weight: 1, value: 10, title: "holy symbol" },
  longbow: { weight: 2, value: 10, title: "longbow" },
  longsword: { weight: 3, value: 10, title: "longsword" },
  hand_crossbow: { weight: 3, value: 10, title: "hand crossbow" },
  mace: { weight: 4, value: 5, title: "mace" },
  javelin: { weight: 2, value: 1, title: "javelin" },
  javelin3: { weight: 6, value: 3, title: "javelin (3)" },
  javelin5: { weight: 10, value: 5, title: "javelin (5)" },
  mage_dagger: { weight: 1, value: 50, title: "<i>mage dagger</i>" },
  mist_dagger: { weight: 1, value: 50, title: "<i>mist dagger</i>" },
  mythril_longsword: { weight: 3, value: 60, title: "mythril longsword" },
  oil3: { weight: 3, value: 3, title: "flask of oil (3)" },
  potion_of_healing: { weight: 1, value: 50, title: "potion of healing" },
  pouch: { weight: 1, value: 1, title: "pouch" },
  rapier: { weight: 2, value: 10, title: "rapier" },
  rations: { weight: 1, value: 1, title: "rations (3)" },
  ringmail: { weight: 40, value: 25, title: "ring mail" },
  robes: { weight: 4, value: 1, title: "robes" },
  scroll_sleep: { weight: 1, value: 50, title: "scroll of sleep" },
  shield: { weight: 6, value: 5, title: "shield" },
  shortbow: { weight: 2, value: 5, title: "shortbow" },
  shortsword: { weight: 2, value: 5, title: "shortsword" },
  sleeping_powder: { weight: 1, value: 50, title: "sleeping powder (3)" },
  sparking_ammo: { weight: 1, value: 50, title: "sparking ammunition (20)" },
  spear: { weight: 3, value: 5, title: "spear" },
  spellbook: { weight: 1, value: 25, title: "spellbook" },
  studded_leather: { weight: 13, value: 10, title: "studded leather" },
  thieves_tools: { weight: 1, value: 10, title: "thieves' tools" },
  thunderbomb: { weight: 5, value: 50, title: "thunderbomb" },
  tinderbox: { weight: 1, value: 1, title: "tinderbox" },
  torches: { weight: 5, value: 1, title: "torches (5)" },
  wand: { weight: 1, value: 10, title: "wand" },
  warhammer: { weight: 2, value: 10, title: "warhammer" },
};

CONTAINERS = {
  backpack: { capacity: "30", title: "backpack" },
  pouch: { capacity: "06", title: "pouch" },
  worn: { capacity: "--", title: "worn" },
};

// Classes.
// Human, Mountain Dwarf
const VANGUARD = {
  ability_scores: { STR: 15, DEX: 14, CON: 13, WIS: 12, INT: 8, CHA: 10 },
  armor: ["light", "medium", "heavy", "shields"],
  cantrips: [],
  class: "fighter",
  hp: 10,
  expertise: [],
  features: ["fighting style: defense", "second wind"],
  languages: [],
  resistances: [],
  skills: ["athletics", "intimidation"],
  spells: [],
  title: "vanguard",
  tools: [],
  weapons: ["simple", "martial"],
  writeup:
    "You are a Vanguard, a warrior that can march unflinchingly into danger.",
  races: ["human", "mountain dwarf"],
  inv_worn: [
    ITEMS.javelin5,
    ITEMS.shield,
    ITEMS.breastplate,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [],
  inv_backpack: [ITEMS.rations, ITEMS.torches, ITEMS.tinderbox],
  ability_proficiencies: ["STR", "CON"],
};

// Human, High Elf
const FENCER = {
  ability_scores: { STR: 10, DEX: 15, CON: 14, WIS: 8, INT: 13, CHA: 12 },
  armor: ["light", "medium", "heavy", "shields"],
  cantrips: [],
  class: "fighter",
  hp: 10,
  expertise: [],
  features: ["fighting style: dueling", "second wind"],
  languages: [],
  resistances: [],
  skills: ["athletics", "acrobatics"],
  spells: [],
  title: "fencer",
  tools: [],
  weapons: ["simple", "martial"],
  writeup: "You are a Fencer, a warrior trained to fight in high-stakes duels.",
  races: ["human", "high elf"],
  inv_worn: [
    ITEMS.rapier,
    ITEMS.dagger2,
    ITEMS.studded_leather,
    ITEMS.shield,
    ITEMS.longbow,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [ITEMS.ammunition, ITEMS.sparking_ammo],
  inv_backpack: [ITEMS.rations, ITEMS.torches, ITEMS.tinderbox],
  ability_proficiencies: ["STR", "CON"],
};

// Hill Dwarf
const EXORCIST = {
  ability_scores: { STR: 15, DEX: 8, CON: 14, WIS: 13, INT: 12, CHA: 10 },
  armor: ["light", "medium", "heavy", "shields"],
  cantrips: [],
  class: "cleric",
  hp: 8,
  expertise: [],
  features: ["disciple of life"],
  languages: [],
  resistances: [],
  skills: ["medicine", "history"],
  spells: ["bless", "cure wounds"],
  title: "exorcist",
  tools: [],
  weapons: ["simple"],
  writeup: "You are an Exorcist, a holy warrior that purifies evil spirits.",
  races: ["hill dwarf"],
  inv_worn: [
    ITEMS.chainmail,
    ITEMS.warhammer,
    ITEMS.shield,
    ITEMS.holy_symbol,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [],
  inv_backpack: [ITEMS.rations],
  ability_proficiencies: ["CHA", "WIS"],
};

// Variant
const KNIGHT = {
  ability_scores: { STR: 16, DEX: 8, CON: 14, WIS: 14, INT: 10, CHA: 12 },
  armor: ["light", "medium", "heavy", "shields"],
  cantrips: [],
  class: "cleric",
  hp: 8,
  expertise: [],
  features: [
    "disciple of life",
    "fighting style: defense",
    "feat: fighter multiclass",
  ],
  languages: [],
  resistances: [],
  skills: ["athletics", "medicine", "persuasion"],
  spells: ["bless", "cure wounds"],
  title: "knight",
  tools: [],
  weapons: ["simple"],
  writeup: "You are a Knight, a holy warrior with a divine gift.",
  races: ["variant"],
  inv_worn: [
    ITEMS.chainmail,
    ITEMS.mace,
    ITEMS.shield,
    ITEMS.holy_symbol,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [],
  inv_backpack: [ITEMS.rations],
  ability_proficiencies: ["CHA", "WIS"],
};

// Human, Hill Dwarf, Wood Elf
const RAIDER = {
  ability_scores: { STR: 10, DEX: 15, CON: 14, WIS: 13, INT: 8, CHA: 12 },
  armor: ["light"],
  cantrips: [],
  class: "rogue",
  hp: 8,
  expertise: ["perception", "stealth"],
  features: ["sneak attack"],
  languages: [, "cant"],
  resistances: [],
  skills: ["acrobatics", "perception", "sleight of hand", "stealth"],
  spells: [],
  title: "raider",
  tools: ["thieves'"],
  weapons: ["simple", "rogue"],
  writeup:
    "You are a Raider, a specialist in looting ruins and robbing graves.",
  races: ["human", "hill dwarf", "wood elf"],
  inv_worn: [
    ITEMS.dagger5,
    ITEMS.studded_leather,
    ITEMS.boots_of_leaping,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [],
  inv_backpack: [
    ITEMS.rations,
    ITEMS.thieves_tools,
    ITEMS.bullseye_lantern,
    ITEMS.oil3,
  ],
  ability_proficiencies: ["DEX", "INT"],
};

// Human, Stout Halfling
const BANDIT = {
  ability_scores: { STR: 14, DEX: 15, CON: 13, WIS: 12, INT: 8, CHA: 10 },
  armor: ["light"],
  cantrips: [],
  class: "rogue",
  hp: 8,
  expertise: ["athletics", "acrobatics"],
  features: ["sneak attack"],
  languages: [, "cant"],
  resistances: [],
  skills: ["athletics", "acrobatics", "perception", "stealth"],
  spells: [],
  title: "bandit",
  tools: ["thieves'"],
  weapons: ["simple", "rogue"],
  writeup: "You are a Bandit, a fleet-footed warrior specialized in ambushes.",
  races: ["human", "stout halfling"],
  inv_worn: [
    ITEMS.shortsword,
    ITEMS.shortsword,
    ITEMS.shortbow,
    ITEMS.studded_leather,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [ITEMS.sparking_ammo, ITEMS.ammunition],
  inv_backpack: [
    ITEMS.rations,
    ITEMS.thieves_tools,
    ITEMS.bullseye_lantern,
    ITEMS.oil3,
  ],
  ability_proficiencies: ["DEX", "INT"],
};

// Human or Lightfoot Halfling
const DESPERADO = {
  ability_scores: { STR: 10, DEX: 15, CON: 14, WIS: 8, INT: 12, CHA: 13 },
  armor: ["light"],
  cantrips: [],
  class: "rogue",
  hp: 8,
  expertise: ["stealth", "deception"],
  features: ["sneak attack"],
  languages: [, "cant"],
  resistances: [],
  skills: ["deception", "persuasion", "sleight of hand", "stealth"],
  spells: [],
  title: "desperado",
  tools: ["thieves'"],
  weapons: ["simple", "rogue"],
  writeup:
    "You are a Desperado, a charming marksman that's quick on their feet.",
  races: ["human", "lightfoot halfling"],
  inv_worn: [
    ITEMS.dagger2,
    ITEMS.hand_crossbow,
    ITEMS.studded_leather,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [ITEMS.ammunition, ITEMS.sparking_ammo],
  inv_backpack: [
    ITEMS.rations,
    ITEMS.thieves_tools,
    ITEMS.bullseye_lantern,
    ITEMS.oil3,
  ],
  ability_proficiencies: ["DEX", "INT"],
};

// Human or Lightfoot Halfling
const WITCH = {
  ability_scores: { STR: 8, DEX: 14, CON: 12, WIS: 10, INT: 15, CHA: 13 },
  armor: [],
  cantrips: [],
  class: "wizard",
  hp: 6,
  expertise: [],
  features: ["arcane recovery"],
  languages: [],
  resistances: [],
  skills: ["arcana", "investigation"],
  spells: [],
  title: "witch",
  tools: [],
  weapons: ["wizard"],
  writeup: "You are a Witch, an enchanter skilled with magic items.",
  races: ["human", "lightfoot halfling"],
  inv_worn: [ITEMS.mist_dagger, ITEMS.wand, ITEMS.backpack, ITEMS.pouch],
  inv_pouch: [],
  inv_backpack: [ITEMS.rations, ITEMS.spellbook],
  ability_proficiencies: ["INT", "WIS"],
};

// Mountain Dwarf
const WARDER = {
  ability_scores: { STR: 14, DEX: 12, CON: 13, WIS: 10, INT: 15, CHA: 8 },
  armor: [],
  cantrips: [],
  class: "wizard",
  hp: 6,
  expertise: [],
  features: ["arcane recovery"],
  languages: [],
  resistances: [],
  skills: ["arcana", "history"],
  spells: [],
  title: "warder",
  tools: [],
  weapons: ["wizard"],
  writeup:
    "You are a Warder, an armored mage that fights with steel and spells.",
  races: ["mountain dwarf"],
  inv_worn: [
    ITEMS.battleaxe,
    ITEMS.breastplate,
    ITEMS.wand,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [],
  inv_backpack: [ITEMS.rations, ITEMS.spellbook],
  ability_proficiencies: ["INT", "WIS"],
};

// High Elf or Wood Elf
const SPELLSWORD = {
  ability_scores: { STR: 13, DEX: 14, CON: 12, WIS: 8, INT: 15, CHA: 10 },
  armor: [],
  cantrips: [],
  class: "wizard",
  hp: 6,
  expertise: [],
  features: ["arcane recovery"],
  languages: [],
  resistances: [],
  skills: ["investigation", "nature"],
  spells: [],
  title: "spellsword",
  tools: [],
  weapons: ["wizard"],
  writeup: "You are a Spellsword, a war mage armed with blade and bow.",
  races: ["high elf"],
  inv_worn: [
    ITEMS.shortsword,
    ITEMS.shortbow,
    ITEMS.wand,
    ITEMS.backpack,
    ITEMS.pouch,
  ],
  inv_pouch: [ITEMS.scroll_sleep, ITEMS.ammunition],
  inv_backpack: [ITEMS.rations, ITEMS.spellbook],
  ability_proficiencies: ["INT", "WIS"],
};

// Variant Human
const MAGE_KNIGHT = {
  ability_scores: { STR: 16, DEX: 8, CON: 14, WIS: 12, INT: 14, CHA: 10 },
  armor: ["light", "medium", "heavy", "shields"],
  cantrips: ["light", "fire bolt", "minor illusion"],
  class: "fighter",
  hp: 10,
  expertise: [],
  features: [
    "fighting style: defense",
    "second wind",
    "feat: wizard multiclass",
  ],
  languages: [],
  resistances: [],
  skills: ["athletics", "history", "arcana"],
  spells: [],
  title: "mage knight",
  tools: [],
  weapons: ["simple", "martial"],
  writeup: "You are a Mage Knight, an expert warrior trained in arcane magic.",
  races: ["variant"],
  inv_worn: [
    ITEMS.halberd,
    ITEMS.chainmail,
    ITEMS.backpack,
    ITEMS.pouch,
    ITEMS.wand,
  ],
  inv_pouch: [],
  inv_backpack: [ITEMS.rations],
  ability_proficiencies: ["STR", "CON"],
};

const CLASSES = {
  bandit: BANDIT,
  desperado: DESPERADO,
  exorcist: EXORCIST,
  fencer: FENCER,
  knight: KNIGHT,
  vanguard: VANGUARD,
  raider: RAIDER,
  spellsword: SPELLSWORD,
  warder: WARDER,
  witch: WITCH,
  "mage knight": MAGE_KNIGHT,
};

// Races.
const MOUNTAIN_DWARF = {
  ability_scores: { STR: 2, DEX: 0, CON: 2, WIS: 0, INT: 0, CHA: 0 },
  armor: ["light", "medium"],
  cantrips: [],
  expertise: [],
  features: ["stonecunning"],
  languages: ["dwarven"],
  resistances: ["poison"],
  skills: [],
  title: "mountain dwarf",
  race: "dwarf",
  subrace: "mountain",
  tools: ["smith"],
  weapons: ["dwarf"],
  writeup: "You are a dwarf from a well-respected clan.",
  mv: 25,
};

const HILL_DWARF = {
  ability_scores: { STR: 0, DEX: 0, CON: 2, WIS: 1, INT: 0, CHA: 0 },
  armor: [],
  cantrips: [],
  expertise: [],
  features: ["stonecunning", "dwarven toughness"],
  languages: ["dwarven"],
  resistances: ["poison"],
  skills: [],
  title: "hill dwarf",
  race: "dwarf",
  subrace: "hill",
  tools: ["brewer"],
  weapons: ["dwarf"],
  writeup: "You are a dwarf from a fallen clan.",
  mv: 25,
};

const HIGH_ELF = {
  ability_scores: { STR: 0, DEX: 2, CON: 0, WIS: 0, INT: 1, CHA: 0 },
  armor: [],
  cantrips: ["fire bolt"],
  expertise: [],
  features: ["trance"],
  languages: ["elven", "cant"],
  resistances: ["charm", "sleep (immunity)"],
  skills: ["perception"],
  title: "high elf",
  race: "elf",
  subrace: "high",
  tools: [],
  weapons: ["elf"],
  writeup: "You are an elf of noble lineage.",
  mv: 30,
};

const WOOD_ELF = {
  ability_scores: { STR: 0, DEX: 2, CON: 0, WIS: 1, INT: 0, CHA: 0 },
  armor: [],
  cantrips: [],
  expertise: [],
  features: ["mask of the wild", "trance"],
  languages: ["elven"],
  resistances: ["charm", "sleep (immunity)"],
  skills: ["perception"],
  title: "wood elf",
  race: "elf",
  subrace: "wood",
  tools: [],
  weapons: ["elf"],
  writeup: "You are an elf of common birth.",
  mv: 35,
};

const STOUT_HALFLING = {
  ability_scores: { STR: 0, DEX: 2, CON: 1, WIS: 0, INT: 0, CHA: 0 },
  armor: [],
  cantrips: [],
  expertise: [],
  features: ["lucky", "small"],
  languages: ["halfling"],
  resistances: ["fear", "poison"],
  skills: [],
  title: "stout halfling",
  race: "halfling",
  subrace: "stout",
  tools: [],
  weapons: [],
  writeup: "You are a halfling from a militant tribe of raiders and hunters.",
  mv: 25,
};

const LIGHTFOOT_HALFLING = {
  ability_scores: { STR: 0, DEX: 2, CON: 0, WIS: 0, INT: 0, CHA: 1 },
  armor: [],
  cantrips: [],
  expertise: [],
  features: ["lucky", "small", "halfling nimbleness"],
  languages: ["halfling"],
  resistances: ["fear"],
  skills: [],
  title: "lightfoot halfling",
  race: "halfling",
  subrace: "lightfoot",
  tools: [],
  weapons: [],
  writeup: "You are a halfling from a tribe of merchants and peddlers.",
  mv: 25,
};

const HUMAN = {
  ability_scores: { STR: 1, DEX: 1, CON: 1, WIS: 1, INT: 1, CHA: 1 },
  armor: [],
  cantrips: [],
  expertise: [],
  features: [],
  languages: ["sylvan"],
  resistances: [],
  skills: [],
  title: "human",
  race: "human",
  subrace: "standard",
  tools: [],
  weapons: [],
  writeup: "You are a human from the surrounding kingdoms.",
  mv: 30,
};

const VARIANT_HUMAN = {
  ability_scores: { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
  armor: [],
  cantrips: [],
  expertise: [],
  features: [],
  languages: [],
  resistances: [],
  skills: [],
  title: "variant",
  race: "human",
  subrace: "variant",
  tools: [],
  weapons: [],
  writeup:
    "You are a human of some distinction, such as a noble heir or rare prodigy.",
  mv: 30,
};

const RACES = {
  "mountain dwarf": MOUNTAIN_DWARF,
  "hill dwarf": HILL_DWARF,
  "high elf": HIGH_ELF,
  "wood elf": WOOD_ELF,
  "stout halfling": STOUT_HALFLING,
  "lightfoot halfling": LIGHTFOOT_HALFLING,
  human: HUMAN,
  variant: VARIANT_HUMAN,
};

// Backgrounds.
const ALCHEMIST = {
  cantrips: ["poison spray"],
  "cleric cantrips": ["guidance", "light", "spare the dying"],
  expertise: [],
  features: [],
  languages: [],
  resistances: [],
  skills: ["nature", "investigation"],
  title: "alchemist",
  tools: ["alchemist", "herbalist"],
  "wizard cantrips": ["acid splash", "fire bolt", "light"],
  "wizard spellbook": [
    "burning hands",
    "charm person",
    "comprehend languages",
    "detect magic",
    "identify",
    "sleep",
  ],
  ability_proficiencies: [],
  writeup:
    'You came to the Forgotten City to learn the recipe for <a href="../more/loot_tables/panacea">panacea</a>.',
};

const EMISSARY = {
  cantrips: ["thaumaturgy"],
  "cleric cantrips": ["guidance", "light", "sacred flame"],
  expertise: [],
  features: [],
  languages: ["elven", "dwarven"],
  resistances: [],
  skills: ["persuasion", "deception"],
  title: "emissary",
  tools: [],
  "wizard cantrips": ["prestidigitation", "fire bolt", "light"],
  "wizard spellbook": [
    "charm person",
    "comprehend languages",
    "detect magic",
    "disguise self",
    "mage armor",
    "silent image",
  ],
  ability_proficiencies: [],
  writeup: "You were sent to the Forgotten City on behalf of your people.",
};

const EXILE = {
  cantrips: [],
  "cleric cantrips": ["resistance", "light", "thaumaturgy"],
  expertise: [],
  features: [],
  languages: ["cant"],
  resistances: [],
  skills: ["stealth", "survival"],
  title: "exile",
  tools: ["poisoner"],
  "wizard cantrips": ["poison spray", "fire bolt", "light"],
  "wizard spellbook": [
    "detect magic",
    "disguise self",
    "mage armor",
    "magic missile",
    "sleep",
    "thunderwave",
  ],
  ability_proficiencies: ["CON", "DEX"],
  writeup:
    "You were banished to the Forgotten City for your crimes, real or otherwise.",
};

const NOMAD = {
  cantrips: [],
  "cleric cantrips": ["guidance", "light", "resistance"],
  expertise: [],
  features: [],
  languages: [],
  resistances: [],
  skills: ["athletics", "survival"],
  title: "nomad",
  tools: ["herbalist", "instruments"],
  "wizard cantrips": ["mage hand", "fire bolt", "light"],
  "wizard spellbook": [
    "burning hands",
    "comprehend languages",
    "detect magic",
    "silent image",
    "shield",
    "sleep",
  ],
  ability_proficiencies: ["DEX", "WIS"],
  writeup: "You came to the Forgotten City to explore a new frontier.",
};

const PIPER = {
  cantrips: ["minor illusion"],
  "cleric cantrips": ["guidance", "light", "thaumaturgy"],
  expertise: [],
  features: [],
  languages: [],
  resistances: [],
  skills: ["performance", "sleight of hand"],
  title: "piper",
  tools: ["tinker", "instruments"],
  "wizard cantrips": ["dancing lights", "fire bolt", "light"],
  "wizard spellbook": [
    "charm person",
    "comprehend languages",
    "detect magic",
    "disguise self",
    "silent image",
    "thunderwave",
  ],
  ability_proficiencies: [],
  writeup:
    "You came to the Forgotten City to make lucrative connections and impress the right people.",
};

const TREASURE_HUNTER = {
  cantrips: [],
  "cleric cantrips": ["guidance", "light", "resistance"],
  expertise: [],
  features: ["read the room"],
  languages: [],
  resistances: [],
  skills: ["perception", "insight"],
  title: "treasure hunter",
  tools: ["thieves'", "tinker"],
  "wizard cantrips": ["mage hand", "fire bolt", "light"],
  "wizard spellbook": [
    "burning hands",
    "comprehend languages",
    "detect magic",
    "identify",
    "shield",
    "sleep",
  ],
  ability_proficiencies: [],
  writeup:
    "You came to the Forgotten City to acquire incredible riches and unimaginable fame.",
};

const TRUTHSEEKER = {
  cantrips: ["light"],
  "cleric cantrips": ["guidance", "light", "sacred flame"],
  expertise: [],
  features: [],
  languages: ["undercommon", "infernal"],
  resistances: [],
  skills: ["arcana", "history"],
  title: "truthseeker",
  tools: [],
  "wizard cantrips": ["minor illusion", "fire bolt", "prestidigitation"],
  "wizard spellbook": [
    "comprehend languages",
    "detect magic",
    "identify",
    "mage armor",
    "silent image",
    "sleep",
  ],
  ability_proficiencies: [],
  writeup:
    "You came to the Forgotten City to write a book about the strange creatures living within.",
};

const WARLORD = {
  cantrips: [],
  "cleric cantrips": ["spare the dying", "light", "sacred flame"],
  expertise: [],
  features: ["first blood"],
  languages: ["cant"],
  resistances: [],
  skills: ["medicine", "intimidation"],
  title: "warlord",
  tools: ["smith"],
  "wizard cantrips": ["shocking grasp", "fire bolt", "light"],
  "wizard spellbook": [
    "burning hands",
    "detect magic",
    "magic missile",
    "mage armor",
    "shield",
    "thunderwave",
  ],
  ability_proficiencies: [],
  writeup:
    "You came to the Forgotten City to prove yourself against its perils.",
};

const BACKGROUNDS = {
  alchemist: ALCHEMIST,
  emissary: EMISSARY,
  exile: EXILE,
  nomad: NOMAD,
  piper: PIPER,
  "treasure hunter": TREASURE_HUNTER,
  truthseeker: TRUTHSEEKER,
  warlord: WARLORD,
};

const ALL_SKILLS = [
  "athletics",
  "acrobatics",
  "sleight of hand",
  "stealth",
  "arcana",
  "nature",
  "history",
  "religion",
  "medicine",
  "perception",
  "insight",
  "animal handling",
  "survival",
  "persuasion",
  "deception",
  "intimidation",
  "performance",
];

///////////////////////////////////////////////////////////////////////////////
// Helper Functions ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/**
 * Simulate a die roll.
 *
 * @param {number} numSides
 * @returns {number} integer
 */
function randomInt(numSides) {
  return Math.floor(Math.random() * numSides);
}

/**
 * Select a random entry in an array.
 *
 * @param {Array<string>} ar
 * @returns {string} array element
 */
function randomEntry(ar) {
  return ar[randomInt(ar.length)];
}

/**
 *
 * @param {string} str
 * @returns
 */
function toTitleCaseWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 *
 * @param {string} str
 * @returns
 */
function toTitleCase(str) {
  const d = str.split(" ").map((x) => toTitleCaseWord(x));
  return d.join(" ");
}

function joinAndSort(ar1, ar2, ar3) {
  let input = ar2;
  if (ar3) {
    input = ar2.concat(ar3);
  }
  const d = ar1.concat(input);
  let s = [...new Set(d)];
  s.sort();
  return s.join(", ");
}

/**
 *
 * @param {Map<string,number>} base
 * @param {Map<string,number>} racial
 * @returns
 */
function calculateAbilityScores(c, race, background) {
  let d = {
    STR: c.ability_scores["STR"] + race.ability_scores["STR"],
    DEX: c.ability_scores["DEX"] + race.ability_scores["DEX"],
    CON: c.ability_scores["CON"] + race.ability_scores["CON"],
    WIS: c.ability_scores["WIS"] + race.ability_scores["WIS"],
    INT: c.ability_scores["INT"] + race.ability_scores["INT"],
    CHA: c.ability_scores["CHA"] + race.ability_scores["CHA"],
  };
  let formatted_d = `STR ${d["STR"]}, DEX ${d["DEX"]}, CON ${d["CON"]}, WIS ${d["WIS"]}, INT ${d["INT"]}, CHA ${d["CHA"]}`;
  for (a of c.ability_proficiencies) {
    formatted_d = formatted_d.replace(new RegExp(`${a}`), "<b>$&</b>");
  }
  for (a of background.ability_proficiencies) {
    if (!c.ability_proficiencies.includes(a)) {
      formatted_d = formatted_d.replace(new RegExp(`${a}`), "<b>$&</b>");
      break;
    }
  }
  d["written"] = formatted_d;
  return d;
}

/**
 *
 * @param {Array<string>} c
 * @param {Array<string>} racial
 * @param {Array<string>} background
 * @returns
 */
function calculateSkills(c, racial, background) {
  // Clear out duplicates.
  const d = c.concat(racial, background);
  let s = [...new Set(d)];

  // Backfill duplicates with other skills.
  while (s.length < d.length) {
    let new_skill = randomEntry(ALL_SKILLS);
    if (!s.includes(new_skill)) {
      s = s.concat(new_skill);
    }
  }

  // Sort, convert to string, and return.
  s.sort();
  return s.join(", ");
}

function calculateExpertise(c, skills) {
  let s = structuredClone(skills);
  for (skill of c.expertise) {
    s = s.replaceAll(skill, `<b>${skill}</b>`);
  }
  return s;
}

/**
 *
 * @param {Map<string,number>} base
 * @param {Map<string,number>} racial
 * @returns
 */
function calculateEncumbrance(strength) {
  return `
    <tr>
        <td style="text-align: left"><strong>&nbsp</strong></td>
        <td style="text-align: left">slow: ${strength * 5} lb. disadvantage: ${
    strength * 10
  } lb. immobile: ${strength * 15} lb.</td>
    </tr>
    `;
}

function calculateSpellDc(c, ability_scores) {
  if (c === "cleric") {
    return 10 + Math.floor((ability_scores["WIS"] - 10) / 2);
  } else {
    return 10 + Math.floor((ability_scores["INT"] - 10) / 2);
  }
}

function calculateSpellAttack(c, ability_scores) {
  if (c === "cleric") {
    return 2 + Math.floor((ability_scores["WIS"] - 10) / 2);
  } else {
    return 2 + Math.floor((ability_scores["INT"] - 10) / 2);
  }
}

function calculateCantrips(c, race, background) {
  // Determine cantrips from race, background, and cleric domain.
  const base_cantrips = c.cantrips.concat(race.cantrips, background.cantrips);
  let s = [...new Set(base_cantrips)];
  s.sort();

  // If the character is a wizard...
  if (c.class === "wizard") {
    // Add the background wizard cantrips.
    return joinAndSort(s, background["wizard cantrips"]);
  }

  // If the character is a cleric...
  else if (c.class === "cleric") {
    // Add the background cleric cantrips.
    return joinAndSort(s, background["cleric cantrips"]);
  }

  // Otherwise, return the base cantrips.
  else {
    return s.join(", ");
  }
}

function calculateHp(c, race, background, ability_scores) {
  const classHp = c.hp;
  const conHp = Math.floor((ability_scores["CON"] - 10) / 2);
  const raceHp = race.title.includes("hill dwarf") ? 1 : 0;
  return classHp + conHp + raceHp;
}

function calculateAc(c, race, background, ability_scores) {
  const dexMod = Math.floor((ability_scores["DEX"] - 10) / 2);
  let baseAc = 10 + dexMod;
  if (c.inv_worn.includes(ITEMS.studded_leather)) {
    baseAc = 12 + dexMod;
  } else if (c.inv_worn.includes(ITEMS.chainshirt)) {
    baseAc = 13 + Math.min(dexMod, 2);
  } else if (c.inv_worn.includes(ITEMS.breastplate)) {
    baseAc = 14 + Math.min(dexMod, 2);
  } else if (c.inv_worn.includes(ITEMS.ringmail)) {
    baseAc = 14;
  } else if (c.inv_worn.includes(ITEMS.chainmail)) {
    baseAc = 16;
  }
  if (c.inv_worn.includes(ITEMS.shield)) {
    baseAc += 2;
  }
  if (c.features.includes("fighting style: defense")) {
    baseAc += 1;
  }
  return baseAc;
}

function calculateMv(c, race, background, ability_scores) {
  return race.mv;
}

function calculatePp(c, race, background, ability_scores) {
  const wisMod = Math.floor((ability_scores["WIS"] - 10) / 2);
  const skills = calculateSkills(c.skills, race.skills, background.skills);
  let profMod = skills.includes("perception") ? 2 : 0;
  if (c.expertise.includes("perception")) {
    profMod += 2;
  }
  const backgroundBonus = background.features.includes("read the room") ? 5 : 0;
  const passivePerception = 10 + wisMod + profMod + backgroundBonus;
  return passivePerception;
}

function calculateEquipment(equip, container, gold) {
  const preface = container.title === "worn" ? "<b>Equipment</b>" : "&nbsp;";
  let equipWeight = equip.map((x) => x.weight).reduce((a, b) => a + b, 0);
  equipWeight =
    `${equipWeight}`.length < 2 ? `0${equipWeight}` : `${equipWeight}`;
  let equipItems = equip.map((x) => x.title);
  if (container.title === "pouch") {
    equipItems.push(`${gold} gp`);
  }
  equipItems = equipItems.join(", ");
  return `
    <tr>
        <td style="text-align: left">${preface}</td>
        <td style="text-align: left">(${equipWeight} / ${container.capacity} lb.) ${container.title}: ${equipItems}</td>
    </tr>
    `;
}

function calculateGold(worn, pouch, backpack) {
  const wornCost = worn.map((x) => x.value).reduce((a, b) => a + b, 0);
  const pouchCost = pouch.map((x) => x.value).reduce((a, b) => a + b, 0);
  const backpackCost = backpack.map((x) => x.value).reduce((a, b) => a + b, 0);
  return 100 - (wornCost + pouchCost + backpackCost);
}

///////////////////////////////////////////////////////////////////////////////
// HTML Generator Functions ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function generateOverview(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  return `
    <p class='character-header'>
        <a href="">${toTitleCase(character_race.race)}</a> - 
        <a href="">${toTitleCase(character_class.title)}</a> - 
        <a href="">${toTitleCase(character_background.title)}</a>
    </p>
    `;
}

function generateDescription(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  return `
    <ul>
        <li>${character_race.writeup}</li>
        <li>${character_class.writeup}</li>
        <li>${character_background.writeup}</li>
    </ul>
    `;
}

function generateHighConcept(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  return `
        <tr>
            <td><b>Class</b></td>
            <td>${character_class.class}</td>
        </tr>
        <tr>
            <td><b>Race</b></td>
            <td>${character_race.subrace} ${character_race.race}</td>
        </tr>
        <tr>
            <td><b>Background</b></td>
            <td>${character_background.title}</td>
        </tr>
    `;
}

function generateStatistics(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  let skills = calculateSkills(
    character_class.skills,
    character_race.skills,
    character_background.skills
  );
  skills = calculateExpertise(character_class, skills);
  const features = joinAndSort(
    character_class.features,
    character_race.features,
    character_background.features
  );
  const resistances = joinAndSort(
    character_class.resistances,
    character_race.resistances,
    character_background.resistances
  );
  const hp = calculateHp(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const ac = calculateAc(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const mv = calculateMv(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const pp = calculatePp(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  return `
        <tr>
            <td><b>Ability Scores</b></td>
            <td>${character_ability_scores.written}</td>
        </tr>
        <tr>
            <td><b>Skills</b></td>
            <td>${skills}</td>
        </tr>
        <tr>
            <td><b>Features</b></td>
            <td>${features}</td>
        </tr>
        <tr>
            <td><b>Resistances</b></td>
            <td>${resistances}</td>
        </tr>
        <tr>
            <td><b>Statistics</b></td>
            <td>hp: ${hp}, ac: ${ac}, mv: ${mv}, pp: ${pp}, prof bonus: +2</td>
        </tr>
    `;
}

function generateEquipment(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  const gold = calculateGold(
    character_class.inv_worn,
    character_class.inv_pouch,
    character_class.inv_backpack
  );
  const worn_equipment = calculateEquipment(
    character_class.inv_worn,
    CONTAINERS.worn,
    gold
  );
  const pouch_equipment = calculateEquipment(
    character_class.inv_pouch,
    CONTAINERS.pouch,
    gold
  );
  const backpack_equipment = calculateEquipment(
    character_class.inv_backpack,
    CONTAINERS.backpack,
    gold
  );
  const equipment_footer = calculateEncumbrance(
    character_ability_scores["STR"]
  );
  return `
        ${worn_equipment}
        ${pouch_equipment}
        ${backpack_equipment}
        ${equipment_footer}
    `;
}

function generateProficiencies(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  const weapons = joinAndSort(character_class.weapons, character_race.weapons);
  const armor = joinAndSort(character_class.armor, character_race.armor);
  const languages = joinAndSort(
    character_class.languages,
    character_race.languages,
    character_background.languages
  );
  const tools = joinAndSort(
    character_class.tools,
    character_race.tools,
    character_background.tools
  );
  return `
        <tr>
            <td><b>Proficiencies</b></td>
            <td>weapons: ${weapons ? weapons : "none"}</td>
        </tr>
        <tr>
            <td>&nbsp</td>
            <td>armor: ${armor ? armor : "none"}</td>
        </tr>
        <tr>
            <td>&nbsp</td>
            <td>languages: ${languages ? languages : "none"}</td>
        </tr>
        <tr>
            <td>&nbsp</td>
            <td>tools: ${tools ? tools : "none"}</td>
        </tr>
    `;
}

function generateSpellcasting(
  character_class,
  character_race,
  character_background,
  character_ability_scores
) {
  const spell_dc = calculateSpellDc(
    character_class.class,
    character_ability_scores
  );
  const spell_attack = calculateSpellAttack(
    character_class.class,
    character_ability_scores
  );
  const cantrips = calculateCantrips(
    character_class,
    character_race,
    character_background
  );
  const spells =
    character_class.class === "wizard" || character_class.class === "cleric"
      ? ", daily prepared spells: 2"
      : "";
  const wizard_spellbook = character_background["wizard spellbook"].join(", ");
  let spellbook = `
        <tr>
            <td style="text-align: left">&nbsp;</td>
            <td style="text-align: left">${character_background.title} spellbook: ${wizard_spellbook}</td>
        </tr>
    `;
  spellbook = character_class.class === "wizard" ? spellbook : "";
  const cleric_spells = character_class["spells"].join(", ");
  let domain_spells = `
        <tr>
            <td style="text-align: left">&nbsp;</td>
            <td style="text-align: left">${character_class.title}: ${cleric_spells}</td>
        </tr>
    `;
  domain_spells = character_class.class === "cleric" ? domain_spells : "";
  let spellcasting = `
        <tr>
            <td>&nbsp</td>
            <td>&nbsp</td>
        </tr>
        <tr>
            <td style="text-align: left"><strong>Spellcasting</strong></td>
            <td style="text-align: left">spell dc: ${spell_dc}, spell attack: +${spell_attack}${spells}</td>
        </tr>
        <tr>
            <td style="text-align: left">&nbsp;</td>
            <td style="text-align: left">cantrips: ${cantrips}</td>
        </tr>
        ${spellbook}
        ${domain_spells}
    `;
  spellcasting = cantrips ? spellcasting : "";
  return spellcasting;
}

///////////////////////////////////////////////////////////////////////////////
// Main Function //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function generateCharacter() {
  // Use random numbers to determine what character to generate.
  const character_race = RACES[randomEntry(Object.keys(RACES))];
  const allowed_classes_by_race = Object.keys(CLASSES).filter((key) =>
    CLASSES[key].races.includes(character_race.title)
  );
  const character_class = CLASSES[randomEntry(allowed_classes_by_race)];
  const character_background =
    BACKGROUNDS[randomEntry(Object.keys(BACKGROUNDS))];
  const character_ability_scores = calculateAbilityScores(
    character_class,
    character_race,
    character_background
  );

  // Generate the HTML for each section.
  const overview = generateOverview(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const description = generateDescription(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const high_concept = generateHighConcept(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const statistics = generateStatistics(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const equipment = generateEquipment(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const proficiencies = generateProficiencies(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );
  const spellcasting = generateSpellcasting(
    character_class,
    character_race,
    character_background,
    character_ability_scores
  );

  // Assemble the components.
  const character_sheet = `
    <blockquote>
    ${overview}
        ${description}
            <div class="table-wrapper">
              <table>
                <tbody>
                ${high_concept}
                <tr>
                    <td>&nbsp</td>
                    <td>&nbsp</td>
                </tr>
                ${statistics}
                <tr>
                    <td>&nbsp</td>
                    <td>&nbsp</td>
                </tr>
                ${proficiencies}
                <tr>
                    <td>&nbsp</td>
                    <td>&nbsp</td>
                </tr>
                ${equipment}
                ${spellcasting}
                </tbody>
              </table>
            </div>
    </blockquote>
    `;
  return character_sheet;
}

///////////////////////////////////////////////////////////////////////////////
// Execution //////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/**
 * Button handler.
 *
 * @param {Event} event
 */
function handleClick(event) {
  if (event.type === "click") {
    // Generate the HTML.
    const character_html = generateCharacter();

    // Plug the HTML into the corresponding element.
    const div_receptacle = document.querySelector("#character-generated");
    div_receptacle.innerHTML = character_html;
  }
}

/**
 * Configure the button handler.
 */
function runSetup() {
  // Find the button.
  generator_button = document.querySelector(".btn");

  // Hook it up to the corresponding function.
  generator_button.addEventListener("click", handleClick);
}

// If the document hasn't finished loading, wait before setting up the button.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runSetup);
}

// Otherwise, go straight to setup.
else {
  runSetup();
}
