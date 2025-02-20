const Attachments = require("./components/Attachments");
const Checklists = require("./components/Checklists");
const Comments = require("./components/Comments");
const CustomFields = require("./components/CustomFields");
const Dependencies = require("./components/Dependencies");
const Folders = require("./components/Folders");
const Goals = require("./components/Goals");
const Guests = require("./components/Guests");
const Lists = require("./components/Lists");
const Members = require("./components/Members");
const SharedHierarchy = require("./components/SharedHierarchy");
const Spaces = require("./components/Spaces");
const Tags = require("./components/Tags");
const Task = require('./components/Tasks');
const TaskTemplates = require("./components/TaskTemplates");
const Teams = require("./components/Teams");
const TimeTracking = require("./components/TimeTracking");
const Views = require("./components/Views");
const Webhooks = require("./components/Webhooks");

var Clickup = function (token) {
	this.token = token;

	this.Attachments = new Attachments(this.token);
	this.Checklists = new Checklists(this.token);
	this.Comments = new Comments(this.token);
	this.CustomFields = new CustomFields(this.token);
	this.Dependencies = new Dependencies(this.token);
	this.Folders = new Folders(this.token);
	this.Goals = new Goals(this.token);
	this.Guests = new Guests(this.token);
	this.Lists = new Lists(this.token);
	this.Members = new Members(this.token);
	this.SharedHierarchy = new SharedHierarchy(this.token);
	this.Spaces = new Spaces(this.token);
	this.Tags = new Tags(this.token);
	this.Tasks = new Task(this.token);
	this.TaskTemplates = new TaskTemplates(this.token);
	this.Teams = new Teams(this.token);
	this.TimeTracking = new TimeTracking(this.token);
	this.Views = new Views(this.token);
	this.Webhooks = new Webhooks(this.token);
}

module.exports = Clickup;
