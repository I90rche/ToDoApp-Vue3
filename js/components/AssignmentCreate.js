export default {
    template:
        `<form @submit.prevent="add" class="w-full">
            <div class="border border-gray-600 rounded text-gray-800 flex">
                <input v-model="newAssignment" placeholder="New assignment..." class="rounded-l p-1 flex-auto">
                <button type="submit" class="py-1 px-2 bg-gray-200 rounded-r">Add</button>
            </div>
        </form>
        `,
    data() {
        return {
            newAssignment: '',
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}