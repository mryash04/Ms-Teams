import React from 'react';
import { Segment, Button, Flex, Header, Text, Input } from '@fluentui/react-northstar';
import { QnaIcon } from '@fluentui/react-icons-northstar'
import {microsoftTeams} from "@microsoft/teams-js";
import { themeNames } from "@fluentui/react-teams";
import { GridIcon } from '@fluentui/react-icons-northstar'


const Navbar = () => {
  return(
    <div>
      <Segment style={{padding:"0 10px", backgroundColor:"#464775", width:"100%"}}>
        <Flex space="between">
          <Flex gap="gap.small" hAlign="center" vAlign="center">
            <GridIcon size="large" style={{color:"#ffffff"}} />
            <Text as="h3" color="white" content="Microsoft Teams" style={{paddingLeft:"20px"}} />
          </Flex>
          <Flex>
          <div className="search-box" style={{margin:"auto"}}>
            <Input type="text" placeholder="Search" />
          </div>
          </Flex>
        </Flex>
      </Segment>
    </div>
  )
}

export default Navbar;