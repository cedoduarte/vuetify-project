import { defineStore } from "pinia";
import { useErrorStore } from "./error";

export interface ITask {
    name: string;
    finished: boolean;
}

export interface IState {
    taskList: ITask[];
    showForm: boolean;
    currentTask: null | ITask;
}

export const useTaskStore = defineStore("task", {
    state: (): IState => ({
        taskList: [
            { name: "Susbribe", finished: false },
            { name: "Download video", finished: false }
        ],
        currentTask: null,
        showForm: false
    }),
    actions: {
        createTask(name: string) {
            const errorStore = useErrorStore();
            const exists = this.taskList.find(task => task.name.toLocaleLowerCase() === name.toLocaleLowerCase());
            if (exists) {
                errorStore.setMessage("The task's name already exists");
                return;
            }
            this.taskList = [...this.taskList, { name, finished: false }];
            //localStorage.setItem("taskList", JSON.stringify(this.taskList));
        },
        getTasks() {
            const dataString = localStorage.getItem("taskList");
            if (dataString) {
                this.taskList = JSON.parse(dataString);
            }
        },
        deleteTask(index: number) {
            this.taskList = this.taskList.filter((taskItem, taskIndex) => taskIndex !== index);
            //localStorage.setItem("taskList", JSON.stringify(this.taskList));
        }
    },
    getters: {
        finishedTasks: (state) => {
            return state.taskList.filter(task => task.finished);
        }
    },
    persist: true
});