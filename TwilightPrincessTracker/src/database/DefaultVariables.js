var dungeonChest = 0;
var dungeonChestOld = 0;
var c = 0;


/*
 * Bugsanity: Adds the 24 bugs to the pool to be shuffled
 * Poesanity: Adds the 60 poe souls to the pool to be shuffled
 * Shopsanity: Most shop items are randomized. Caveats:
 *      Ammo Refills - not randomized
 *      Unlimited Items - first purchase randomized, subsequent gives Green Ruppee
 *      Bottled Items - Must have empty bottle, unless No Bottle Requirement is on
 *      Scoopable Items - not randomized (Trills Shop)
 * Dungeon Items: Dungeon Items are randomized in respective dungeons
 * Key Shuffle: Randomizes Small Keys to the area that the key was found in, not the area the key is for.
 * Skybooksanity: Randomized each skybook character.  
 */
var shuffledChecks = {
    Bugsanity: {
        defaultValue: false,
        toolTip: "Adds the 24 bugs to the pool to be shuffled",
    },
    Poesanity: {
        defaultValue: false,
        toolTip: "Adds the 60 poe souls to the pool to be shuffled",
    },
    Shopsanity: {
        defaultValue: false,
        toolTip: "Most shop items are randomized. Caveats: \n" +
                "\tAmmo Refills 6- not randomized\n" +
                "\tUnlimited Items - first purchase randomized, subsequent gives Green Ruppee\n" +
                "\tBottled Items - Must have empty bottle, unless No Bottle Requirement is on\n" +
                "\tScoopable Items - not randomized (Trills Shop)",
    },
    DungeonItems: {
        defaultValue: false,
        toolTip: "Dungeon Items are randomized in respective dungeons",
    },
    SkybookSanity: {
        defaultValue: false,
        toolTip: "Adds the 60 poe souls to the pool to be shuffled",
    }
};

/*
 * FaronEscape: Able to leave Faron before defeating Forest Temple
 * TwilightSkip: Skips the three Twilight Sections as Wolf Link
 * MGDSkip: Skips Midna's Desperate Hour
 * GoatSkip: Skips the first and second goat herdings
 * IntroSkip: Skips the first and second days (Fishing, Slingslot, Goats 1/2)
 * EscortSkip: Skips Telma's wagon escort
 */
var skips = {
    FaronEscape: {
        default: false,
        toolTip: "Able to leave Faron before defeating Forest Temple"
    },
    TwilightSkip: {
        default: false,
        toolTip: "Skips the three Twilight Sections as Wolf Link"
    },
    MDHSkip: {
        default: false,
        toolTip: "Skips Midna's Desperate Hour"
    },
    GoatSkip: {
        default: false,
        toolTip: "Skips the first and second goat herdings"
    },
    IntroSkip: {
        default: false,
        toolTip: "Skips the first and second days (Fishing, Slingslot, Goats 1/2)"
    },
    EscortSkip: {
        default: false,
        toolTip: "Skips Telma's wagon escort"
    },
    
};

var itemGrid = [
    [
        "FishingRod",
        "Slingshot",
        "Lantern",
        "Boomerang",
        "Sword",
        "GreenTunic"
    ]
    [
        "Bombs",
        "WaterBomb",
        "Bow",
        "BallChain",
        "Shield",
        "ZoraArmor"
    ]
    [
        "DominionRod",
        "Spinner",
        "Clawshot",
        "Hawkeye",
        "IronBoots",
        "MagicArmor"
    ]
    [
        "Skybook",
        "Bottles",
        "AuruMemo",
        "AsheiSketch",
        "IliasCharm",
        "Wallet"
    ]
    [
        "Bugs",
        "PoeSouls",
        "SwordSkills",
        "Crystal",
        "Vessel"
    ]
    [
        "YouthScent",
        "IliaScent",
        "PoeScent",
        "ReekfishScent",
        "MedicineScent"
    ]
    [
        "Diababa",
        "Fyrus",
        "Morpheel",
        "Stallord",
        "FusedShadows"
    ]
    [
        "Blizzeta",
        "Armogohma",
        "Argorok",
        "Zant",
        "MirrorShard"
    ]
]