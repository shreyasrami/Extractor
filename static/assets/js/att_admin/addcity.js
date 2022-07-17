$('.edit').click(function () {
            const row = $(this).closest('tr');

            const id = row.find('.fetch_id').text();
            const city = row.find('.fetch_city').text();

            document.getElementById('modal_id').value = id;
            document.getElementById('modal_name').value = city;
            document.getElementById('type').value = "city";
        })