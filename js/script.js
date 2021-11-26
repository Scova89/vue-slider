const app = new Vue({
    el: '#root',
    data: {
        images: [
            "img/01.jpg",
            "img/02.jpg",
            "img/03.jpg",
            "img/04.jpg",
            "img/05.jpg"
        ],

        currentImg: 0,
    },
    methods: {
        nextImg: function(){
            this.currentImg++;
        },
        prevImg: function(){
            this.currentImg--;
        }
    }
})