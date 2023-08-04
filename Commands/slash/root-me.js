/*
 * author : Slapze & Mizari (Mizari-W)
 */

// importation des packages dont on a besoin
const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ChannelType, PermissionsBitField, resolveColor, hyperlink } = require("discord.js")

module.exports = {
  name: "root-me",
  description: "Search for informations about a user or a challenge on Root Me",
  options: [
    {
      name: 'user',
      description: 'Search for informations about a user on Root Me',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'name',
          description: 'Search by user name',
          type: ApplicationCommandOptionType.String
        },
        {
          name: 'id',
          description: 'Search by user ID',
          type: ApplicationCommandOptionType.String
        }
      ]
    }
  ],
  type: ApplicationCommandType.ChatInput,
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
    var path = "https://api.www.root-me.org/";

    if (sub === "user"){
      if (args.length > 0){
        path += "auteurs";
        if (args[0].name === "name") {
          const resp = await fetch(path+"?nom="+args[0].value, {
            headers: {
              "Cookie": "api_key="+process.env.ROOTME_KEY
            }
          }).then(res => res.json());
          if (Object.values(resp[0]).length > 0){
            
          } else {
            interaction.followUp({ content: "Pas trouvé désolé" });
          }
        } else {

        }
        interaction.followUp({ content: "✅" });
      } else {
        interaction.followUp({ content: "Vous devez choisir une des options." });
      }
    }
    // // requête sur l'API pour avoir les infos de l'ISS
    // const resp = await fetch("https://api.wheretheiss.at/v1/satellites/25544").then(res => res.json());
    //
    // // quand c'est fait on crée un embed avec les infos qui vont biens
    // let issembed = new EmbedBuilder({
    //   "title": "ISS",
    //   "color": parseInt("2F3136", 16),
    //   "thumbnail": {
    //     "url": 'https://i.imgur.com/d4PFOSv.jpg'
    //   },
    //   "image": {
    //     "url": "https://i.imgur.com/7ypOKTa.jpg"
    //   },
    //   "fields": [
    //     {
    //       "name": 'Unité de mesure',
    //       "value": `${resp.units}`,
    //       "inline": true
    //     },
    //     {
    //       "name": 'Latitude',
    //       "value": `${resp.latitude.toFixed(5)}`,
    //       "inline": true
    //     },
    //     {
    //       "name": 'Longitude',
    //       "value": `${resp.longitude.toFixed(5)}`,
    //       "inline": true
    //     },
    //     {
    //       "name": 'Altitude',
    //       "value": `${resp.altitude.toFixed(2)}`,
    //       "inline": true
    //     },
    //     {
    //       "name": 'Vitesse de ISS',
    //       "value": `${resp.velocity.toFixed(2)} km/h`,
    //       "inline": true
    //     },
    //     {
    //       "name": 'Visibilité',
    //       "value": `${resp.visibility}`,
    //       "inline": true
    //     }
    //   ]
    // });
    //
    // // puis on send l'embed
    // interaction.followUp({ embeds: [issembed] });
  }
}
