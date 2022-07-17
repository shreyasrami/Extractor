$('.recruiter').blur(function()
{
var row = $(this).closest('tr');
    if( $(this).val() != "" ) {
          row.find(".recruiter").prop("required", true);
          row.find(".client").prop("required", true);
          row.find(".job").prop("required", true);
          row.find(".target").prop("required", true);
    }
    else{
        row.find(".recruiter").prop("required", false);
          row.find(".client").prop("required", false);
          row.find(".job").prop("required", false);
          row.find(".target").prop("required", false);
    }
});

$('.client').blur(function()
{
var row = $(this).closest('tr');
    if( $(this).val() != "" ) {
          row.find(".recruiter").prop("required", true);
          row.find(".client").prop("required", true);
          row.find(".job").prop("required", true);
          row.find(".target").prop("required", true);
    }
    else{
        row.find(".recruiter").prop("required", false);
          row.find(".client").prop("required", false);
          row.find(".job").prop("required", false);
          row.find(".target").prop("required", false);
    }
});

$('.target').blur(function()
{
var row = $(this).closest('tr');
    if( $(this).val() != "" ) {
          row.find(".recruiter").prop("required", true);
          row.find(".client").prop("required", true);
          row.find(".job").prop("required", true);
          row.find(".target").prop("required", true);
    }
    else{
        row.find(".recruiter").prop("required", false);
          row.find(".client").prop("required", false);
          row.find(".job").prop("required", false);
          row.find(".target").prop("required", false);
    }
});