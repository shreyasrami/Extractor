$('.edit').click(function () {
                const row = $(this).closest('tr');

                const id = row.find('.fetch_id').text();
                const taskDate = row.find('.fetch_taskDate').text();
                const fromUser = row.find('.fetch_fromUser').text();
                const toUser = row.find('.fetch_toUser').text();
                const desc = row.find('.fetch_desc').text();
                const targetDate = row.find('.fetch_targetDate').text();
                const status = row.find('.fetch_status').text();
                const comments = row.find('.fetch_comments').text();

                document.getElementById('modal_id').value = id;
                document.getElementById('modal_taskDate').value = taskDate;
                document.getElementById('modal_fromUser').value = fromUser;
                document.getElementById('modal_toUser').value = toUser;
                document.getElementById('modal_desc').value = desc;
                document.getElementById('modal_targetDate').value = targetDate;
                document.getElementById('modal_status').value = status;
                document.getElementById('modal_comments').value = comments;

            })