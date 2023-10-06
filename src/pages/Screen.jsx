import Notes from "../screentabs/Notes";
import Monsters from "../screentabs/Monsters";
import Equipment from "../screentabs/Equipment";
import TabLeft from "../screentabs/TabLeft";
import TabRight from "../screentabs/TabRight";
import Player from "../screentabs/PlayerSheets";
import Conditions from "../screentabs/Conditions";
import Spells from "../screentabs/Spells";



function Screen(){
    const tabsL = [
        { label: 'Campaign Notes', content: <Notes /> },
        { label: 'Monsters', content: <Monsters /> },
        { label: 'Equipment', content: <Equipment /> },
      ];
      const tabsR = [
        { label: 'Player Sheets', content: <Player /> },
        { label: 'Conditions', content:<Conditions /> },
        // { label: 'Spells', content: <Spells />},
      ];
    
      return (
        <div className="Screen text-center h-screen flex flex-row justify-around bg-stone-700">
          <TabLeft tabs={tabsL} />
          <TabRight tabs={tabsR} />
          
        </div>
      );
}

export default Screen;