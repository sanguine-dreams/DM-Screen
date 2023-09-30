// import React, { useState } from 'react';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

// function SpellCard({spell}){

//     const [cardState, setCardState] = useState("hidden");
   

//     function onClick(){
//         setCardState(cardState === "hidden" ? "block bg-orange-50" : "hidden");
//     }

//     return(<div className='w-full border-double border-4 border-orange-800'>
//         <button className="spell-card w-full flex justify-between3" onClick={onClick}>
//         <TableRow
//               key={spell.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {spell.name}
//               </TableCell>
//               <TableCell align="right">{spell.name}</TableCell>
//               <TableCell align="right">{spell.level}</TableCell>
//               <TableCell align="right">{spell.casting_time}</TableCell>
//               <TableCell align="right">{spell.duration}</TableCell>
//             </TableRow>
//     </button>
//     <div className={cardState}>{spell.desc}</div>
//         </div>);
// }

// export default SpellCard;

