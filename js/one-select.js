(function ($, Drupal, Bootstrap){




    jQuery(document).ready(function() {

        console.log('Theme : In the beginning of the JS file');

        //jQuery(".dropdown-toggle").clone().appendTo("#myCheckboxes");

        $(".form-checkbox").on("click", function () {

            console.log('Checkbox checked!');

        });

        /*$("input[type=checkbox]").on("click", function () {

          console.log('Checkbox checked!');

        });*/

        var limitSelection = function () {


            $("input[type=checkbox]").on("click", function () {

                if ($(this).prop('checked')) {

                    $("input[type=checkbox]").each(function () {
                        if ($(this).prop('checked')) {

                        }
                        else {
                            $(this).prop('disabled', true);
                        }
                    });

                }
                else {

                    $("input[type=checkbox]").each(function () {

                        $(this).prop('disabled', false);

                    });

                }
            });
        };

        limitSelection();

        //When the user paged the table @Class : parent of the table
        $(".view-training-list-item-browser-search-api").on('change', function () {

            console.log('Paged!');
            limitSelection();

        });

    });


})(window.jQuery, window.Drupal, window.Drupal.bootstrap);