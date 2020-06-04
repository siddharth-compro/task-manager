export class Task {
    constructor(
		    public _id: String,
			public title: String,
			public description: String,
			public completed: Boolean,
			public subtask: []
		) {}
}