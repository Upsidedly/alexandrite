import { Client, ClientOptions } from "discord.js";

interface AlexandriteOptions extends ClientOptions {
    /**
     * The prefix of the bot's text commands.
     */
    prefix: string,

    /**
     * The paths of the commands. (searches through each directory)
     */
    commands: string[],

    /**
     * The paths of the events. (searches through each directory)
     */
    events: string[],

    /**
     * The token of the bot. Used to login when everything has loaded.
     * Leave this blank if you want to manually login.
     */
    token: string | undefined,
}

class Alexandrite extends Client {
    private readonly logintoken: string | null
    private readonly prefix: string

    private readonly commandirs: string[]
    private readonly eventdirs: string[]

    constructor(options: AlexandriteOptions) {
        super(options);
        this.logintoken = options.token ? options.token : null;
        this.commandirs = options.commands;
        this.eventdirs = options.events;
        this.prefix = options.prefix;
    }
}

export { Alexandrite }