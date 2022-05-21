import { Alexandrite } from './classes/alexandrite.js'

type main = {
    /**
     * The main client of the bot.
     * @type {Alexandrite}
     * @param {AlexandriteOptions} options The options of the bot.
     */
    Alexandrite: typeof Alexandrite
}

const alex: main = {
    Alexandrite
}

export { Alexandrite }
export default alex