$('.edit').click(function () {
                const row = $(this).closest('tr');

                const id = row.find('.id').text();
                const date = row.find('.date').text();
                const client = row.find('.client').text();
                const job = row.find('.job').text();
                const target = row.find('.target').text();
                const achievement = row.find('.achievement').text();

                document.getElementById('modal_id').value = id;
                document.getElementById('modal_date').value = date;
                document.getElementById('modal_client').value = client;
                document.getElementById('modal_job').value = job;
                document.getElementById('modal_target').value = target;
                document.getElementById('modal_achievement').value = achievement;
            })