// Form repeater
$(document).ready(function () {
    $('.repeater').repeater({
        initEmpty: false, // Initialize with empty repeater items
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            $(this).slideDown(); // Slide down the repeater item when shown
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement); // Slide up and delete the repeater item when hidden
            setTimeout(() => {
                generateCV(); // Generate CV after a delay of 500ms to ensure the data is updated
            }, 500);
        },
        isFirstItemUndeletable: true // The first repeater item cannot be deleted
    })
})
