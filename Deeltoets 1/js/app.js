//Namespace aangemaakt, als die al bestaat wordt er een leeg object aangemaakt.
var SCOREAPP = SCOREAPP || {};

(function () {
    // Data objecten, hier wordt de json ingeladen
    SCOREAPP.schedule = {
        title:'Schedule 1',
        description:'Schedule is de eerste pagina',
        items: [
   { date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
   { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
   { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
   { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
   { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},
   { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
   { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
   { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
   { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
   { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
    ]
    };

     SCOREAPP.game = {
         title:'Game',
         description:'Game is de tweede pagina',
         items: [
    { score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
    ]
    };

     SCOREAPP.ranking = {
         title:'Ranking',
         description:'Ranking is de derde pagina',
         items: [
    { team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
    { team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
    { team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
    { team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
    { team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
    ]
    };

    // Controller Init, Controller is een object.
    // Hier worden alle functies genoemd die in begin moeten opstarten
    SCOREAPP.controller = {
        init: function () {
            // Initialize router
            SCOREAPP.routing.init();
        }
    };

    // Router (object)
    SCOREAPP.routing = {
        init: function () {
            routie({
                //zoek naar schedule in browserbalk, als die vindt render page schedule.
                // zorgt ervoor dat data-route werkt.
                '/schedule': function() {
                    SCOREAPP.page.render('schedule');
                },
                '/game': function() {
                    SCOREAPP.page.render('game');
                },

                '/ranking': function() {
                    SCOREAPP.page.render('ranking');
                },
                //sterretje is als er geen wordt gevonden. default
                '*': function() {
                    SCOREAPP.page.render('schedule');
                }
            });
        },

        //methode
        change: function () {
            var route = window.location.hash.slice(2),
                //verwijder van elke section de active class.
                //qwery is zelfde als $ van jquery, het het selecteer een onderdeel uit de html.
                sections = qwery('section'),
                section = qwery('[data-route=' + route + ']')[0];

            // Show active section, hide all other
            if (section) {
                for (var i=0; i < sections.length; i++){
                    sections[i].classList.remove('active');
                }
                section.classList.add('active');
            }

            // Default route
            if (!route) {
                sections[0].classList.add('active');
            }

        }
    };

    // Pages
    SCOREAPP.page = {
        render: function (route) {
            // http://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
            var data = eval('SCOREAPP.'+route);
            //transparency is een micro lib die er voor zorgt dat data-bind werkt en de javascript en html samenwerken.
            // .render is een functie die wordt opgevraagd in de microlib
            Transparency.render(qwery('[data-route='+route+']')[0], data);
            SCOREAPP.routing.change();
        }
    }

    // DOM ready start/voer de controller (uit) met de init
    domready(function () {
        // Kickstart application
        SCOREAPP.controller.init();
    });

})();