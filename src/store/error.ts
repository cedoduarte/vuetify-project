import { defineStore } from "pinia";

export interface IState {
    message: string | null;
}

export const useErrorStore = defineStore("error", {
    state: (): IState => ({
        message: null
    }),
    actions: {
        resetMessage() {
            this.message = null;
        },
        setMessage(message: string) {
            this.message = message;
        }
    }
});