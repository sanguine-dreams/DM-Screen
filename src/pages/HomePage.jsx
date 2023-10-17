import { Link } from "react-router-dom";
import { getCampaigns, postCampaign } from "../services/services";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DnDContext } from "../store/store";
import { keys } from "../utils/keys";

function HomePage() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { signInCreds, setSignInCreds } = useContext(DnDContext);
  const [title, setTitle] = useState("");
  const [campaigns, setCampaigns] = useState([]); 
  const navigateTo = useNavigate();
  

  async function handleCreateCampaign() {
    const result = postCampaign(window.localStorage.getItem(keys.userId), title);
    onClose();
  }

  function campaignChoice(id){
    window.localStorage.setItem(keys.cId, id)
    navigateTo(`/Screen`)
  }

  useEffect(()=>{
    
    async function fnn() {
        const result = await getCampaigns(window.localStorage.getItem(keys.userId))
        setCampaigns(result);
        console.log(result)
      }
      fnn();

  }, []
  )



  return (
    <div className="home-page flex flex-col p-6 gap-4 text-white h-screen">
      <Link to="/">
        <Button variant="solid" color="danger">
          Log Out
        </Button>
      </Link>
      <Button onPress={onOpen} variant="shadow" color="ghost" className="w-4/12 text-red">
        Create Campaign
      </Button>

      <div className=" flex flex-col gap-4 flex-wrap h-5/6">

      {campaigns.map((campaign) => 
       (<Button className="h-[4rem] w-4/12 bg-danger-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 " variant="" onClick={() => campaignChoice(campaign.id)}>{campaign.Title} </Button>) 
      )}

      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Campaign Title"
                  placeholder="Title your campaign"
                  variant="bordered"
                  onValueChange={(e) => setTitle(e)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleCreateCampaign}>
                  Create Campaign
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default HomePage;
