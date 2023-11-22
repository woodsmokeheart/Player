/* eslint-disable import/no-anonymous-default-export */
import moment from "moment";
export default (seconds) => moment.utc(seconds * 1000).format("mm:ss");
