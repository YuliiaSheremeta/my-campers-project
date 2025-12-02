import { ICamper } from "@/types/types";
import { api } from "./api";

interface ICampersResponse {
  items: ICamper[];
}

export async function getAllCampers() {
  const { data } = await api.get<ICampersResponse>("/campers");
  return data.items;
}
