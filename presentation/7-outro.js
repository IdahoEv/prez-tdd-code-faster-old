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
        <Heading size={1} fit lineHeight={1} textColor="white">
          Thanks!
        </Heading>
        
        <Heading size={4} textColor="white">
          Evan Dorn - LootCrate
        </Heading>
        </div>
};

var savedForLater = {
  slide: () =>
    <Heading size={4} textColor="black" margin="1em auto">
      Slides and Code Examples:
      <Link href="https://github.com/IdahoEv/prez-tdd-code-faster">
        <Text bold textColor="tertiary">https://github.com/IdahoEv/prez-tdd-code-faster</Text>
      </Link>
    </Heading>

}

