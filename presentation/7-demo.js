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
import CodeSlide from "spectacle-code-slide";
import ShortList from "../src/short-list.js";

import preloader from "spectacle/lib/utils/preloader";

const images = {
    dir: require("../assets/images/dirlisting.png"),
    task: require("../assets/images/everyword.jpg"),
};


export const Title = {
    bgColor: "titlecard",
    slide: () =>
        <div>
        <Heading size={1} lineHeight={1} textColor="white" textFont="tertiary">
          7.Demo
        </Heading>
        </div>
};

export const Task = {
  slide: () =>
  <Image src={images.task.replace("/", "")} margin="0"></Image>
};

export const Process = {
  slide: () =>
  <div>
    <Heading size={2} textFont="tertiary" textColor="black">
      pattern: ___E_
    </Heading>
    <Appear>
      <Heading size={2} textFont="tertiary">
        letters:  onyh
      </Heading>
    </Appear>
    <Appear>
      <Heading size={3} textFont="tertiary" textColor="black">
         hnoEy<br />
         hnyEo<br />
         honEy<br />
         hynEo etc...<br />
      </Heading>
    </Appear>
    <Appear>
      <Heading size={2}>
        Then check those against a dictionary
      </Heading>
    </Appear>
  </div>
}

export const DictDir = {
  slide: () =>
  <Image src={images.dir.replace("/", "")} margin="0" width="100%"></Image>
};

export const OnAnAirplane = {
  slide: () =>
    <div>
      <Heading size={1}>
        Goal: an app to help Roxane cheat at word games
      </Heading>
      <Appear>
        <Heading size={2} fit>
          Write it on an airplane in 30 minutes
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          This is so easy I don't need tests!
        </Heading>
      </Appear>
    </div>
};

export const Disaster = {
  slide: () =>
    <div>
      <Heading size={1}>
        Result: DISASTER
      </Heading>
      <Appear>
        <Heading size={2} fit>
          I wasted over an hour
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          Trying to retrieve dictionary words
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} fit>
          Every. Single. Return. Was. Nil.
        </Heading>
      </Appear>
    </div>
};

export const Disaster2 = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        It doesn't seem that hard
      </Heading>
      <Appear>
        <Heading size={2} fit>
          But I was loading a nested data structure
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          With regular expressions
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} fit>
          Then reading it in the same function
        </Heading>
      </Appear>
    </div>
};

export const Disaster3 = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        And the only way I had to test it
      </Heading>
      <Appear>
        <Heading size={2} fit>
          Was to reload the page
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          Enter in patterns and letters
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} fit>
          And resubmit the form
        </Heading>
      </Appear>
    </div>
};

export const Okay = {
  slide: () =>
    <div>
      <Heading size={1}>
        Okay.
      </Heading>
      <Appear>
        <Heading size={2} fit>
           Let's structure the code and write tests.
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          The Result:
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} fit>
          I Finished the app in 35 minutes.
        </Heading>
      </Appear>
    </div>
};


export const BetterProcess = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        Once I had the test written & running
      </Heading>
      <Appear>
        <Heading size={2} fit>
           I never had to load the page to test it
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          And could stay focused on the code file
        </Heading>
      </Appear>
    </div>
};

export const BetterProcessB = {
  slide: () =>
    <div>
      <Heading size={1} fit>
        The Result:
      </Heading>
      <Appear>
        <Heading size={2} fit>
           Class written in ~90 seconds
        </Heading>
      </Appear>
      <Appear>
        <Heading size={2} textColor="black" fit>
          And the tests proved correctness
        </Heading>
      </Appear>
    </div>
};


export const Demo00 = {
  slide: () =>
    <CodePane lang="ruby"
      transition={[]}
      source={require("raw!./../assets/codeSamples/00_no_tests-solve.rb")}
      />
};
export const Demo00a = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/00a_no_tests-dictionary-a.rb")}  />
}
export const Demo00b = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/00b_no_tests-dictionary-b.rb")}  />
}

export const Demo01 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/01_dictionary_test.rb")}  />
}
export const Demo02 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/02_dictionary.rb")}  />
}
export const Demo03 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/03_library_spec.rb")}  />
}
export const Demo04 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/04_library.rb")}  />
}
export const Demo05 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/05_library_spec.rb")}  />
}
export const Demo06 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/06_library.rb")}  />
}
export const Demo07 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/07_library_spec.rb")}  />
}
export const Demo08 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/08_library.rb")}  />
}
export const Demo09 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/09_dictionary_spec.rb")}  />
}
export const Demo10 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/10_dictionary.rb")}  />
}
export const Demo11 = {
  slide: () =>
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/11_final.rb")}  />
}
