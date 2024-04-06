import {promises as fs} from "fs";
import crypto from 'crypto';
import {New, NewMutation} from './types';

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
  }

}

export default fileDb;