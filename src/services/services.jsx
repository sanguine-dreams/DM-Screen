import db from "../lib/Pocketbase";
import PocketBase from "pocketbase";
import { keys } from "../utils/keys";
import { useContext } from "react";
import { DnDContext } from "../store/store";


export async function getNotes(cId) {

  const response = await db.get(`/api/collections/notes/records?filter=(CampaignHead?="${cId}")`);
  const result = response.data.items;

  return result;
}

export async function postNotes(body) {

  const response = await db.post(`/api/collections/notes/records`, {
      Title: body.Title,
      Content: body.Content,
      CampaignHead: body.CampaignHead
    })
  
    return response.data
}

export async function deleteNote(id) {
 
  await db.delete(`/api/collections/notes/records${id}`);

}

export async function updateNotes(body) {

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


export async function getPlayers(cId) {
 
  const response = await db.get(`/api/collections/players/records/?filter=(CampaignHead?="${cId}")`);
  const result = response.data.items;

  return result;
}

export async function postPlayers(body) {

  const response = await db.post(`/api/collections/players/records`, {
      Name: body.Name,
      Race: body.Race, 
      Class: body.Class,
      DEX: body.dex, 
      CHA: body.cha, 
      INT: body.int, 
      WIS: body.wis, 
      STR: body.str, 
      CON: body.con, 
      DarkVision: body.DarkVision,
      WalkSpeed: body.WalkSpeed,
      Notes: body.Notes, 
      CampaignHead:  window.localStorage.getItem(keys.cId) })
    
      return response.data
}

export async function deletePlayer(id) {

  await db.delete(`/api/collections/players/records/${id}`);

}

export async function updatePlayers(body) {
 
  await db.patch(`/api/collections/players/records/${body.id}`, {
    Name: body.Name,
    Race: body.Race, 
    Class: body.Class,
    DEX: body.Dex, 
    CHA: body.Cha, 
    INT: body.Int, 
    WIS: body.Wis, 
    STR: body.Str, 
    CON: body.Con, 
    DarkVision: body.DVision,
    WalkSpeed: body.WSpeed,
    Notes: body.Notes, 
  });

}
