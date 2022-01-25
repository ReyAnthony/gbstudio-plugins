const l10n = require("../helpers/l10n").default;

const id = "Go to";
const groups = ["EVENT_GROUP_CONTROL_FLOW"];

const fields = [
  {
    label: "Go to the mentionned Label.",
  },
  {
      key: "Label",
      label: "Label to jump to"
      type: "text",
      updateFn: () => {
          //check already define, not null etc..
      },
      defaultValue: "Label",
      placeholder: "Label",
  },
];

const compile = (input, helpers) => {
  const { labelGoto } = helpers;
    labelGoto(input.Label);
};

module.exports = {
  id,
  groups,
  fields,
  compile,
};
