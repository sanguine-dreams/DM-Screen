import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

function ConditionCard({ condition }) {
  return (
    <>
      <Popover placement="left">
        <PopoverTrigger>
          <h1 className="font-['Modesto Condesed']">{condition.name}</h1>
        </PopoverTrigger>
        <PopoverContent className="text-base">
          <div className="w-64">
            <p>{condition.desc}</p>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default ConditionCard;
