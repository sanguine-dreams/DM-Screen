import React, { useEffect, useState} from 'react';
import {
  collection,
  doc,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import db from '../lib/firebase';
import {Textarea} from "@nextui-org/react";


// const querySnapshot = await getDocs(collection(db, "Campaigns"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
//   console.log("camp");
//   console.log(doc);
// });
function Notes() {
  const [value, setValue] = React.useState("");

  function getData(){
    const q = query(collection(db, 'Campaigns'));
    onSnapshot(q, (data) => {
      const finalData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('FINALdATAT',finalData);
    });
  }
  
  useEffect(()=>{
getData()
  },[])
  return <div className='scale-x-[-1]'>
    
    <Textarea
        variant="underlined"
        label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        value={value}
        onValueChange={setValue}
      />
    
    </div>;
}

export default Notes;
