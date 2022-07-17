jQuery(function ($) {
            var $inputs = $('input[id=addContactworkNum],input[id=addContactmobileNum]');
            $inputs.on('input', function () {
                // Set the required property of the other input to false if this input is not empty.
                $inputs.not(this).prop('required', !$(this).val().length);
            });
        });

$('.edit').click(function () {
                const client = document.getElementById('client').innerText;
                const industry = document.getElementById('industry').innerText;
                const website = document.getElementById('website').innerText;
                const city = document.getElementById('city').innerText;
                const about = document.getElementById('about').innerText;

                document.getElementById('modal_client').value = client;
                document.getElementById('display_client').value = client;
                document.getElementById('modal_industry').value = industry;
                document.getElementById('modal_website').value = website;
                document.getElementById('modal_city').value = city;
                document.getElementById('modal_about').value = about;
            })

            $('.add').click(function () {
                const client = document.getElementById('client').innerText;

                document.getElementById('modal_clients').value = client;
            })

            $('.addContact').click(function () {
                const client = document.getElementById('client').innerText;

                document.getElementById('addContact_client').value = client;
            })

            $('.editContact').click(function () {
                const row = $(this).closest('tr');

                const client = document.getElementById('client').innerText;

                const name = row.find('.fetch_name').text();
                const email = row.find('.fetch_email').text();
                const workNum = row.find('.fetch_workNum').text();
                const mobileNum = row.find('.fetch_mobileNum').text();
                const dob = row.find('.fetch_dob').text();
                const location = row.find('.fetch_location').text();


                document.getElementById('contact_client').value = client;
                document.getElementById('check_name').value = name;
                document.getElementById('contact_name').value = name;
                document.getElementById('contact_email').value = email;
                document.getElementById('contact_workNum').value = workNum;
                document.getElementById('contact_mobileNum').value = mobileNum;
                document.getElementById('contact_location').value = location;

                if (!(dob == "")){
                    document.getElementById('contact_dob').value = dob;
                }
            })