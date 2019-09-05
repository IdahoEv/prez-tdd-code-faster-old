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
    bgColor: "secondary",
    slide: () =>
        <div>
        <Heading size={1} fit lineHeight={1} textColor="black">
          Test-Driven Development
        </Heading>
        <Heading size={2} fit caps textColor="white">
          Write Better Code, Faster.
        </Heading>
        <Heading size={4} textColor="black">
          Evan Dorn - Honey
        </Heading>
    </div>
};

export const AboutMe = {
    bgColor: "secondary",
    slide: () => <div>
            <Heading size={1} caps >
                Evan Dorn
            </Heading>
            <Heading size={2}  textColor="tertiary" >
                @IdahoEv
            </Heading>

    </div>
}

var savedForLater = {
  slide: () =>


          <Heading size={4} textColor="black" margin="1em auto">
            Slides and Code Examples:
            <Link href="https://github.com/IdahoEv/prez-tdd-code-faster">
              <Text bold textColor="tertiary">https://github.com/IdahoEv/prez-tdd-code-faster</Text>
            </Link>
          </Heading>

}
