$(() => {

console.log('connected');

$('#aboutMe').on('click', (e) =>{
	$('#modal1div').css('display', 'block');
	$('#modal1divcontainer').css('display', 'block');
});


$('#modal1button').on('click', (e) => {
$('#modal1div').css('display', 'none');
$('#modal1divcontainer').css('display', 'none');
});

});