import React from "react";
import { Flex } from '@fluentui/react-northstar';
import Sidebar from "./Sidebar";

const Home = () =>{
    return(
        <div>
            <Flex>
                <div>
                    <Sidebar />
                </div>
                <div>
                    Item2
                </div>
                <div>
                    Item3
                </div>
            </Flex>
        </div>
    )
};

export default Home;