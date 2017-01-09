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
          2.Planning
        </Heading>
        </div>
};

export const Smart = {
  slide: () =>
  <Heading size={1} >
     Programmers are Smart
  </Heading>
}
export const Liability = {
  slide: () =>
  <div>
  <Heading size={1} fit>
     But Intelligence
  </Heading>
  <Appear>
    <Heading size={2} textFont="secondary" margin="1em auto" textColor="secondary">
       can be a 
    </Heading>
  </Appear>
  <Appear>
    <Heading size={2} margin="1em auto" textColor="red" fit>
       LIABILITY
    </Heading>
  </Appear>
  </div>
}
export const Intelligence = {
  slide: () =>
  <div>
  <Heading size={1} fit>
     Because Intelligence
  </Heading>
  <Appear>
    <Heading size={2} textFont="secondary" margin="1em auto">
       Enables
    </Heading>
  </Appear>
  </div>
}

export const Progress = {
  slide: () =>
  <div>
  <Heading size={1} fit>
     Because Intelligence Enables
  </Heading>
  <Appear>
    <Heading size={1} textColor="secondary">
       Progress
    </Heading>
  </Appear>
  <Appear>
    <Heading size={3} >
       without
    </Heading>
  </Appear>
  <Appear>
    <Heading size={1} textColor="secondary">
       Process
    </Heading>
  </Appear>
  </div>
}

export const Professionals = {
  slide: () =>
  <div>
  <Heading size={1} fit>
     The Professional Process:
  </Heading>
    <Heading size={2}>
    1. Plan
    </Heading>
    <Heading size={2}>
    2. Execute
    </Heading>
    <Heading size={2}>
    3. Validate
    </Heading>
  </div>
}

export const Engineers = {
  slide: () =>
  <Image src={images.engineers.replace("/", "")} margin="0" width="100%"></Image>    
};
export const Doctors = {
  slide: () =>
  <Image src={images.doctors.replace("/", "")} margin="0" width="100%"></Image>    
};


export const Engineers2 = {
  slide: () => 
    <div>
      <Heading size={1} >
         Engineers:
      </Heading>
      <Heading size={2}>
        1. Blueprint
      </Heading>
      <Heading size={2}>
        2. Construction
      </Heading>
      <Heading size={2}>
        3. Inspection
      </Heading>
    </div>
};

export const Doctors2 = {
  slide: () => 
    <div>
      <Heading size={1} >
        Doctors
      </Heading>
      <Heading size={2}>
        1. Surgical Plan
      </Heading>
      <Heading size={2}>
        2. Surgery
      </Heading>
      <Heading size={2}>
        3. Post-Op
      </Heading>
    </div>
};

export const Why0 = {
  slide: () => 
  <div>
    <Heading size={1} >
      Why does this process work?
    </Heading>
  </div>
};


export const Why1 = {
  slide: () => 
  <div>
    <Heading size={1} >
      Separate cognitive work into stages
    </Heading>
    <Heading size={2} >
      To reduce errors and speed execution
    </Heading>
  </div>
};

export const Why2 = {
  slide: () => 
  <div>
    <Heading size={1} >
      1. Plan
    </Heading>
    <Appear>
      <Heading size={2} >
        What am I doing, and how will I do it?
      </Heading>
    </Appear>
    <Appear>
      <Heading size={3} >
        ... this is the hardest part!
      </Heading>
    </Appear>
  </div>
};

export const Why3 = {
  slide: () => 
  <div>
    <Heading size={1}>
      2. Execute
    </Heading>
    <Appear>
      <Heading size={2}>
        This part is easy now!
      </Heading>
    </Appear>
    <Appear>  
      <Heading size={3}>
        Because you separated out some complexity
      </Heading>
    </Appear>
  </div>
};

export const Why4 = {
  slide: () => 
  <div>
    <Heading size={1} >
      3. Validate
    </Heading>
    <Appear>
      <Heading size={2} >
        Check that execution went to plan
      </Heading>
    </Appear>
  </div>
};

export const Programmers = {
  slide: () => 
    <div>
      <Heading size={1} >
        So What About Programming?
      </Heading>
    </div>
};

export const Programmers3 = {
  slide: () => 
    <div>
      <Heading size={1} >
        But writing tests <em>beforehand</em>
      </Heading>
      <Appear>
      <Heading size={2} >
        Is also <em>making a plan before coding</em>
      </Heading>
      </Appear>
    </div>
};

export const Validation = {
  slide: () => 
    <div>
      <Heading size={1} >
        Tests obviously provide
      </Heading>
      <Appear><Heading size={2} >Validation</Heading></Appear>
      <Appear><Heading size={2} textColor="black">But what&#39;s the plan...?</Heading></Appear>
    </div>
};

export const TDDDefined = {
  slide: () => 
    <div>
      <Heading size={1}>
        TDD Defined:
      </Heading>
      <List ordered>
        <Appear><ListItem>Describe correct behavior in a test</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it fails</ListItem></Appear>
        <Appear><ListItem>Write code</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it passes</ListItem></Appear>
        <Appear><ListItem>Refactor code</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it passes</ListItem></Appear>
      </List>
    </div>      
};


export const TDDDefined2 = {
  slide: () => 
    <div>
      <Heading size={1}>
        TDD Defined:
      </Heading>
      <Appear><Heading size={2} textColor="red">Red</Heading></Appear>
      <Appear><Heading size={2}>Green</Heading></Appear>
      <Appear><Heading size={2} textColor="black">Refactor</Heading></Appear>
    </div>      
};





  



