$(document).ready(function() {
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');
    var baseURL = 'http://127.0.0.1:8000/';
    var filter = $('#filter');

    $(deleteBtn).on('click', function(e) {
        e.preventDefault();
        var delLink = $(this).attr('href');
        var result = confirm('quer deletar esta tarefa');

        if(result) {
            window.location.href = delLink
        }
    });

    $(searchBtn).on('click', function() {
        searchForm.submit()

    });

    $(filter).change(function() {
        var filter = $(this).val();
        window.location.href = baseURL + '?filter=' + filter;
    })

});