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
        <Heading size={1} textColor="white" textFont="tertiary">
          4.Code Better
        </Heading>
        </div>
};

export const Starting = {
  slide: () => 
    <div>
      <Heading size={1} >
        Starting to code before you plan
      </Heading>
      <Appear>
        <Heading size={2} >
          Is how spaghetti code happens
        </Heading>
      </Appear>
      <Appear>
        <Heading size={3} >
          "Winging it"
        </Heading>
      </Appear>
    </div>
};

export const Planning = {
  slide: () => 
    <div>
      <Heading size={1} >
        Planning: Organizes your thoughts
      </Heading>
      <Appear>
        <Heading size={2} >
          Declares your intentions
        </Heading>
      </Appear>
      <Appear>
        <Heading size={3} >
          = Cleaner execution!
        </Heading>
      </Appear>
    </div>
};

export const Testability = {
  slide: () => 
    <div>
      <Heading size={1} >
        Testable code
      </Heading>
      <Appear>
        <Heading size={2} >
          Looks a lot like
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="blac">
          "good code"
        </Heading>
      </Appear>
    </div>
};

export const CleanCode = {
  slide: () => 
    <div>
      <Heading size={1} >
        Clean Code:
      </Heading>
      <Appear>
        <Heading size={2} >
          Modularized
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} >
          Decoupled
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} >
          Short Functions w/ Limited Scope
        </Heading>
      </Appear>
    </div>
};

export const DeepIf = {
  slide: () => 
    <CodePane lang="javascript" source={require("raw!./../assets/codeSamples/deep_if.example")}  />
};

export const CyclomaticComplexity = {
  slide: () => 
    <div>
      <Heading size={1} fit>
        Cyclomatic Complexity
      </Heading>
      <Appear>
        <Heading size={2} fit>
          The number of code paths through a function
        </Heading>
      </Appear>
      <Appear>
        <Heading size={3} textColor="black">
          The <em>minimum</em> # of examples to prove correctness
        </Heading>
      </Appear>
    </div>
};

export const CleanCode3 = {
  slide: () => 
    <div>
      <Heading size={1} >
        Writing Tests First
      </Heading>
      <Appear>
        <Heading size={2} >
           <em>Implicitly</em> results in small, well-defined functions       
        </Heading>
      </Appear>
    </div>
};

export const CleanCode4 = {
  slide: () => 
    <div>
      <Heading size={1} lineHeight={1.5} fit>
        A test <em>describes</em> your code
      </Heading>
      <Appear>
        <Heading size={2} >
        Therefore your code will be <em>describable</em>
        </Heading>
      </Appear>
    </div>
};


