import React from 'react';
import { Segment, Button, Flex, Header, Text, Input, Avatar } from '@fluentui/react-northstar';
import { QnaIcon } from '@fluentui/react-icons-northstar'
import { microsoftTeams } from "@microsoft/teams-js";
import { themeNames } from "@fluentui/react-teams";
import { GridIcon, MoreIcon, AcceptIcon, SearchIcon } from '@fluentui/react-icons-northstar'


const Navbar = () => {
  return (
    <div>
      <Segment style={{ padding: "0 10px", backgroundColor: "#464775"}}>
        <Flex space="between">
          <Flex gap="gap.small" hAlign="center" vAlign="center">
            <GridIcon size="large" style={{ color: "#ffffff" }} />
            <Text as="h3" color="white" content="Microsoft Teams" style={{ paddingLeft: "20px" }} />
          </Flex>
          <Flex hAlign="center" vAlign="center">
            <SearchIcon size="large" style={{color:"#000000", position:"absolute", top:"20px", left:"500px", zIndex:"1", paddingLeft:"5px"}}/>
            <Input fluid type="text" placeholder="    Search" style={{width:"400px"}}/>
          </Flex>
          <Flex gap="gap.small" hAlign="center" vAlign="center">
            <MoreIcon size="larger" style={{ color: "#ffffff" }} />
            <Avatar
              image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
              status={{
                color: 'green',
                icon: <AcceptIcon />,
                title: 'Available',
              }}
            />
        </Flex>
          </Flex>
      </Segment>
    </div>
  )
}

export default Navbar;