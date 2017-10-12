// -- Initialisation de jQuery (DOM READY)
$(function() {

// Vérifier saisie du formulaire

    //Quand? On écoute quand le formulaire est soumis:
        $('#formulaire').on('submit',function(e){ 
        console.log(e);

    //stopper la redirection de la page
        e.preventDefault();

    //Quoi? les champs select id quelchat et la textarea id raisonschoix
    //on les transforme en variables pour les pouvoir les manipulaer plus aisément par la suite
        var quelchat = $('#quelchat');
        var raisonschoix = $('#raisonschoix');
    
    //Comment? Avec une variable qui sera retournée fausse si les conditions de remplissage des champs ne sont pas respectées

        var mesChampsSontValides = true;

            //verification du choix de chat avec affichage d'erreur si aucun chat sélectionné
               
                if (quelchat.val() === "") {
                mesChampsSontValides = false;
                
                $('#selectCat').addClass('has-error');
                }
            
            //verification du textarea avec affichage d'erreur si texte inférieur à 15 caractères
                if(raisonschoix.val().length <= 15){
                mesChampsSontValides = false;
                
                $('#message').addClass('has-error');
                }
            
    //Si mes champs sont valides
        if(mesChampsSontValides){
        // J'affiche un message de confirmation d'envoi de la demande qui reprend le nom du chat sélectionné
             $(this).replaceWith('<div class="alert alert-success">Bonjour, votre demande pour l\'adoption de  '+ $('#quelchat').val()+ ' a bien été prise en compte, nous revenons vers vous dans les meilleurs délais !</div>');
        }
    }); // fin de l'écoute du submit
    
        // Je supprime la classe has-error dès lors que l'utilisateur agit 

            //Pour l'erreur taille insuffisante du message 
                $('#formulaire').on('keyup',function(e){
                        $('#message').removeClass('has-error');

                })
            
            //Pour l'erreur de sélection du chat

            $('#quelchat').on('click',function(e){
                    $('#selectCat').removeClass('has-error');
            })

    }); // -- Fin de jQuery READY !