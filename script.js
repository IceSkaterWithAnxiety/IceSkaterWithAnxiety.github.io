document.addEventListener('DOMContentLoaded', function () {
    var collapsibles = document.querySelectorAll('.Collapsible');

    collapsibles.forEach(function (coll) {
        coll.addEventListener('click', function () {
            var content = this.nextElementSibling;

            // Close all other collapsible sections
            collapsibles.forEach(function (otherColl) {
                if (otherColl !== coll) {
                    var otherContent = otherColl.nextElementSibling;
                    otherContent.classList.remove('show');
                }
            });

            content.classList.toggle('show');
        });
    });
});
