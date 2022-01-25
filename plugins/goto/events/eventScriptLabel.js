const id = "RA_EVENT_LABEL";
const name = "Script : Label";
const groups = ["Plugin Pak", "EVENT_GROUP_CONTROL_FLOW"];

const fields = [
	{
		label: "Adds a Label to be jumped to"
	},
	{
		key: "Label",
		label: "Name of the label to define",
		type: "text",
		defaultValue: "Label",
		placeholder: "Label",
	},
];

const compile = (input, helpers) => {
  const { labelDefine } = helpers;
    labelDefine(input.Label);
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
