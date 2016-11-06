/**partie recuperation des categorie pour le formulaire */
$(function() {
    var categories = '';
    $.ajax({

        type: 'POST',
        dataType: 'JSON',
        url: "requete.php",
        success: function (data) {
            var categories = '';
            console.log(data);
            $.each(data, function (i) {
                categories += "<option value=\"" + data[i].cat_id + "\">" + data[i].cat_libelle + "</option>"
            });
            console.log(categorie);
            $("#categorie").html(categories);
        },
        error: function () {
            console.log("error");
        }
    });
});