
require("dotenv").config();

module.exports = {

    /**
     * @description require settings for the bot
     */

    TOKEN: process.env.TOKEN || "MTAwNTg4MjMzNjM2MzE1MTM4MA.G-UaER.h9xdogi_cDqUsWlqwkaWBTmulELZ3M8gAJOeIc",  // your bot token
    PREFIX: process.env.PREFIX || "n.", //<= default is #  // bot prefix
    OWNER_ID: process.env.OWNER_ID || "586583567732047885", //your client id

    /**
     *
     */
    EMPTY_LEAVE: process.env.EMPTY_LEAVE || 1, //<= default is 60  // time in seconds

    /**
     * @description boolean settings for the bot
     */
    LEAVE_EMPTY: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
    LEAVE_FINISH: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
    LEAVE_STOP:false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}