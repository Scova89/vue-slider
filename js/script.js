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
            if(this.currentImg == this.images.length - 1){
                this.currentImg = 0;  
            }else{
                this.currentImg++;
            }
            
        },
        prevImg: function(){
            if(this.currentImg == 0){
                this.currentImg = this.images.length - 1;
            }else{
                this.currentImg--;
            }
            
        }
    }
})