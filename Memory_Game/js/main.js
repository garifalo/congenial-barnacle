
   
/*--------------------- 
		Global variables 
-----------------------*/	
let colors =  ['#ff0000','#ffff00','#ff8800',
				'#00ff00','#ff00ff','#00ffff',
				'#0000ff','#000000','#ffffff',
				'#ce00ff','#14930a','#0af89d'];

let cards_num = 3;
let first_time = true;

let current_card_index;
let cards_colors;

let $cards_box;
let $cards;
let $picker;
	
/*--------------- 
	create Cards 
----------------*/
function create_cards(){

	for(let i=0 ; i < cards_num ; i++){
		let div = document.createElement('div');
		div.classList.add('card');
		$cards_box.appendChild(div);
	}

	$cards = $$('.card');
}
/*--------------- 
	color  Cards 
----------------*/
function color_cards(){	
	
	// find 3 unique random colors
	cards_colors = [];	
	let i = 0;
	while( cards_colors.length < cards_num ){
		//get random color
		let r = randomize( 0 , colors.length - 1 );
		let random_color = colors[r];
		
		if( !cards_colors.includes(random_color) ){
			cards_colors.push(random_color);
			$cards[i].style.backgroundColor = random_color;
			$cards[i].hex_color = random_color;
			i++
		}
	}
}

/*-------------------- 
	init color picker 
----------------------*/
function init_color_picker(){

	for(let color of colors) {

		let div = document.createElement('div');

		div.hex_color = color;
		div.classList.add('picker-box');

		div.style.backgroundColor = color;

		div.addEventListener('click', function(event) {
			user_picked_color(event.target.hex_color);
		});

		$picker.appendChild(div);
	}

}
/*------------------------
		user picked color 
-------------------------*/
function user_picked_color(selected_hex_color){
	
	console.log('user picked color:',selected_hex_color);
	console.log("correct color:",cards_colors[current_card_index]);
	console.log("card hex_color:",$cards[current_card_index].hex_color);
	
	if(selected_hex_color === cards_colors[current_card_index]){		
		
		color_current_card(selected_hex_color);

		//last card?
		if(current_card_index === cards_num - 1){
			conclude_game("You WON!!! \n Try again?")
			//setTimeout(conclude_game, 0, "You WON!!! \n Try again?");//delaying
		}else{
			//go to the next card...
			current_card_index++;
			mark_current_card();
		}

	}else{
		conclude_game("Wrong Answer... \n Try again?")
	}
}
/*------------------------
		color current card 
--------------------------*/
function color_current_card(color){ 
	$cards[current_card_index].style.backgroundColor = color;
}
/*--------------------
		final outcome 
----------------------*/
function conclude_game(msg){ 
	let play_again = confirm(msg);
	if(play_again){
		init_game();
	}else{
		alert('Good Bye :)');
		window.location.href = 'http://www.amitit.co.il/'
	}
}
/*--------------------
	hide Cards colors 
----------------------*/
function hide_cards_colors(){
	for(let card of $cards) {
		card.style.backgroundColor = 'white';	
	}
}
/*--------------------
	mark current Card 
----------------------*/
function mark_current_card(){
	unmark_all_cards()
	// mark current Card
	$cards[current_card_index].style.border = 'red 5px solid';
	// $cards[current_card_index].classList.remove('unmarked-card');
	// $cards[current_card_index].classList.add('marked-card');

}
/*--------------------
	un-mark all Cards 
----------------------*/
function unmark_all_cards(){
	for(let card of $cards) {
		card.style.border = '#4b4b4b 1px solid';
		// card.classList.remove('marked-card');
		// card.classList.add('unmarked-card');
	}
}
/*-----------------
		start timer
-------------------*/
function start_timer(){
	setTimeout(()=> {
		hide_cards_colors();
		mark_current_card();
	},2000);
}
/*-----------------
		init Game
-------------------*/
function init_game(){
	//reference dom elements
	$cards_box  = $('.cards-box');
	$picker = $('.picker');

	//reset global vars
	current_card_index = 0;
	
	if(first_time){
		//create UI if needed
		init_color_picker();
		create_cards();
		//make sure this happens only once...
		first_time = false;
	}
	//unmark_all_cards();
	color_cards();		
	start_timer();
}
/*------------------
	Starting point
	-------------------*/
addEventListener("DOMContentLoaded",init_game)

	

				  