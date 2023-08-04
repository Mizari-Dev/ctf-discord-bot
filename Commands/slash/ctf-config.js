/*
 * author : Mizari (Mizari-W)
 */

 const { Client, LogLevel } = require("@notionhq/client")
 const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ChannelType, PermissionsBitField, resolveColor, hyperlink } = require('discord.js');

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  LogLevel: LogLevel.Debug
});

module.exports = {
  name: "ctf-config",
  description: "Config your the channel of challenges/CTFs",
  options: [
    {
      name: "set_channel",
      description: "Set up the challenges/CTFs channel",
      options: [
        {
          name: "channel",
          description: "The channel to set up (forum channel)",
          type: ApplicationCommandOptionType.Channel,
          channelTypes: [ChannelType.GuildForum],
          required: true
        }
      ],
      type: ApplicationCommandOptionType.Subcommand
    },
    {
      name: "unset_channel",
      description: "Remove the CTF configuration",
      type: ApplicationCommandOptionType.Subcommand
    }
  ],
  type: ApplicationCommandType.ChatInput,
  defaultMemberPermissions: PermissionsBitField.Flags.ManageGuild,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async(client, interaction, args) => {
    await interaction.deferReply({ ephemeral: false }).catch(() => {});
    var sub = interaction.options._subcommand;
    args = interaction.options._hoistedOptions;

    if (sub === "set_channel"){

    } else {
      
    }
  }
}
