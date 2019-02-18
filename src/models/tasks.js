import PouchDB from "pouchdb";
import { CONSTANTS } from "./pouchdbAdapter";

const tasks = new PouchDB(`${CONSTANTS.DB_URL}/tasks`);

export default tasks;
