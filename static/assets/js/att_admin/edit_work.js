$('.edit').click(function () {
                const row = $(this).closest('tr');

                const date = row.find('.date').text();
                const recruiter = row.find('.recruiter').text();
                const rec = row.find('.rec').text();
                const client = row.find('.client').text();
                const job = row.find('.job').text();
                const target = row.find('.target').text();

                document.getElementById('modal_date').value = date;
                document.getElementById('modal_recruiter').value = recruiter;
                document.getElementById('inp_recruiter').value = rec;
                document.getElementById('client').value = client;
                document.getElementById('inp_client').value = client;
                document.getElementById('inp_job').value = job;
                document.getElementById('modal_target').value = target;
                document.getElementById('inp_target').value = target;

            })