import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
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
      emoji="💪"
      meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry 
      name="Tense Biceps"
      emoji="💪"
      meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry 
      name="Tense Biceps"
      emoji="💪"
      meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      /> */}

        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
