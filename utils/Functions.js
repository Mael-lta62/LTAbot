const { Guild, User } = require('../models');
const mongoose = require("mongoose");
const message = require("../events/guild_message/messageCreate");
const user = require("../models/user");

module.exports = client => {
    client.getGuild = async guild => {
        const guildData = await Guild.findOne({ guildID: guild.id });
        return guildData;
    };

    client.createGuild = async guild => {
        const createGuild = new Guild({ guildID: guild.id });
        createGuild.save().then(g => console.log(`Nouveau serveur (${g.id})`));
    },

    client.getGuild = async guild => {
        const data = await Guild.findOne({ guildID: guild.id });
        if (data) return data;
        return client.config.DEFAULTSETTINGS;
    };

    client.updateGuild = async (guild, settings) => {
        let guildData = await client.getGuild(guild);
        if (typeof guildData != 'object') guildData = {};
        for (const key in settings) {
            if (guildData[key] != settings[key]) guildData[key] = settings[key]
        }
        return guildData.updateOne(settings);
    };
    client.createUser = async user => {
        const merged = Object.assign({_id: mongoose.Types.ObjectId()}, user);
        const createUser = await new User(merged);
        createUser.save().then(u => console.log(`Nouvel utilisateur -> ${u.username}`));
      };
    
      client.getUser = async user => {
        const data = await User.findOne({ userID: user.id });
        if (data) return data;
        else return;
      };
    
      client.getUsers = async guild => {
        const data = await User.find({guildID: guild.id});
        if (data) return data;
        else return;
      };
    
      client.updateUser = async (user, settings) => {
        let data = await client.getUser(user);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
          if (data[key] !== settings [key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
      };
    
      client.addExp = async (client, member, exp) => {
        const userToUpdate = await client.getUser(member);
        const updatedExp = userToUpdate.experience + exp;
        await client.updateUser(member, {experience: updatedExp});
      };
    
      client.removeExp = async (client, member, exp) => {
        const userToUpdate = await client.getUser(member);
        const updatedExp = userToUpdate.experience - exp;
        await client.updateUser(member, {experience: updatedExp});
      };
}