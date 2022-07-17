var all=[];
        $(document).on('change','input[type=checkbox]' ,function(){
            all = [];
            $('input[class=checkbox]:checked').each(function(){
                all.push($(this).val());
            });
            document.getElementById('modal_swap_client').value = all;
            var myJSON = JSON.stringify(all);
            document.getElementById('modal_swap_client_fetch').value = myJSON;
        });


        $(document).ready(function(){
    $('#select_all').on('click',function(){
        if(this.checked){
            $('.checkbox').each(function(){
                this.checked = true;
            });
        }else{
             $('.checkbox').each(function(){
                this.checked = false;
            });
        }
    });

    $('.checkbox').on('click',function(){
        if($('.checkbox:checked').length == $('.checkbox').length){
            $('#select_all').prop('checked',true);
        }else{
            $('#select_all').prop('checked',false);
        }
    });
});