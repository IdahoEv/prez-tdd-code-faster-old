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
    engineers: require("../assets/images/engineers.jpg"),
    doctors: require("../assets/images/doctors.jpg"),
};

// preloader([images.dna, images.groningen]);

export const Title = {
    bgColor: "titlecard",
    slide: () =>
        <div>
        <Heading size={1} textColor="white" textFont="tertiary">
          3.Test Driven Development
        </Heading>
        </div>
};

export const Quip = {
  slide: () => 
  <div>
  <Heading size={1} fit>
    TDD != "Writing Tests"
  </Heading>
  <Appear>
    <Heading size={2} fit>
      Test Driven Development
    </Heading>
  </Appear>
  <Appear>
    <Heading size={3} fit>
      is an <em>engineering process</em>
    </Heading>
  </Appear>
  </div>
}

export const Defined = {
  slide: () => 
    <div>
      <Heading size={1}>
        TDD Defined:
      </Heading>
      <List ordered start={1}>
        <Appear><ListItem>Describe correct behavior in a test</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it fails</ListItem></Appear>
        <Appear><ListItem>Write code</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it passes</ListItem></Appear>
        <Appear><ListItem>Refactor code</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it passes</ListItem></Appear>
      </List>
    </div>      
};


export const Defined2 = {
  slide: () => 
    <div>
      <Heading size={1}>
        TDD Described:
      </Heading>
      <Appear><Heading size={2} textColor="red">Red</Heading></Appear>
      <Appear><Heading size={2}>Green</Heading></Appear>
      <Appear><Heading size={2} textColor="blue">Refactor</Heading></Appear>
    </div>      
};

export const Defined3 = {
  slide: () => 
  <div>
    <Heading size={1}>
      It&#39;s a professional process!
    </Heading>
    <table>
      <tr>
        <td><Appear><Heading size={2} textAlign="left" textColor="black">Write test</Heading></Appear></td>
        <td><Appear><Heading size={2} textAlign="left">Plan</Heading></Appear></td>
      </tr>
      <tr>  
        <td><Appear><Heading size={2} textAlign="left" textColor="black">Write code&nbsp;&nbsp;</Heading></Appear></td>
        <td><Appear><Heading size={2} textAlign="left">Execute</Heading></Appear></td>
      </tr>
      <tr>
        <td><Appear><Heading size={2} textAlign="left" textColor="black">Run Test</Heading></Appear></td>
        <td><Appear><Heading size={2} textAlign="left">Validate</Heading></Appear></td>
      </tr>
    </table>

  </div>
};



export const SoftwareEngineering = {
  slide: () => 
    <div>
      <Heading size={1} lineHeight={1.5} fit>
        So process (incl. TDD)
      </Heading>
      <Appear>
      <Heading size={2} lineHeight={1.5} fit>
        Turns <em>Programming</em>
      </Heading>
      </Appear>
      <Appear>
      <Heading size={3} lineHeight={1.5} fit>
        Into <em>Software Engineering</em>
      </Heading>
      </Appear>
    </div>
};



export const Process = {
  slide: () => 
    <div>
      <Heading size={1} lineHeight={1.5}>
        TDD
      </Heading>
      <Appear>
      <Heading size={2} lineHeight={1.5} fit>
        Turns <em>Programming</em>
      </Heading>
      </Appear>
      <Appear>
      <Heading size={3} lineHeight={1.5} fit>
        Into <em>Software Engineering</em>
      </Heading>
      </Appear>
    </div>
};



  



