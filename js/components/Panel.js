export default {
    template: `
    <div :class="{
        'p-4 border rounded-lg': true,
        'bg-white border-gray-300 text-gray-800': theme == 'light',
        'bg-gray-700 border-gray-600': theme == 'dark',
    }">
        <h2 v-if="$slots.heading" class="font-bold mb-2">
            <slot name="heading"></slot>
        </h2>

        <slot></slot>

        <footer v-if="$slots.footer" class="text-xs border-t border-gray-600 mt-3 pt-3">
            <slot name="footer"></slot>
        </footer>
    </div>
    `,
    props: {
        theme: { type: String, default: 'dark' }
    }
}