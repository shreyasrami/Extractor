$('.edit').click(function () {
            const row = $(this).closest('tr');

            const id = row.find('.fetch_id').text();
            const industry = row.find('.fetch_industry').text();

            document.getElementById('modal_id').value = id;
            document.getElementById('modal_name').value = industry;
            document.getElementById('type').value = "industry";
        })