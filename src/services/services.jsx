import db from '../lib/Pocketbase'

export async function getNotes(){
const response = await db.get(`/collections/Notes/records?expand=CampaignId`);
const result = response.data.items;
console.log(result);
return result
}

export async function postNotes(body){
    await db.post(`/collections/Notes/records/`, {
        Title: body.Title,
        Content: body.Content
    });

}

export async function deleteNote(){
    await db.delete(``);

}

export async function updateNotes(){
    await db.put(``);

}