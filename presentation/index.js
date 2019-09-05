import React from "react";
import { Deck, Spectacle } from "spectacle";
import slidify from "../src/slidify.js";
import codeSlidify from "../src/slidify.js";
import CodeSlide from 'spectacle-code-slide';


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/prism.css");
require("../assets/prism.js");

import theme from "./theme";

// Presentation contents
import * as Title from "./0-title";
import * as Intro from "./1-intro";
import * as Plan from "./2-plan";
import * as TDD from "./3-tdd";
import * as Better from "./4-better";
import * as Faster from "./5-faster";
import * as Caveats from "./6-caveats";
import * as Demo from "./7-demo";
import * as Outro from "./7-outro";

export default () => {
  return (
      <Spectacle theme={theme}>
          <Deck transition={["slide"]} transitionDuration={350}>
              {slidify(Title.Title)}

              {slidify(Intro.Title)}
              {slidify(Intro.Demand)}
              {slidify(Intro.Workflow1)}
              {slidify(Intro.Stress)}
              {slidify(Intro.Fortunately)}

              {slidify(Plan.Title)}
              {slidify(Plan.Smart)}
              {slidify(Plan.Liability)}
              {slidify(Plan.Progress)}
              {slidify(Plan.Professionals)}
              {slidify(Plan.Engineers)}
              {slidify(Plan.Doctors)}
              {slidify(Plan.Engineers2)}
              {slidify(Plan.Doctors2)}
              {slidify(Plan.Why0)}
              {slidify(Plan.Why1)}
              {slidify(Plan.Why2)}
              {slidify(Plan.Why3)}
              {slidify(Plan.Why4)}
              {slidify(Plan.Programmers)}
              {slidify(Plan.Validation)}

              {slidify(TDD.Title)}
              {slidify(TDD.Quip)}
              {slidify(TDD.Defined)}
              {slidify(TDD.Defined2)}
              {slidify(TDD.Defined3)}
              {slidify(TDD.SoftwareEngineering)}

              {slidify(Better.Title)}
              {slidify(Better.Starting)}
              {slidify(Better.Planning)}
              {slidify(Better.Testability)}
              {slidify(Better.CleanCode)}
              {slidify(Better.DeepIf)}
              {slidify(Better.CyclomaticComplexity)}
              {slidify(Better.DeepIf)}
              {slidify(Better.CleanCode3)}
              {slidify(Better.CleanCode4)}

              {slidify(Faster.Title)}
              {slidify(Faster.Speed)}
              {slidify(Faster.OldTimeline)}
              {slidify(Faster.TimelineZoom)}
              {slidify(Faster.Validation)}
              {slidify(Faster.TestsFasterValidation)}
              {slidify(Faster.SwitchWindows)}
              {slidify(Faster.TimelineTDD1)}
              {slidify(Faster.Coding)}
              {slidify(Faster.TimelineTDD2)}
              {slidify(Faster.ZoomOut)}
              {slidify(Faster.TimelineTDD3)}
              {slidify(Faster.IfComplicated)}
              {slidify(Faster.DeepIf)}
              {slidify(Faster.SpeedBenefits)}


              {slidify(Caveats.Title)}
              {slidify(Caveats.MasteringTakesTime)}
              {slidify(Caveats.NotForEverything)}
              {slidify(Caveats.ExploratoryCoding)}
              {slidify(Caveats.ExploratoryCoding2)}

              {slidify(Demo.Title)}
              {slidify(Demo.OnAnAirplane)}
              {slidify(Demo.Task)}
              {slidify(Demo.Process)}
              {slidify(Demo.Demo00)}
              {slidify(Demo.DictDir)}
              {slidify(Demo.Demo00a)}
              {slidify(Demo.Demo00b)}
              {slidify(Demo.Disaster)}
              {slidify(Demo.Disaster2)}
              {slidify(Demo.Disaster3)}
              {slidify(Demo.Okay)}
              {slidify(Demo.Demo01)}
              {slidify(Demo.Demo02)}
              {slidify(Demo.BetterProcess)}
              {slidify(Demo.BetterProcessB)}
              {slidify(Demo.Demo03)}
              {slidify(Demo.Demo04)}
              {slidify(Demo.Demo05)}
              {slidify(Demo.Demo06)}
              {slidify(Demo.Demo07)}
              {slidify(Demo.Demo08)}
              {slidify(Demo.Demo09)}
              {slidify(Demo.Demo10)}
              {slidify(Demo.Demo11)}

              {slidify(Outro.Title)}
          </Deck>
      </Spectacle>
  );
}
