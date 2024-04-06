import {promises as fs} from "fs";
import crypto from 'crypto';
import {CommentMutation, New, NewMutation} from './types';

const filename = './db.json';
let data: New[] = [];

const fileDb = {
  async init() {
    try{
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    }catch (e) {
      data = [];
    }
  },
  async getNews() {
    const filteredMessage = data.sort((firstDate, secondDate) => Date.parse(secondDate.datetime) - Date.parse(firstDate.datetime));
    return filteredMessage;
  },
  async addNews(item: NewMutation) {
    const tidings: New = {
      id: crypto.randomUUID().toString(),
      ...item,
      datetime: new Date().toISOString(),
    };

    data.push(tidings);
    await this.save();
    return tidings;
  },

  async save() {
    await fs.writeFile(filename, JSON.stringify(data, null, 2))
  },

  async getNewsById(id: string) {
    try {
      const news = data.find(item => item.id === id);
      return news || null;
    } catch (error) {
      console.error("Error ID:", error);
      throw error;
    }
},

  async deleteNewsById(id: string) {
    try {
      const index = data.findIndex(item => item.id === id);
      if (index !== -1) {
        data.splice(index, 1);
        await this.save();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error by ID:", error);
      throw error;
    }
  },

}

export default fileDb;