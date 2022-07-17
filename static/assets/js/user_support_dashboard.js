$('.edit').click(function () {
    const row = $(this).closest('tr');
    const date = row.find('.date').text();

    const recruiter = row.find('.recruiter').text();
    const client = row.find('.client').text();
    const job = row.find('.job').text();
    const target = row.find('.target').text();
    const achievement = row.find('.achievement').text();
    const id = row.find('.id').text();

    document.getElementById('modal_date').value = date;
    document.getElementById('modal_recruiter').value = recruiter;
    document.getElementById('modal_client').value = client;
    document.getElementById('modal_job').value = job;
    document.getElementById('modal_target').value = target;
    document.getElementById('modal_achievement').value = achievement;
    document.getElementById('modal_id').value = id;
})

$('.edittask').click(function () {
    const row = $(this).closest('tr');

    const date = row.find('.fetchtask_date').text();
    const from = row.find('.fetchtask_from').text();
    const to = row.find('.fetchtask_to').text();
    const desc = row.find('.fetchtask_desc').text();
    const target = row.find('.fetchtask_target').text();
    const status = row.find('.fetchtask_status').text();
    const comments = row.find('.fetchtask_comments').text();
    const id = row.find('.fetchtask_id').text();

    document.getElementById('task_date').value = date;
    document.getElementById('task_from').value = from;
    document.getElementById('task_to').value = to;
    document.getElementById('task_desc').value = desc;
    document.getElementById('task_target').value = target;
    document.getElementById('task_status').value = status;
    document.getElementById('task_comments').value = comments;
    document.getElementById('task_id').value = id;
})