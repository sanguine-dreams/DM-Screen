import React, { useEffect, useState } from "react";

import { Textarea, Input } from "@nextui-org/react";


function EachNote({value}) {


  return (
    <div key={value.id} >
      <div  className="m-4 border-2 border-red-900 rounded-md">

        <Input type="text" variant="underlined"  value={value.Title} />

        <Textarea
          variant="underlined"
          placeholder="Enter your description"
          value={value.Content}

        />
      </div>
    </div>
  );
}

export default EachNote;
