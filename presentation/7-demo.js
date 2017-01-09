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

export const DictDir = {
  slide: () =>
  <Image src={images.dir.replace("/", "")} margin="0" width="100%"></Image>    
};

export const Demo00 = {
  slide: () => 
    <CodePane lang="ruby" source={require("raw!./../assets/codeSamples/00_no_tests.rb")}  />
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