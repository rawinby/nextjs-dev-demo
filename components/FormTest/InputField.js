export const InputField = [
	{ label:"First name", name: "firstname", type: "text", required: true, autoFocus: false, maxlength: 250},
	{ label:"Last name", name: "lastname", type: "text", required: true, autoFocus: false},
	{ label:"E-Mail", name: "email", type: "email", required: true, autoFocus: false, placeholder: 'example@email.com'},
	{ label:"Age", name: "age", type: "number", required: true, autoFocus: false, min: 10, max: 99},
	{ label:"Birthday", name: "birthday", type: "date", required: true, autoFocus: false, placeholder: 'YYYY-MM-DD'},
	{ label:"Gender", name: "gender", type: "radio", required: true, options: [
		{value:"1",label:"Male", checked: false},
		{value:"2",label:"Female", checked: false}
	]},
	{ label:"Color", name: "color", type: "select", required: true, options: [
		{value:"",label:""},
		{value:"1", label:"Green"},
		{value:"2", label:"Red"},
		{value:"3", label:"Blue"},
	]},
	{ label:"Hobby", name: "hobby", type: "checkbox",  required: true, options: [
		{name:"hobby1", value:"1",label:"TV", checked: false},
		{name:"hobby2", value:"2",label:"Radio", checked: false},
		{name:"hobby3", value:"3",label:"Internet", checked: false},
		{name:"hobby4", value:"4",label:"Game", checked: false},
	]},	
];