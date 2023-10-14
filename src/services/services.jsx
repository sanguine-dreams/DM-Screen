import db from "../lib/Pocketbase";
import PocketBase from "pocketbase";

export async function getNotes(cId) {
  const response = await db.get(`/api/collections/notes/records?filter=(CampaignHead?="${cId}")`);
  const result = response.data.items;
  console.log(result);
  return result;
}

export async function postNotes(body) {
  return (
    await db.post(`/api/collections/notes/records`, {
      Title: body.Title,
      Content: body.Content,
      CampaignHead: body.CampaignHead
    })
  ).data;
}

export async function deleteNote(id) {
  await db.delete(`/api/collections/notes/records${id}`);
}

export async function updateNotes(body) {
  console.log(body);
  await db.patch(`/api/collections/notes/records${body.id}`, {
    Title: body.Title,
    Content: body.Content,
  });
}

export async function postCampaign(userId, title) {
  await db.post(`/api/collections/campaign/records`, {
    DungeonMaster: userId, 
    Title: title
  });
}


export async function getCampaigns(userId){

  const response = await db.get(`/api/collections/campaign/records/?filter=(DungeonMaster?="${userId}")`);
  const result = response.data.items;
  return result;

}

const pb = new PocketBase("https://dm-screen.pockethost.io");

export async function LogInAuth(details) {
  const authData = await pb
    .collection("users")
    .authWithPassword(details.email, details.password);
  return authData;
}
