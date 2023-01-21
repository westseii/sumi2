const gatherableData = {
  herb: {
    emeraldStarleaf: {
      id: 0,
      name: "Emerald Starleaf",
      description: "Todo. Herb.",
    },
    fieryCarnation: {
      id: 1,
      name: "Fiery Carnation",
      description: "Todo. Herb.",
    },
    iceLily: {
      id: 2,
      name: "Ice Lily",
      description: "Todo. Herb.",
    },
    violetAster: {
      id: 3,
      name: "Violet Aster",
      description: "Todo. Herb.",
    },
    dawningDahlia: {
      id: 4,
      name: "Dawning Dahlia",
      description: "Todo. Herb, rare.",
    },
    duskblossom: {
      id: 5,
      name: "Duskblossom",
      description: "Todo. Herb, rare.",
    },
  },
  ore: {
    copperOre: {
      id: 0,
      name: "Copper Ore",
      description: "Todo. Ore.",
    },
    goldOre: {
      id: 1,
      name: "Gold Ore",
      description: "Todo. Ore.",
    },
    ironOre: {
      id: 2,
      name: "Iron Ore",
      description: "Todo. Ore.",
    },
    platinumOre: {
      id: 3,
      name: "Platinum Ore",
      description: "Todo. Ore.",
    },
    silverOre: {
      id: 4,
      name: "Silver Ore",
      description: "Todo. Ore.",
    },
    tinOre: {
      id: 5,
      name: "Tin Ore",
      description: "Todo. Ore.",
    },
    titaniumOre: {
      id: 6,
      name: "Titanium Ore",
      description: "Todo. Ore.",
    },
  },
};

//
// Utility functions

/** Utility functions for Ashfalle gatherables. */
const gatherable = {
  /**
   * Get a specific gatherable type.
   * @param {string} type - ex: "herb"
   * @param {string} name - ex: "emeraldStarleaf"
   * @returns {object} object
   */
  getGatherableData(type = "herb", name = "emeraldStarleaf") {
    if (gatherableData[type][name] !== undefined) return gatherableData[type][name];
    else
      return {
        id: -1,
        name: "Unknown Gatherable",
        description: "Gatherable does not exist.",
      };
  },
};

export { gatherable };
