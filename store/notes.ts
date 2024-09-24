import {defineStore} from "pinia";
import {TaskDto} from "@/core/model/taskDto";
const NOTES_LOCAL_STORAGE_KEY = 'notes';
const getNotes = () => {
    const items = localStorage.getItem(NOTES_LOCAL_STORAGE_KEY);

    return items ? JSON.parse(items) : []
}
export const notesStore = defineStore({
    id: 'notes',
    state: () => ({
        items: getNotes()
    }),
    getters: {
        getItems: (state) => state.items,
    },
    actions: {
         addItem(item: TaskDto) {
             this.items.push(item);
             localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(this.items));
        },
         deleteItem(taskTitle: string) {
             const index = this.items.findIndex(x => x.title === taskTitle);
             this.items.splice(index,1);
             localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(this.items));
        },
        updateItem(item:TaskDto){
            this.items.find((x: TaskDto) => x.title === item.title).isComplete = item.isComplete;
            localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(this.items));
        },
        completeAll() {
            this.items.map((task: TaskDto) => {
                task.isComplete = true;
            });
            localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(this.items));
        },
        deleteAllCompleted() {
           this.items.forEach((x:TaskDto,index:number) => {
               if (x.isComplete){
                   this.items.splice(index,1)
               }
           })
            localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(this.items));
        }
    }
})