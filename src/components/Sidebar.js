import React, {useState} from "react";
import { Flex, Text } from "@fluentui/react-northstar";
import { BellIcon, ChatIcon, ContactGroupIcon, CalendarIcon, CallIcon, FilesAftereffectsIcon, MoreIcon, AppsIcon, QuestionCircleIcon } from '@fluentui/react-icons-northstar'

const sideLink = {
    padding:"20px 0 0 0"
};

const Sidebar = () =>{
    return(
        <div style={{width:"20%", backgroundColor:"#33344a", height:"91vh", width:"5vw"}}>
            <Flex column hAlign="center"  padding="padding.medium">
                <Flex column hAlign="center">
                {/* <div> */}
                    <BellIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Activity" style={{color:"#8b9f91"}} />
                </Flex>
                <Flex column hAlign="center" style={sideLink}>
                    <ChatIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Chat" style={{color:"#8b9f91"}} />
                </Flex>
                <Flex column hAlign="center" style={sideLink}>
                    <ContactGroupIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Teams" style={{color:"#8b9f91"}} />
                </Flex>
                <Flex column hAlign="center" style={sideLink}>
                    <CalendarIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Calendar" style={{color:"#8b9f91"}} />
                </Flex>
                <Flex column hAlign="center" style={sideLink}>
                    <CallIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Calls" style={{color:"#8b9f91"}} />
                <Flex column hAlign="center" style={sideLink}>
                    <FilesAftereffectsIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Files" style={{color:"#8b9f91"}} />
                </Flex>
                </Flex>
                <Flex column hAlign="center" style={sideLink}>
                    <MoreIcon size="large" style={{color:"#eaeaec"}} />
                </Flex>
                <div style={{paddingTop:"100px"}}>
                <Flex column hAlign="center" style={sideLink}>
                    <AppsIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Apps" style={{color:"#8b9f91"}} />
                </Flex>
                <Flex column hAlign="center" style={sideLink}>
                    <QuestionCircleIcon size="large" style={{color:"#eaeaec"}} />
                    <Text size="small" content="Help" style={{color:"#8b9f91"}} />
                </Flex>
                </div>
            </Flex>
        </div>
    )
}


export default Sidebar;