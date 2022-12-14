$('input[type="checkbox"]').on('click', function(){
    let id = $(this).attr('id');
    let checkedValue = $(this).is(':checked') ? 1 : 0;
    if(checkedValue===1){
        $(`#label-${id}`).css('text-decoration','line-through');
    }else{
        $(`#label-${id}`).css('text-decoration','none');
    }
     

    $.ajax({
        type: 'POST',
        url: `toggleTask/${id}/${checkedValue}`,
        success: function(data){
        },
        error: function(err){
            console.log(err);
        }
    })

})

