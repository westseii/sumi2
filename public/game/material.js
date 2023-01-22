const goldStandard = 1; // scalar for all other material values

const materialQualityData = {
  tier0: {
    floor: 2,
    ceiling: 2.75,
    prefix: {
      metal: "Tarnished",
      gemstone: "Rough",
    },
  },
  tier1: {
    floor: 2.75,
    ceiling: 3.5,
    prefix: {
      metal: "",
      gemstone: "",
    },
  },
  tier2: {
    floor: 3.5,
    ceiling: 4.25,
    prefix: {
      metal: "Refined",
      gemstone: "Pristine",
    },
  },
  tier3: {
    floor: 4.25,
    ceiling: Infinity,
    prefix: {
      metal: "Purified",
      gemstone: "Immaculate",
    },
  },
};

const materialData = {
  metal: {
    copper: {
      id: 0,
      name: "Copper",
      description: "Todo.",
      valueScale: 0.111,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    silver: {
      id: 1,
      name: "Silver",
      description: "Todo.",
      valueScale: 0.333,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    gold: {
      id: 2,
      name: "Gold",
      description: "Todo.",
      valueScale: goldStandard,
      get value() {
        return Math.round(this.valueScale);
      },
    },
    platinum: {
      id: 3,
      name: "Platinum",
      description: "Todo.",
      valueScale: 1.5,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
  },
  gemstone: {
    amethyst: {
      id: 0,
      name: "Amethyst",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    emerald: {
      id: 1,
      name: "Emerald",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    fireOpal: {
      id: 2,
      name: "Fire Opal",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    quartz: {
      id: 3,
      name: "Quartz",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    ruby: {
      id: 4,
      name: "Ruby",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    sapphire: {
      id: 5,
      name: "Sapphire",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    topaz: {
      id: 6,
      name: "Topaz",
      description: "Todo.",
      valueScale: 3,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
    diamond: {
      id: 7,
      name: "Diamond",
      description: "Todo.",
      valueScale: 10,
      get value() {
        return Math.round(goldStandard * this.valueScale);
      },
    },
  },
};

//
// Utility functions

/** Utility functions for Ashfalle material management. */
const material = {
  /**
   * Get material quality data for a given material artistry value.
   * @param {number} artistry - float
   * @returns {object} object
   */
  getMaterialQualityDataByArtistry(artistry) {
    for (const key of Object.keys(materialQualityData)) {
      const tier = materialQualityData[key];
      if (artistry >= tier.floor && artistry < tier.ceiling) return tier;
    }
    return materialQualityData.tier1; // default
  },

  /**
   * Get material quality data for a given material tier.
   * @param {number} tier - int range [0, 4]
   * @returns {object} object
   */
  getMaterialQualityDataByTier(tier = 1) {
    return materialQualityData[`tier${tier}`]
      ? materialQualityData[`tier${tier}`]
      : materialQualityData.tier1; // default
  },

  /**
   * Get a specific material type.
   * @param {string} type - ex: "metal"
   * @param {string} name - ex: "gold"
   * @returns {object} object
   */
  getMaterialData(type = "metal", name = "gold") {
    if (materialData[type][name] !== undefined) return materialData[type][name];
    else
      return {
        id: -1,
        name: "Unknown Material",
        description: "Material does not exist.",
        valueScale: 0,
        get value() {
          return this.valueScale;
        },
      }; // default
  },
};

export { material };
