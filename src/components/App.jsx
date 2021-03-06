import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// {
//   id: 1,
//   emoji: "ðª",
//   name: "Tense Biceps",
//   meaning:
//     "âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry 
      name="Tense Biceps"
      emoji="ðª"
      meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry 
      name="Tense Biceps"
      emoji="ðª"
      meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry 
      name="Tense Biceps"
      emoji="ðª"
      meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      /> */}

        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
