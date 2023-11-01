const { createApp } = Vue;

createApp({
    data() {
        return {
            result: ''
        };
    },
    methods: {
        append(char) {
            this.result += char;
        },
        clear() {
            this.result = '';
        },
        backspace() {
            this.result = this.result.slice(0, -1);
        },
        calculate() {
            try {
                this.result = eval(this.result);
            } catch (error) {
                this.result = 'Error';
            }
        }
    }
}).mount('#app');