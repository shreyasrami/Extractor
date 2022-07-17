$('.edit').click(function () {
                const row = $(this).closest('tr');

                const name = row.find('.fetch_name').text();
                const type = row.find('.fetch_type').text();
                const revenue = row.find('.fetch_revenue').text();

                document.getElementById('modal_name').value = name;
                document.getElementById('modal_type').value = type;
                document.getElementById('modal_revenue').value = revenue;

            })