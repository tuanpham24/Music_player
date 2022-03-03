
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Element
const player = $('.player');
const cd = $('.cd');
const playlist = $('.playlist');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const progress = $('.progress');
const repeatBtn = $('.btn-repeat');
const randomBtn = $('.btn-random');

// App
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Hello Vietnam",
            singer: "Phạm Quỳnh Anh",
            path: "./assets/audio/hello_vietnam.mp3",
            image: "./assets/img/cd-img/pham_quynh_anh.jpg"
        },
        {
            name: "Mang tiền về cho mẹ",
            singer: "Đen Vâu",
            path: "./assets/audio/mang_tien_ve_cho_me.mp3",
            image: "./assets/img/cd-img/den_vau.jpg"
        },
        {
            name: "Reality",
            singer: "Lost Frequencies",
            path: "./assets/audio/Reality.mp3",
            image: "./assets/img/cd-img/reality.jpg"
        },
        {
            name: "Despacito",
            singer: "Luis Fonsi, Daddy Yankee",
            path: "./assets/audio/despacito.mp3",
            image: "./assets/img/cd-img/despacito.jpg"
        },
        {
            name: "Bài này chill phết",
            singer: "Đen Vâu",
            path: "./assets/audio/bai_nay_chill_phet.mp3",
            image: "./assets/img/cd-img/bai_nay_chill_phet.jpg"
        },
        {
            name: "How you like that",
            singer: "Blackpink",
            path: "./assets/audio/how_you_like_that.mp3",
            image: "./assets/img/cd-img/how_you_like_that.jpg"
        },
        {
            name: "Buồn làm chi em ơi",
            singer: "Hoài Lâm",
            path: "./assets/audio/buon_lam_chi_em_oi.mp3",
            image: "./assets/img/cd-img/hoai_lam.jpg"
        },
        {
            name: "Bước qua nhau",
            singer: "Vũ",
            path: "./assets/audio/buoc_qua_nhau.mp3",
            image: "./assets/img/cd-img/vu.jpg"
        },
        {
            name: "Bước qua mùa cô đơn",
            singer: "Vũ",
            path: "./assets/audio/buoc_qua_mua_co_don.mp3",
            image: "./assets/img/cd-img/vu.jpg"
        },
        {
            name: "Một triệu like",
            singer: "Đen Vâu",
            path: "./assets/audio/mot_trieu_like.mp3",
            image: "./assets/img/cd-img/den_vau.jpg"
        },
        {
            name: "Có chắc yêu là đây",
            singer: "Sơn Tùng MTP",
            path: "./assets/audio/co_chac_yeu_la_day.mp3",
            image: "./assets/img/cd-img/son_tung.jpg"
        },
        {
            name: "Cứ chill thôi",
            singer: "Chillies",
            path: "./assets/audio/cu_chill_thoi.mp3",
            image: "./assets/img/cd-img/cu_chill_thoi.jpg"
        },
        {
            name: "At my worst",
            singer: "Pink Sweat$",
            path: "./assets/audio/at_my_worst.mp3",
            image: "./assets/img/cd-img/pink_sweat.jpg"
        },
        {
            name: "Girl like you",
            singer: "Maroon 5",
            path: "./assets/audio/girl_like_you.mp3",
            image: "./assets/img/cd-img/girl_like_you.jpg"
        },
        {
            name: "Let me down slowly",
            singer: "Alec Benjamin",
            path: "./assets/audio/let_me_down_slowly.mp3",
            image: "./assets/img/cd-img/let_me_down_slowly.jpg"
        },
        {
            name: "Let me love you",
            singer: "Justin Bieber",
            path: "./assets/audio/let_me_love_you.mp3",
            image: "./assets/img/cd-img/let_me_love_you.jpg"
        },
        {
            name: "Look what you made me do",
            singer: "Taylor Swift",
            path: "./assets/audio/look_what_you_made_me_do.mp3",
            image: "./assets/img/cd-img/let_me_love_you.jpg"
        },
        {
            name: "Love yourself",
            singer: "Justin Bieber",
            path: "./assets/audio/love_yourself.mp3",
            image: "./assets/img/cd-img/love_yourself.jpg"
        },
        {
            name: "Mascara",
            singer: "Chillies",
            path: "./assets/audio/mascara.mp3",
            image: "./assets/img/cd-img/mascara.jpg"
        },
        {
            name: "Memories",
            singer: "Maroon 5",
            path: "./assets/audio/memories.mp3",
            image: "./assets/img/cd-img/memories.jpg"
        },
        {
            name: "Roar",
            singer: "Katy Perry",
            path: "./assets/audio/Roar.mp3",
            image: "./assets/img/cd-img/roar.jpg"
        },
        {
            name: "Shape of you",
            singer: "Ed Sheeran",
            path: "./assets/audio/shape_of_you.mp3",
            image: "./assets/img/cd-img/shape_of_you.jpg"
        },
        {
            name: "We don't talk anymore",
            singer: "Charlie Puth",
            path: "./assets/audio/we_dont_talk_anymore.mp3",
            image: "./assets/img/cd-img/we_dont_talk_anymore.jpg"
        },
        {
            name: "Senorita",
            singer: "Camila Cabello",
            path: "./assets/audio/senorita.mp3",
            image: "./assets/img/cd-img/senorita.jpg"
        },
    ],

    // Define properties
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    // Render song
    render: function(){
        const songHtmlELe = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="title">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = songHtmlELe.join('');
    },

    // Handle events
    handleEvents: function(){
        const cdWidth = cd.offsetWidth;
        const _this = this;

        // Xu ly phong to, thu nho cd play
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // Xu ly cd quay
        const cdAnimate = cd.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdAnimate.pause();
        
        // play song
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        }

        // Listen event of audio
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing');
            cdAnimate.play();
        }
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdAnimate.pause();
        }

        // To next song
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.randomSong();
            }else{
                _this.toNextSong();
            }
            audio.play();
            _this.render();
            _this.scrollActiveSong();
        }

        // To previous song
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.randomSong();
            }else{
                _this.toPrevSong();
            }
            audio.play();
            _this.render();
            _this.scrollActiveSong();
        }

        // Thay doi tien do bai hat
        audio.ontimeupdate = function(){
            if(audio.duration){
                progress.value = Math.floor(audio.currentTime / audio.duration * 100);
            }
        }

        // Xu ly khi tua
        progress.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }

        // Xu ly random song
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
        }

        // Xu ly repeat song
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Xu ly khi bai hat ket thuc
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
               nextBtn.click();
            }
        }

        // Lang nghe khi click vao playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.option')){
                // Xu ly khi click vao song
                if(songNode){
                    _this.currentIndex = Number (songNode.dataset.index); // songNode.dataset.index tra ve chuoi nen phai ep kieu sang Number
                    // Hoac dung getAttribute: _this.currentIndex = songNode.getAttribute('data-index'); 
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
                }

                // Xu ly khi click vao option (dau ...) 
            }
        }
        
    },
    
    // Load current song
    loadCurrentSong: function(){
        heading.innerText = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    
    // To next song
    toNextSong: function(){
        this.currentIndex ++;
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    // To previous song
    toPrevSong: function(){
        this.currentIndex --;
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    // Random song
    randomSong: function(){
        let randomIndex; 
        do{
            randomIndex = Math.floor(Math.random() * this.songs.length);
        }while(randomIndex === this.currentIndex)
        this.currentIndex = randomIndex;
        this.loadCurrentSong(); 
    },

    // Scroll current song into view
    scrollActiveSong: function(){
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior : 'smooth',
                block: 'center',
            });
           
        }, 500)
    },

    start: function(){
        
        // Define properties
        this.defineProperties();

        // Handle events
        this.handleEvents();
        
        // Load current song
        this.loadCurrentSong();

        // Render song 
        this.render();
    }
}

// Start app
app.start()