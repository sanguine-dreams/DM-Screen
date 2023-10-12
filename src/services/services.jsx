import db from '../lib/Pocketbase'

export async function getNotes(){
const response = await db.get(`/collections/Notes/records?expand=CampaignId`);
const result = response.data.items;
console.log(result);
return result
}

export async function postNotes(body){
  return  (await db.post(`/collections/Notes/records/`, {
        Title: body.Title,
        Content: body.Content
    })).data;

}

export async function deleteNote(id){
    await db.delete(`collections/Notes/records/${id}`);

}

export async function updateNotes(body){
    console.log(body)
    await db.patch(`collections/Notes/records/${body.id}`, {
        Title: body.Title,
        Content: body.Content
    });

}