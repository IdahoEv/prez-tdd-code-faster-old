import React from "react";
import {
    Heading,
    Text,
    Appear,
    Link,
    Image,
    Code,
    Quote,
    BlockQuote,
    Cite,
    List,
    ListItem,
    CodePane
} from "spectacle";
import ShortList from "../src/short-list.js";

import preloader from "spectacle/lib/utils/preloader";

const images = {
    arrow: require("../assets/images/down-arrow.png"),
    tl1: require("../assets/images/timeline1.png"),
    tl2: require("../assets/images/timeline2.png"),
    stress: require("../assets/images/Work-Stress.jpg"),
};


export const Title = {
    bgColor: "titlecard",
    slide: () =>
        <div>
        <Heading size={1} textColor="white" textFont="tertiary">
          1.Introduction
        </Heading>
        </div>
};

export const Demand = {
  slide: () =>
  <div>
  <Appear>
    <BlockQuote>
      <Quote>"Hey, you should be writing tests!"</Quote>
      <Cite>Your Boss</Cite>
    </BlockQuote>
  </Appear>
  
  <Appear>
    <Heading size={3} >
      Feels Like...
    </Heading>
  </Appear>
  
  </div>
};

export const Workflow1 = {
  slide: () =>
  <div>
    <Image src={images.tl1.replace("/", "")} margin="1em auto " width="100%"></Image>    
    <Appear>
      <div>
        <Image src={images.arrow.replace("/", "")} margin="0 auto"></Image>     
        <Image src={images.tl2.replace("/", "")} margin="1em auto" width="100%"></Image>     
      </div>
    </Appear>    
  </div>
};
  
export const Stress = {
  slide: () =>
  <Image src={images.stress.replace("/", "")} margin="0" width="100%"></Image>    
};

export const Fortunately = {
  slide: () =>
    <div>
    <Heading size={1} textFont="secondary"  textColor="secondary" fit>
      Fortunately
    </Heading>

    <Heading size={1} fit>
      It&#39;s not like that at all
    </Heading>
  </div>
};




