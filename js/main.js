const app = new Vue({
    el: '#app',
    
    data: {
        inputCode: '',
        flashlight: false,
        activeSection: 'hacking',
        timer: 3600,    // 1 heure

        // Images qui sont affichées dans le menu de navigation :
        activeMenuImage: {
            hacking: 'img/IconesCodeActive.png',
            flashlight: 'img/IconesLampe.png',
            scanning: 'img/IconesRA.png'
        },

        // URL de toutes les images du menu de navigation :
        imageSrc: {
            hacking: {
                normal: 'img/IconesCode.png',
                focus: 'img/IconesCodeActive.png'
            },
            flashlight: {
                normal: 'img/IconesLampe.png',
                focus: 'img/IconesLampeActive.png'
            },
            scanning: {
                normal: 'img/IconesRA.png',
                focus: 'img/IconesRAActive.png'
            },
        },

        user: {
            name: 'Gucci',
            cash: 0
        },

        codes: [
            {
                id: 1,
                password: 'GucciGang69',
                cash: 5000
            },
            {
                id: 2,
                password: 'GucciGang70',
                cash: 15250
            },
            {
                id: 3,
                password: 'GucciGang71',
                cash: 25000
            },
            {
                id: 4,
                password: 'GucciGang72',
                cash: 34500
            },
            {
                id: 5,
                password: 'GucciGang73',
                cash: 125000
            }
        ],
    },

    methods: {
        verifyCode() {
            // Vérification du code :
            this.codes.forEach(code => {
                if (this.inputCode == code.password) {
                    // Lorsqu'un code est vérifié, il est retiré de la liste des codes :
                    this.codes.splice(code.id-1, 1);
                    // Le joueur reçoit le "cash" du code :
                    this.getMoney(code.cash);
                }
            });

            // Réinitialisation du code entré par le joueur :
            this.inputCode = '';
        },

        getMoney(cash) {
            this.user.cash += cash;
            alert(cash);
        },

        flashlightSwitch() {
            if (this.flashlight == false) {
                this.flashlight = true;
                this.activeMenuImage.flashlight = this.imageSrc.flashlight.focus; 
                alert('flashlight on');
            } else {
                this.flashlight = false;
                this.activeMenuImage.flashlight = this.imageSrc.flashlight.normal; 
                alert('flashlight off');
            }
        },

        changeSection(section) {
            switch (section) {
                case 'hacking':
                    this.activeMenuImage.hacking = this.imageSrc.hacking.focus; 
                    this.activeMenuImage.scanning = this.imageSrc.scanning.normal; 
                    break;
                    
                    case 'scanning':
                    this.activeMenuImage.scanning = this.imageSrc.scanning.focus; 
                    this.activeMenuImage.hacking = this.imageSrc.hacking.normal; 
                    break;
            
                default:
                    break;
            }
        }
    },

    computed: {
        /* now() {
            return new Date().getTime();
        }, */

        timeLeft() {
            // Affichage du temps restant en minutes :
            return Math.round(this.timer / 60);
        }
    },
});

setInterval(() => {
    app.timer --;
}, 1000);
