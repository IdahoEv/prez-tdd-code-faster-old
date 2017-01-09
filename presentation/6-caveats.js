import React from "react";
import {
    Heading,
    Text,
    Appear,
    Link,
    Image,
    Code,
    List,
    ListItem,
    CodePane
} from "spectacle";
import ShortList from "../src/short-list.js";

import preloader from "spectacle/lib/utils/preloader";

const images = {
    // dna: require("../assets/images/green_blue_dna.min.jpg"),
    // groningen: require("../assets/images/groningen-php.png")
};

// preloader([images.dna, images.groningen]);

export const Title = {
    bgColor: "titlecard",
    slide: () =>
        <div>
        <Heading size={1} lineHeight={1} textColor="white" textFont="tertiary">
          6.Caveats
        </Heading>
        </div>
};

export const MasteringTakesTime = {
  slide: () => 
    <div>
      <Heading size={1}>
        First Caveat: 
      </Heading>
      <Appear>
        <Heading size={2} fit>
          You won&#39;t be faster right away
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          Mastering TDD takes practice
        </Heading>
      </Appear>
    </div>      
};

export const NotForEverything = {
  slide: () => 
    <div>
      <Heading size={1}>
        Second Caveat: 
      </Heading>
      <Appear>
        <Heading size={2} fit>    
          It doesn&#39;t work for all cases
        </Heading>
      </Appear>
      <Appear>
        <Heading size={3} fit>
          Some things are too hard to test
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} fit>
          Sometimes you don&#39;t have a plan yet 
        </Heading>
      </Appear>
    </div>      
};

export const ExploratoryCoding = {
  slide: () => 
    <div>
      <Heading size={1}>
        Exploratory Coding
      </Heading>
      <Appear>
        <Heading size={2} fit>    
          When the "How" isn&#39;t clear
        </Heading>
      </Appear>
      <Appear>
        <Heading size={3} fit>
          Go ahead and fiddle around
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} fit>
          But then test and refactor 
        </Heading>
      </Appear>
    </div>      
};
export const ExploratoryCoding2 = {
  slide: () => 
    <div>
      <Heading size={2}>    
        Sometimes you can test at a broader level
      </Heading>
      <Appear>
        <Heading size={3}t>
          If the implementation is unclear, try an integration test 
        </Heading>
      </Appear>
    </div>      
};



