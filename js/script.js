const app = new Vue({
    el: '#root',
    data: {
        images: [
            {
                titolo: 'Svezia',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                img: 'img/01.jpg'
            },
            {
                titolo: 'Svizzera',
                testo: 'Lorem ipsum',
                img: 'img/02.jpg'
            },
            {
                titolo: 'Gran Bretagna',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                img: 'img/03.jpg'
            },
            {
                titolo: 'Germania',
                testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
                img: 'img/04.jpg'
            },
            {
                titolo: 'Paradise',
                testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
                img: 'img/05.jpg'
            },  
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
        },

        selectImg: function(index){
            this.currentImg = index;
        }
    }
})