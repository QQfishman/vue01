var appObj = {
    data() {
        return {
            firstName: 'Huawei',
            lastName : 'Yu',
            email    : 'huawei.yu@gmail.com',
            gender   : 'male',
            picture  : 'https://randomuser.me/api/portraits/men/10.jpg',
            counter  : 0
        }
    },
    methods: {
        async getUser() {

            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            var result = results[0];

            this.firstName = result.name.first
            this.lastName  = result.name.last
            this.email     = result.email
            this.gender    = result.gender
            this.picture   = result.picture.large
         }
    }
    // lifecycle hooks.
    // mounted() {
    //     setInterval(() => {
    //         this.counter++;
    //     }, 1000)
    // },
    // UIs
    // template:`
    //     <button v-on:click="addToCounter">Add to counter</button>
    //     <p>Counter {{ counter }}</p>
        
    //     <h1>{{firstName}} {{lastName}} </h1>
    //     <h3>Email: {{email}}</h3>
    //     <button>Get Random User</button>
    // `
    // template:`
    //     <button v-on:click="addToCounter">Add to counter</button>
    //     <p>Counter {{ counter }}</p>
    //     <img v-bind:src={{picture}} alt=""/>
    //     <h1>{{firstName}} {{lastName}} </h1>
    //     <h3>Email: {{email}}</h3>
    //     <button>Get Random User</button>
    // `
};

const app = Vue.createApp(appObj);
app.mount("#app");