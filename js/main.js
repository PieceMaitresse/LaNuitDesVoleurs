const app = new Vue({
    el: '#app',
    
    data: {
        flashlight: false,
        activeSection: 'hacking',
        timer: 3600,    // 3600 secondes = 1 heure
        userCode: '',
        codes: [
            {
                id: 1,
                password: 'GucciGang69',
                money: 5000
            },
            {
                id: 2,
                password: 'GucciGang70',
                money: 15250
            },
            {
                id: 3,
                password: 'GucciGang71',
                money: 25000
            },
            {
                id: 4,
                password: 'GucciGang72',
                money: 34500
            },
            {
                id: 5,
                password: 'GucciGang73',
                money: 125000
            }
        ],
    },

    methods: {
        verifyCode() {
            // Vérification du code :
            this.codes.forEach(element => {
                if (this.userCode == element.password) {
                    // Lorsqu'un code est vérifié, il est retiré de la liste des codes :
                    this.codes.splice(element.id-1, 1);
                    // Le joueur reçoit le "money" du code :
                    this.getReward(element.money);
                }
            });

            // Réinitialisation du code entré par le joueur :
            this.userCode = '';
        },

        getReward(money) {
            alert(money);
        },

        flashlightSwitch() {
            if (this.flashlight == false) {
                this.flashlight = true;
                alert('flashlight on');
            } else {
                this.flashlight = false;
                alert('flashlight off');
            }
        },
    },

    computed: {
        now() {
            return new Date().getTime();
        },

        timeLeft() {
            // Affichage du temps restant en minutes :
            return Math.round(this.timer / 60);
        }
    },
});

setInterval(() => {
    app.timer --;
}, 1000);
