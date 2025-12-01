import { api } from "./api";

export async function getAllCampers() {
  const { data } = await api.get("/campers");
  return data;
}
