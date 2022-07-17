$('.edit').click(function () {
            const row = $(this).closest('tr');

            const id = row.find('.fetch_id').text();
            const status = row.find('.fetch_status').text();
            const desc = row.find('.fetch_desc').text();

            document.getElementById('modal_id').value = id;
            document.getElementById('modal_name').value = status;
            document.getElementById('modal_names').value = status;
            document.getElementById('modal_desc').value = desc;
            document.getElementById('type').value = "status";
        })