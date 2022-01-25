const id = "RA_EVENT_GOTO";
const name = "Script : Go to";
const groups = ["Plugin Pak", "EVENT_GROUP_CONTROL_FLOW"];

const fields = [
	{
		label: "Go to the mentionned Label.",
	},
	{
		key: "Label",
		label: "Label to jump to",
		type: "text",
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
  name,
  groups,
  fields,
  compile,
};
