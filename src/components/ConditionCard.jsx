import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";

function ConditionCard({ condition }) {
  return (
    <>

<AccordionItem key="1" aria-label="Accordion 1" title={`${condition.name}`}>
  {condition.desc}
      </AccordionItem> 
      {/* <Popover placement="left">
        <PopoverTrigger>
          <h1 className="font-['Modesto Condesed']">{condition.name}</h1>
        </PopoverTrigger>
        <PopoverContent className="text-base">
          <div className="w-64">
            <p>{condition.desc}</p>
          </div>
        </PopoverContent>
      </Popover> */}
    </>
  );
}

export default ConditionCard;
