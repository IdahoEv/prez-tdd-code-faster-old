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
    arrow: require("../assets/images/down-arrow.png"),
    timeline1: require("../assets/images/timeline1.png"),
    timeline2: require("../assets/images/timeline2.png"),
    timeline3: require("../assets/images/timeline3.png"),
    timeline4: require("../assets/images/timeline4.png"),
    timeline5: require("../assets/images/timeline5.png"),
    timeline6: require("../assets/images/timeline6.png"),
    timeline7: require("../assets/images/timeline7.png"),
    timeline8: require("../assets/images/timeline8.png"),
};

// preloader([images.dna, images.groningen]);

export const Title = {
    bgColor: "titlecard",
    slide: () =>
        <div>
        <Heading size={1} lineHeight={1} textColor="white" textFont="tertiary">
          5.Code Faster
        </Heading>
        </div>
};

export const Speed = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        Okay, so TDD&#39;s cleaner.
      </Heading>
      <Appear><Heading size={2} fit>
        But is it really <em>faster?</em>
      </Heading></Appear>
    </div>
};


export const OldTimeline = {
  slide: () =>
  <Image src={images.timeline1.replace("/", "")} margin="0" width="100%"></Image>
};

export const TimelineZoom = {
  slide: () =>
  <Image src={images.timeline3.replace("/", "")} margin="0" width="100%"></Image>
};

export const Validation = {
  slide: () =>
  <div>
    <Heading size={1} fit>
      You&#39;re <em>always</em> validating
    </Heading>
    <div>
    <Appear><Heading size={2} fit>Reloading the browser</Heading></Appear>
    <Appear><Heading size={2} fit textColor="black">Opening console</Heading></Appear>
    <Appear><Heading size={2} fit>Reading print outputs</Heading></Appear>
    </div>
  </div>
};

export const TestsFasterValidation = {
  slide: () =>
  <div>
    <Heading size={1} fit>
      Tests are faster
    </Heading>
    <div>
    <Appear><Heading size={2} fit>And more repeatable</Heading></Appear>
    <Appear><Heading size={2} textColor="black" fit>Than hand validation</Heading></Appear>
    </div>
  </div>
};

export const SwitchWindows = {
  slide: () =>
  <div>
    <Heading size={1} fit>
      Every time you switch windows
    </Heading>
    <div>
    <Appear><Heading size={2} fit>Your brain needs 15 seconds</Heading></Appear>
    <Appear><Heading size={2} textColor="black" fit>To rebuild visual context</Heading></Appear>
    </div>
  </div>
};


export const TimelineTDD1 = {
  slide: () =>
  <div>
    <Image src={images.timeline4.replace("/", "")} margin="1em auto" width="100%"></Image>
    <Appear>
      <div>
        <Image src={images.arrow.replace("/", "")} margin="0 auto"></Image>
        <Image src={images.timeline5.replace("/", "")} margin="1em auto" width="100%"></Image>
      </div>
    </Appear>
  </div>
};

export const Coding = {
  slide: () =>
  <div>
    <Heading size={1} fit>
      Once you&#39;ve thought through a plan
    </Heading>
    <div>
    <Appear><Heading size={2} fit>And declared the behavior</Heading></Appear>
    <Appear><Heading size={2} textColor="black" marginTop="1em">The implementation is often <u>obvious</u></Heading></Appear>
    </div>
  </div>
};


export const TimelineTDD2 = {
  slide: () =>
  <div>
    <Image src={images.timeline5.replace("/", "")} margin="1em auto" width="100%"></Image>
    <Appear>
      <div>
        <Image src={images.arrow.replace("/", "")} margin="0 auto"></Image>
        <Image src={images.timeline6.replace("/", "")} margin="1em auto" width="100%"></Image>
      </div>
    </Appear>

  </div>
};

export const ZoomOut = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        Let&#39;s Zoom Back Out
      </Heading>
      <Heading size={1} fit>
        And look at the bigger picture
      </Heading>
    </div>
};

export const TimelineTDD3 = {
  slide: () =>
  <div>
    <Image src={images.timeline7.replace("/", "")} margin="1em auto" width="100%"></Image>
    <Appear>
      <div>
        <Image src={images.arrow.replace("/", "")} margin="0 auto"></Image>
        <Image src={images.timeline8.replace("/", "")} margin="1em auto" width="100%"></Image>
      </div>
    </Appear>
  </div>
};

export const IfComplicated = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        If your code is Complex...
      </Heading>
      <Appear>
      <Heading size={2} fit>
        And you&#39;re validating by hand...
      </Heading>
      </Appear>
      <Appear>
      <Heading size={3} fit>
        ...You&#39;re gonna miss something.
      </Heading>
      </Appear>
    </div>
};

export const DeepIf = {
  slide: () =>
    <CodePane lang="javascript" source={require("raw!./../assets/codeSamples/deep_if.example")}  />
};


export const SpeedBenefits = {
  slide: () =>
    <div>
      <Heading size={1}>
        Speed Benefits:
      </Heading>
      <List ordered start={1}>
        <Appear><ListItem>Faster Validation Step</ListItem></Appear>
        <Appear><ListItem>Faster Coding Step</ListItem></Appear>
        <Appear><ListItem>Fewer Disasters</ListItem></Appear>
      </List>
    </div>
};
