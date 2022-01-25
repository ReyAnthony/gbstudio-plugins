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
		updateFn: () => {
			//check if the loop we want to break for exists in this context ?
			//(is this even possible ?)
		},
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
