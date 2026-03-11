import { storage } from "../store/StorageContext";

const STORAGE_KEY = "overtempo-storage";

const session = {
  id: "",
  time: 0,
  date: new Date(),
  done: false || true,
  streak: 0,
};

export const getStudySession = () => {
  const jsonSessions = storage.getString(STORAGE_KEY);

  if (jsonSessions) {
    const sessions = JSON.parse(jsonSessions);
    return sessions;
  }
}


export const saveStudySession = (session: any) => {
    storage.set(STORAGE_KEY, JSON.stringify(session));
};

export const addSingleSession = (newSession: any) => {
    const currentSessions = getStudySession();
    currentSessions.push(newSession);
    saveStudySession(currentSessions);
}